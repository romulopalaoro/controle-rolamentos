const dotenv = require("dotenv")

dotenv.config();

const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.USER_BD,
    host: process.env.HOST_BD,
    database: process.env.DATABASE_BD,
    password: process.env.PASSWORD_BD,
    port: process.env.PORT_BD,
    ssl: {
        rejectUnauthorized: false
    }

    // user: process.env.USER_BD,
    // host: process.env.HOST_BD,
    // database: process.env.DATABASE_BD,
    // password: process.env.PASSWORD_BD,
    // port: process.env.PORT_BD,
});

module.exports = pool;