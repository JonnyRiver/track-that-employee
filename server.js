const inquirer = require('inquirer');
const mysql = require('mysql2');

require('dotenv').config();

// const PORT = process.env.PORT || 3001

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ccl@mpl0ck6',
    database: 'db_employee',
});
console.log('you got this');
