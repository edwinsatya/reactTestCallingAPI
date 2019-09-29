'use strict'
const express = require('express');
const port = 8000;
const data = require('./models').Post
const app = express();
app.use(express.urlencoded({
    extended: false
}))
app.get('/', (req, res) => {
    data.showAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
})
app.listen(port, () => {
    console.log('connect')
})