/**
 * Returns a comparator function based on the specified column name.
 *
 * @function
 * @param {string} column - The name of the column to get the comparator for.
 * Valid values are: `'name'`, `'gender'`, and `'age'`.
 *
 * @returns {Function} A comparator function suitable for array sorting.
 * For 'name' and 'gender', it provides string comparison, and for 'age', it provides numerical comparison.
 *
 * @example
 *
 * const users = [
 *   { name: 'John', age: '25', gender: 'Male' },
 *   { name: 'Jane', age: '30', gender: 'Female' },
 * ];
 * users.sort(getComparator('name'));
 *
 * @throws {Error} If the provided column name is not recognized.
 */
export function getComparator(column) {
  switch (column) {
    case 'name':
    case 'gender':
      return (a, b) => a.localeCompare(b);
    case 'age':
      return (a, b) => +a - +b;
    default:
      throw new Error(`Unknown column: ${column}`);
  }
}