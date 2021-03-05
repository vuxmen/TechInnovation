const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.end('hello world');
});

app.get('/hello/:name', (req, res) => {
  res.end(`hello ${req.params.name}`);
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

app.get('/hello', (req, res) => {
    res.end('hello 2');
});

app.use(express.json()); //He thong day du lieu ve JSON object

const users = [
    {
        username: 'admin',
        password: '123456'
    },
    {
        username: 'son',
        password: '1234567'
    }
];

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let token = '';
    for (const u of users) {
        if (u.username === username && u.password === password) {
            token = Math.random().toFixed(6);
            all_tokens[token] = u;
            res.json({"ok": true, token: token});
            return;
        }
        //finish login
        
    }
    res.json({"ok": false, token: Math.random().toFixed(6)});
});

app.get('info: token', (req, rex) => {
    const user = all_tokens(req.params.token);
    res.json(user);
});

app.listen(port);