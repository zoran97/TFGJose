const mysql = require('mysql2');

const config = requiere('../config/config.json');

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
});

module.export = poolpromise();


