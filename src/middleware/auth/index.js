const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const error = require('../../services/utils/error');

const secret = config.secret;

function sign(data) {
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret);
}

const check = {
    own: function(req, owner) {
        const decoded = decodeHeader(req)
        console.log(decoded)
        if(decoded.id !== owner) {
            throw error('Do not authorized todo this', 401);
        }
    },

    logged: function(req, owner) {
        const decoded = decodeHeader(req);
    },
}

function getToken(auth) {
    if (!auth) {
        throw error('No token', 401);
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw error('Invalid format', 401);
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
};


