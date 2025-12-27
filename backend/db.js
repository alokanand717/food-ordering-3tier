const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "fooddb"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

module.exports = db;

