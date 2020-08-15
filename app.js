// JavaScript Document
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const akunRouter = require('./router/akunRouter');


app.listen(3000, () => {
	console.log('Server is listen port 3000...')
});

app.set('view-engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(akunRouter);