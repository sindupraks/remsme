const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'remsme'
});

module.exports = con;
