const express = require('express');
const path = require('path');
// const db = require('./connection');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


module.exports = app;