const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const items = [];

app.get('/items', (req, res) => {
    res.send(items);
});

app.post('/items', (req, res) => {
    const newItem = {
        name : req.body.name,
        creationDate : new Date(),
        id : items.length + 1,
    }
    items.push(newItem);
    res.send(`Thanks for the ${req.body.name}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});