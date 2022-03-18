const express = require('express');
const app = express();


const rotaRecebeJson = require('./routes/recebeJson');

app.use('/', rotaRecebeJson);





module.exports = app;