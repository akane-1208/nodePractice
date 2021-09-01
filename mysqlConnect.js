
const res = require('express/lib/response');

exports.mysqlConnect = () => {
    const mysql = require('mysql');
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    });

    con.connect((err) => {
        if(err) throw err;
        console.log('Connected!');

        const sql = "select * from test.customers"
        con.query(sql, (err, result, field) => {
            const resSql = result;
            res.send(resSql);
        })
    });
}