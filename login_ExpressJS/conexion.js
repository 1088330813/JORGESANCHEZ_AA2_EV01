const mysql = require('mysql2/promise');
const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'jdbc',
});
module.exports = conexion;

