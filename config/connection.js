const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root'
});

connection.connect((err) =>{
    if(err) throw err;
    console.log('Conectado');
});

module.exports = connection;