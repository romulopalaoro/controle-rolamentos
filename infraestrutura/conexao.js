// const mysql = require('mysql2')
const dotenv = require("dotenv")

dotenv.config();

// const conexao = mysql.createConnection({
//     host: process.env.HOST_BD,
//     port: process.env.PORT_BD,
//     user: process.env.USER_BD,
//     password: process.env.PASSWORD_BD,
//     database: process.env.DATABASE_BD
// })

// module.exports = conexao

const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.USER_BD,
    host: process.env.HOST_BD,
    database: process.env.DATABASE_BD,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB,
});

// HOST_BD = "ec2-34-200-35-222.compute-1.amazonaws.com"
// PORT_BD = 5432
// USER_BD = "rvzxsjgepzegys"
// DATABASE_BD = "ddgj4ln6njjv2r"
// PASSWORD_BD = "7eae2f4612d2d3c7067a42c0c9214f8e9cb90f052a5bfab7cf80e23c80a8aae8"

module.exports = pool;