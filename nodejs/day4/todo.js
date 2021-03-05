const express = require('express');
const mongodb = require('mongodb');
const app = express();
app.use(express.json());
app.listen(3000);

const randomID = () => Math.random().toString(36).substr(3, 6);

const main = async () =>  {
    const url = "mongodb://127.0.0.1/27017";
    const client = new mongodb.MongoClient(url, {
        useUnifiedTopology: true
    });
    await client.connect();
    const db = client.db('test');
    const todos = db.collection('todo');
    console.log('connected');
    
    app.get('/todos', async (req, res) => {
        const todoList = await todos.find().toArray();
        res.json(todoList);
    });

    app.post('/todo', async (req, res) => {
        const newTodo = {
            _id: randomID(),
            text: req.body.text
        };
        await todos.insertOne(newTodo);
        res.json(newTodo);
    });
    
    app.get('/todo/:id', async (req, res) => {
        const todoSelected = await todos.findOne({_id: req.params.id});
        res.json(todoSelected);
    });

    app.post('/todo/:id', async (req, res) => {
        const updatedTodo = await todos.updateOne(
            {_id: req.params.id},
            {$set: {
                text: req.body.text
            }}
        );
        res.json(updatedTodo);
    });
    
    app.get('/todos/:id', async (req, res) => {
        const deletedTodo = await todos.deleteOne({_id: req.params.id});
        res.json(deletedTodo);
    });
}

main();