/**
 * Generates and fills the table content based on the provided list of users.
 *
 * @function
 * @param {Array<Object>} usersToDisplay - The list of users to be displayed in the table.
 * Each user object should have properties: `name`, `age`, and `gender`.
 *
 * @example
 *
 * const users = [
 *   { name: 'John', age: 25, gender: 'Male' },
 *   { name: 'Jane', age: 30, gender: 'Female' },
 * ];
 * generateTableContent(users);
 *
 * @throws {Error} If the required table structure (element with id "users" containing a tbody) doesn't exist in the DOM.
 * @returns {void}
 */
export function generateTableContent(usersToDisplay) {
  const tableBody = document.getElementById('users').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = "";

  usersToDisplay.forEach(user => {
    const row = tableBody.insertRow();
    const nameCell = row.insertCell(0);
    const ageCell = row.insertCell(1);
    const genderCell = row.insertCell(2);

    nameCell.textContent = user.name;
    ageCell.textContent = user.age;
    genderCell.textContent = user.gender;
  });
}