require('dotenv').config() 
const config = {

    appConfig: {
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    },

    dbConfig: {
        dbUrl: process.env.DB_URL
    }
}



module.exports = config;