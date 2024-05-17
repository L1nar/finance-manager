const price = document.querySelectorAll('.legend__price');
const list = document.querySelector('.purcashes__list');
const product = document.querySelectorAll('.editor__form-input');
const selectCategory = document.getElementById('selectCategory');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
    let newItem = document.createElement('li');
    newItem.textContent = product.value;
    list.appendChild(newItem);
});