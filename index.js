const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const mongoUrl = 'mongodb://mongo:27017';
let mongoDb = null;


app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send({ message : "MIKEY LIKES IT?????"});
});

app.get('/items', (req, res) => {
    mongoDb.collection('groceries')
        .find({}).toArray()
        .then(function(items) {
            res.send(items);
        });
});

app.post('/items', (req, res) => {
    const newItem = {
        name : req.body.name,
        creationDate : new Date(),
    };

    mongoDb.collection('groceries')
        .insertOne(newItem)
        .then(function(response) {
            res.send(`Thanks for the item. It has id ${response.insertedId}`);
        });
});


MongoClient.connect(mongoUrl, function(err, client) {
    if (err)
        throw err;

    console.log("Connected successfully to server");
   
    mongoDb = client.db();

    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
});