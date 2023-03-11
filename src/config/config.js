require('dotenv').config() 
const config = {

    appConfig: {
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    },

    dbConfig: {
        dbUrl: process.env.DB_URL
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'cestaSecret!',
    },
}



module.exports = config;