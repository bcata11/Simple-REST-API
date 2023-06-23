const Pool = require('pg').Pool;

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'students',
    password: '', //add you psw
    port: '5432',
});

module.exports = pool;