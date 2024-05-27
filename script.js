const inputName = document.querySelector('#input__name');
const inputPrice = document.querySelector('#input__price');
const category = document.querySelector('#selectCategory');
const tbody = document.querySelector('.purcashes__list');
const list = document.querySelector('.purcashes__item');
const btn = document.querySelector('.btn');
const modalWindow = document.querySelector('#myModal');
const closeBtn = document.querySelector('#close');
const cancelBtn = document.querySelector('#cancel');
const removeBtn = document.querySelector('#remove');
const price = document.querySelectorAll('.legend__price');
const firstPrice = price[0];
console.log(firstPrice.dataset.price);

btn.addEventListener('click', (e) => {
    e.preventDefault();
}); 

function addTask () {
    let itemName = document.createElement('td');
    let itemPrice = document.createElement('td');
    let options = document.createElement('td');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        modalWindow.style.display = 'block';
      });
      closeBtn.addEventListener('click', () => {
        modalWindow.style.display = 'none'
      });
      cancelBtn.addEventListener('click', () => {
        modalWindow.style.display = 'none'
      });
      removeBtn.addEventListener('click', () => {
        list.removeChild(itemName);
        list.removeChild(itemPrice);
        list.removeChild(options);
        list.removeChild(deleteBtn);
        modalWindow.style.display = 'none';
      });

    itemName.textContent = inputName.value;
    itemPrice.textContent = inputPrice.value;
    options.textContent = category.value;

    if (inputName.value === '') {
      alert('Поле "Товар" обязательно для ввода.')
    } 
    else {
        list.appendChild(itemName);
        list.appendChild(options);
        list.appendChild(itemPrice);
        list.appendChild(deleteBtn);
    }
    inputName.value = '';
    inputPrice.value = '';
}

btn.addEventListener('click', addTask);