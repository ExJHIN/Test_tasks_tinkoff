import "@testing-library/jest-dom";

import { getComparator } from './modules/getComparator.js'
import { generateTableContent } from './modules/generateTableContent.js'

const { screen } = require("@testing-library/dom");

describe("getComparator function", () => {
  test("should correctly compare strings for 'name' and 'gender'", () => {
    const nameComparator = getComparator("name");
    expect(nameComparator("Анна", "Мария")).toBeLessThan(0);
    expect(nameComparator("Мария", "Анна")).toBeGreaterThan(0);
    expect(nameComparator("Анна", "Анна")).toBe(0);

    const genderComparator = getComparator("gender");
    expect(genderComparator("Женский", "Мужской")).toBeLessThan(0);
    expect(genderComparator("Мужской", "Женский")).toBeGreaterThan(0);
  });

  test("should correctly compare numbers for 'age'", () => {
    const ageComparator = getComparator("age");
    expect(ageComparator("25", "30")).toBeLessThan(0);
    expect(ageComparator("30", "25")).toBeGreaterThan(0);
    expect(ageComparator("25", "25")).toBe(0);
  });
});

describe("generateTableContent function", () => {
  // Макет HTML, чтобы была возможность тестировать DOM-манипуляции
  beforeEach(() => {
    document.body.innerHTML = `
      <table id="users">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Пол</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
  });

  test("should correctly generate table content", () => {
    const testUsers = [
      {name: "Анна", age: 25, gender: "Женский"},
      {name: "Иван", age: 30, gender: "Мужской"}
    ];

    generateTableContent(testUsers);

    expect(screen.getByText("Анна")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("Женский")).toBeInTheDocument();

    expect(screen.getByText("Иван")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("Мужской")).toBeInTheDocument();
  });
});