const inputName = document.querySelector('#input__name');
const inputPrice = document.querySelector('#input__price');
const category = document.querySelector('#selectCategory');
const tbody = document.querySelector('.purcashes__list');
const list = document.querySelector('.purcashes__item');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
}); 

function addTask () {
    let itemName = document.createElement('td');
    let itemPrice = document.createElement('td');
    let options = document.createElement('td');
    itemName.textContent = inputName.value;
    itemPrice.textContent = inputPrice.value;
    options.textContent = category.textContent;
    list.appendChild(itemName);
    list.appendChild(options);
    list.appendChild(itemPrice);
}

btn.addEventListener('click', addTask);