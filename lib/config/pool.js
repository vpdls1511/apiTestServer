const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'authtest'
};

const pool = mysql.createPool(dbConfig);

exports.getConnectionPool = (callback) =>{
    pool.getConnection((err, conn)=>{
        if(!err) callback(conn)
    });
}
