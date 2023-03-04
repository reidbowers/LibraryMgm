const mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    database : 'librarymgm',
    user : 'root',
    password : 'password'

});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQL Database is connected!');
    }
});

module.exports = connection;