const price = document.querySelectorAll('.legend__price');
const list = document.querySelector('.purcashes__list');
const item = document.querySelector('.purcashes__item');
const input = document.querySelectorAll('.editor__form-input');
const selectCategory = document.getElementById('selectCategory');
const btn = document.querySelector('.btn');

function addTask () {
    let newItem = document.createElement('td');
    newItem.classList.add('purcashes__td');
    newItem.textContent = input.textContent;
    list.appendChild(item);
    item.appendChild(newItem);
}

btn.addEventListener('click', addTask);