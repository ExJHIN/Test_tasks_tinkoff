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