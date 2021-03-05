
// css selector
// query Selector

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
// console.log('aaaaaaaaaaaaa', liOdd, liEven);
liOdd.forEach(function (li, index) {
    li.style.background = '#f00';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#00f';
}

// traverse the dom
const ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.children);


// ul.firstElementChild.parentElement;

// Create element
const li = document.createElement('li');
li.className = 'collection-item';
li.innerHTML = 'New Item';
// console.log(li);

// setTimeout(() => {
//     ul.appendChild(li);
// }, 1000);

let btnAdd = document.getElementById('btnAdd');
let inputId = document.getElementById('inputId');
let newTaskContent = '';
// console.log(inputId.value);

btnAdd.addEventListener('click', (ev) => {
    // console.log('aaaaaaaaaaaa', ev);
    if (!newTaskContent) {
        alert('Bạn fải nhập nội dung')
        return;
    }
    items.push(newTaskContent);
    renderList();
    inputId.value = '';
    newTaskContent = '';
});

inputId.addEventListener('input', (ev) => {
    newTaskContent = inputId.value;
});

// // let us build the whole list in javascript
let items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
// const test = {
//     name: 'Tan',
//     age: 30
// };
// console.log(JSON.stringify(test));
function addItem(text, index) {
    let _li = document.createElement('li');
    _li.innerText = text;
    _li.className = 'collection-item';

    let btnRemove = document.createElement('button');
    btnRemove.innerText = 'X';
    btnRemove.id = index;
    btnRemove.addEventListener('click', (ev) => {
        items.splice(btnRemove.id, 1);
        renderList()
        storeData()
    });
    _li.appendChild(btnRemove);

    ul.appendChild(_li);
    storeData();
}
function renderList() {
    ul.innerHTML = '';
    items.forEach((el, i) => {
        addItem(el, i)
    });
}

function storeData() {
    localStorage.setItem('todoList', JSON.stringify(items));
}

function fetchData() {
    let data = localStorage.getItem('todoList');
    data = JSON.parse(data);
    items = data;
    renderList();
}

fetchData()

