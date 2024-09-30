/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const mongoose = require('mongoose');

let dbConn = {};
if (process.env.MONGO_CONN_STRING && process.env.MONGO_DB_NAME && process.env.MONGO_AUTH_SOURCE) {
    dbConn = mongoose.createConnection(
        `${process.env.MONGO_CONN_STRING}${process.env.MONGO_DB_NAME}?authSource=${process.env.MONGO_AUTH_SOURCE}`);
} else {
    console.log('ERROR: DB CONNECTION NOT INITIALIZED');
}

function closeDbConn() {
    dbConn.close(() => {
        console.log('Closing mongo connection and exiting process');
        process.exit(0);
    });
}

module.exports = {
    dbConn,
    closeDbConn,
};