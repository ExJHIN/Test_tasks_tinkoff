"use strict";

import { generateTableContent } from './modules/generateTableContent.js';
import { sortTable } from './modules/sortTable.js';

window.addEventListener('DOMContentLoaded', () => {
  const users = [
    {name: "Анна", age: 25, gender: "Женский"},
    {name: "Иван", age: 30, gender: "Мужской"},
    {name: "Мария", age: 28, gender: "Женский"},
    {name: "Дмитрий", age: 35, gender: "Мужской"},
    {name: "Ольга", age: 29, gender: "Женский"}
  ];

  const columnMap = {
    'name': 0,
    'age': 1,
    'gender': 2
  };
  
  document.getElementById('search').addEventListener('input', function(e) {
    let searchValue = e.target.value.toLowerCase();

    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchValue);
    });

    if (filteredUsers.length < 5) {
      generateTableContent(filteredUsers);
    } else {
      generateTableContent(users);
    }
  });

  document.querySelector('button[data-column="name"]').addEventListener('click', function() {
    sortTable('name', columnMap);
  });
  
  document.querySelector('button[data-column="age"]').addEventListener('click', function() {
    sortTable('age', columnMap);
  });
  
  document.querySelector('button[data-column="gender"]').addEventListener('click', function() {
    sortTable('gender', columnMap);
  });
  
  generateTableContent(users);
});

