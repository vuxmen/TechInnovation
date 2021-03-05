// what is callback
// setTimeout(() => console.log('hello'), 1000);


// using fetch api
function readAllTodo(callback) {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(r => r.json()).then(d => callback(d));
}

// using fetch api
function createTodo(callback) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Task 1',
            userId: 1000,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(r => r.json()).then(d => callback(d));
}

// readAllTodo((d) => {
//     document.body.innerHTML = JSON.stringify(d);
// });

createTodo((d) => console.log(d));
