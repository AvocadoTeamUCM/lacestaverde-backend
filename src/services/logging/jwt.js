const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('./../../config/config');

const SECRET = config.jwtSecret.toString();


//Create token function
const createToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        fecha_de_alta: user.Alta,
        role: user.role,
        avatar: user.avatar,
        iat: moment().unix(),
        exp: moment().add(2, "days").unix()
    }

    return jwt.encode(payload, SECRET);
}

module.exports = {
    SECRET,
    createToken
}

