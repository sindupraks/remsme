let request = {
	getAll : (con, callback) => {
		con.query('SELECT * FROM akun', callback)
	},
	
	postAdd : (con, data, callback) => {
		con.query(`INSERT INTO akun SET sosial_name = '${data.sname}', username = '${data.username}', password = '${data.password}'`, callback);
	},
	
	postUpdate : (con, data, id, callback) => {
		con.query(`UPDATE akun SET sosial_name = '${data.sname}', username = '${data.username}', password = '${data.password}' WHERE id = ${id}`, callback);
	},
	
	postDelete : (con, id, callback) => {
		con.query(`DELETE FROM akun WHERE id = ${id}`, callback);
	}
}

module.exports = request;