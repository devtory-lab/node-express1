const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	user: "nodejs",
	password: "nodejs!1142",
	database: "nodejs_ex1",
});

db.connect();

module.exports = db;