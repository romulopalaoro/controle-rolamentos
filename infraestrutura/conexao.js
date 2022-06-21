const mysql = require('mysql2')
const dotenv = require("dotenv")

dotenv.config();

const conexao = mysql.createConnection({
    host: process.env.HOST_BD,
    port: process.env.PORT_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD
})

module.exports = conexao