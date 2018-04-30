const express = require('express');

const server = express();

const db = require('./data/db');

//GET method, the HTTP method the browser will by default do a GET, will send JSON objects
server.get('/', (req,res) => {
    res.send('Api running');
})

server.get('/api/users', (req, res) => {
    db
    .find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {

    });
});

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    db
    .findById(id)
    .then(user => {
        if(user.length == 0) {
            res.status(400).json({ message: 'user not found' });
        } else {
            res.json(user[0]);
        }
    })
    .catch(err => {
    });
});

// Configures on localhost port 5000, it will do the GET method, the route/request handler 
// function specified with params req,res
server.listen(5000, () => console.log('\n== API Running on port 5000 ==\n'));;