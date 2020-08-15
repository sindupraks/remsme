const request = require('../model/Akun');
const con = require('../config/db');

const akun_index = (req, res) => {
	request.getAll(con, (err, rows) => {
		if(err) throw err;
		res.render('index.ejs', {results : rows});
	});
}

const akun_create = (req, res) => {
	request.postAdd(con, req.body, (err) => {
		if(err) throw err;
		res.redirect('/');
	});
}

const akun_update = (req, res) => {
	request.postUpdate(con, req.body, req.body.id, (err) => {
		if(err) throw err;
		res.redirect('/');
	});
}

const akun_delete = (req, res) => {
	request.postDelete(con, req.body.id, (err) => {
		if(err) throw err;
	  res.redirect('/');
	});
}

const akun_get_create = (req, res) => {
	res.render('add.ejs');
}

module.exports = {
	akun_index,
	akun_create,
	akun_get_create,
	akun_update,
	akun_delete
}