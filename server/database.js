const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movielist'
})

connection.connect(()=> console.log('database connected'));

module.exports = connection;