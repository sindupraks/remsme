// JavaScript Document
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'remsme'
});

app.listen(3000, () => {
	console.log('Server is listen port 3000...')
});

conn.connect((err) => {
	if(err) throw err;
	console.log('Mysql Connected..')
})


app.set('view-engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
	let sql = 'SELECT * FROM akun';
	let query = conn.query(sql, (err, results) => {
		if(err) throw err;
	  res.render('index.ejs', {
	  	results: results
	  });
	});
});

app.get('/add', (req, res) => {
	res.render('add.ejs');
})

app.get('/register', (req, res) => {
	res.render('register.ejs');
})


app.post('/save', (req, res) => {
	let data = {id: null, sosial_name: req.body.sname, username: req.body.username, password: req.body.password}
	let sql = 'INSERT INTO akun SET ?';
	let query = conn.query(sql, data, (err, results) => {
		if(err) throw err;
	  res.redirect('/');
	});
});

app.post('/delete', (req, res) => {
	let sql = 'DELETE FROM akun WHERE id='+req.body.id+'';
	let query = conn.query(sql, (err, results) => {
		if(err) throw err;
	  res.redirect('/');
	});
});

app.post('/edit', (req, res) => {
	let sql = "UPDATE akun SET sosial_name='"+req.body.sname+"', username='"+req.body.username+"', password='"+req.body.password+"' WHERE id="+req.body.id;
	let query = conn.query(sql, (err, results) => {
		if(err) throw err;
	  res.redirect('/');
	});
});