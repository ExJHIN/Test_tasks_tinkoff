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