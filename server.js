const express = require('express');
const app = express();
// const mysql = require('./mysqlConnect');

const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});
app.get('/', (req, res) => {
        con.query('select * from test.customers', (err, result, field) => {
        if (err) throw err;
        res.send(result);
    })
});

// mysql.mysqlConnect();

app.listen(4000);
console.log('server listen ...');