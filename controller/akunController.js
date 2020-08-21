const request = require('../model/Akun');
const con = require('../config/db');

const db_connect = new Promise((resolve, reject) => {
	con.connect((err) => {
		if(err) {
		  reject('Database Disconnected!')
		} else {
		  resolve('Database Connected...')
		}
	});
});

db_connect
  .then(() => console.log(db_connect))
  .catch(() => console.error(db_connect));
  
const akun_index = (req, res) => {
  request.getAll(con, (err, rows) => {
 	  if(err){
 		  res.render('db_err.ejs');
	  }
  	res.render('index.ejs', {results : rows})
  });
}


const akun_create = (req, res) => {
	request.postAdd(con, req.body, (err) => {
		if(err) {
			res.render('db_err.ejs');
		} else {
		  res.redirect('/');
	  }
	});
}

const akun_update = (req, res) => {
	request.postUpdate(con, req.body, req.body.id, (err) => {
		if(err) {
			res.render('db_err.ejs');
		} else {
		  res.redirect('/');
	  }
	});
}

const akun_delete = (req, res) => {
	request.postDelete(con, req.body.id, (err) => {
		if(err) {
			res.render('db_err.ejs');
		} else {
		  res.redirect('/');
	  }
	});
}

const akun_get_create = (req, res) => res.render('add.ejs');

module.exports = {
	db_connect,
	akun_index,
	akun_create,
	akun_get_create,
	akun_update,
	akun_delete
}