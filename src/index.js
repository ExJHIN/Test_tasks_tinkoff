const users = [
    {name: "Анна", age: 25, gender: "Женский"},
    {name: "Иван", age: 30, gender: "Мужской"},
    {name: "Мария", age: 28, gender: "Женский"},
    {name: "Дмитрий", age: 35, gender: "Мужской"},
    {name: "Ольга", age: 29, gender: "Женский"}
];

document.getElementById('search').addEventListener('input', function(e) {
    let searchValue = e.target.value.toLowerCase();
    let rows = document.querySelectorAll("#users tbody tr");

    rows.forEach(row => {
        let name = row.querySelector("td:first-child").textContent.toLowerCase();
        row.style.display = name.includes(searchValue) ? "" : "none";
    });
});

function sortTable(column) {
    let table = document.getElementById("users");
    let rows = Array.from(table.rows).slice(1);

    rows.sort((a, b) => {
        let A, B;
        switch (column) {
            case 'name':
                A = a.cells[0].innerText;
                B = b.cells[0].innerText;
                break;
            case 'age':
                A = +a.cells[1].innerText;
                B = +b.cells[1].innerText;
                break;
            case 'gender':
                A = a.cells[2].innerText;
                B = b.cells[2].innerText;
                break;
        }

        if (A < B) return -1;
        if (A > B) return 1;
        return 0;
    });

    rows.forEach(row => table.tBodies[0].appendChild(row));
}

function generateTableContent() {
    const tableBody = document.getElementById('users').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Очистите текущий контент

    users.forEach(user => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const genderCell = row.insertCell(2);

        nameCell.textContent = user.name;
        ageCell.textContent = user.age;
        genderCell.textContent = user.gender;
    });
}


document.addEventListener("DOMContentLoaded", function() {
    generateTableContent();
});