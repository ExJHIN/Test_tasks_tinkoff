import { getComparator } from './getComparator.js';

let currentSortedColumn = null;

export function sortTable(column, columnMap) {
  let table = document.getElementById("users");
  let rows = Array.from(table.rows).slice(1);
  const comparator = getComparator(column);

  rows.sort((a, b) => {
    const A = a.cells[columnMap[column]].innerText;
    const B = b.cells[columnMap[column]].innerText;
    return comparator(A, B);
  });

  rows.forEach(row => table.tBodies[0].appendChild(row));

  // Убрать текущий активный класс
  if (currentSortedColumn) {
    document.querySelector(`button[data-column="${currentSortedColumn}"]`).classList.remove('active');
  }

  // Добавить активный класс на выбранную кнопку
  const clickedButton = document.querySelector(`button[data-column="${column}"]`);
  clickedButton.classList.add('active');
  currentSortedColumn = column;
}