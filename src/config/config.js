const config = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',

    mongodb: {
        dbUrl: process.env.DB_URL || 'mongodb://localhost/practices'
    }
}



module.exports = config;