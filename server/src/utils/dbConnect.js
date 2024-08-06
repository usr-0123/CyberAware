import { logger } from "./logger.js";
import dotenv from 'dotenv';
import sql from 'mssql';

dotenv.config()

// const {
//     SQL_USER,
//     SQL_PASSWORD,
//     SQL_SERVER,
//     SQL_DB,
//     SQL_SERVER_PORT,
//     SQL_ENCRYPT,
//     SQL_TRUST_SERVER_CERTIFICATE
// } = process.env
// console.log(process.env);

const sqlConfig = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DB,
    options:{
        encrypt: false,
        trustservercertificate: true
    }
}

let appPool

let poolrequest

try {
    appPool = await sql.connect(sqlConfig)
    poolrequest = () => appPool.request()
    if (appPool) {
        logger.info('DB connected successfully')
    }
} catch (error) {
    logger.info('Database connection failed:', error)
}

export { poolrequest, sql }