require('dotenv').config() 
const config = {

    appConfig: {
        port: process.env.APP_PORT || 3000,
        host: process.env.APP_HOST || 'http: localhost'
    },

    dbConfig: {
        dbUrl: process.env.DB_URL || 'mongodb+srv://jraimundo:J1Ga3UAjlFbBulQM@cestaverde.isb5aiz.mongodb.net/test'
    },
    jwtSecret: {
        secret: process.env.JWT_SECRET,
    },
}



module.exports = config;