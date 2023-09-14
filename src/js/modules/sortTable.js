import { getComparator } from './getComparator.js';

let currentSortedColumn = null;

/**
 * Sorts the table rows based on the specified column and updates the UI
 * to reflect the sorting. Also manages the UI state for sorting indicators.
 *
 * @function
 * @param {string} column - The name of the column by which the table should be sorted.
 * This column name should be a key in the `columnMap` parameter.
 *
 * @param {Object.<string, number>} columnMap - An object where keys are column names
 * and values are their corresponding indices in the table. For instance,
 * if "name" column is the first column in the table, then columnMap might have
 * a key-value pair of {"name": 0}.
 *
 * @example
 *
 * const columnMapping = { 'name': 0, 'age': 1, 'gender': 2 };
 * sortTable('name', columnMapping);
 *
 * @throws {Error} If the column name provided is not found in the `columnMap`
 * or if any other unexpected issue occurs during sorting.
 *
 * @global
 * @var {string} currentSortedColumn - Keeps track of the currently sorted column
 * to manage the active state UI.
 *
 * @returns {void}
 */
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