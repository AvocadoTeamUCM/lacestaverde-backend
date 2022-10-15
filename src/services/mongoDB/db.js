const db = require('mongoose');

db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: false
    }).then(() => {
        console.log(`database connected successfully`)
    }).catch((err) => {
        console.log(`connection failed, ${err}`)
    })
}

module.exports = connect