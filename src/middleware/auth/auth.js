const jwt = require('jwt-simple');
const moment = require('moment');
const libjwt = require('./../../services/logging/jwt');
const {NO_AUTHENTICATION_HEADER, INVALID_TOKEN, EXPIRED_TOKEN} = require('./../../constants/Constants')
const secret = libjwt.SECRET;


//Authentication Middleware
exports.auth = (req, res, next) => {
    //Comprobamos si llega la cabecra de authentication
    if(!req.headers.authorization) {
        return {
            status: 400,
            body: NO_AUTHENTICATION_HEADER
        }
    }

    // Clear token
    const token = req.headers.authorization.replace(/['"]+/g, '')

    //Decodificar el token
    try {
        const payload = jwt.decode(token, secret);

        //comprobar expiracion
        if(payload.exp <= moment.unix()){
            return {
                status: 400,
                body: EXPIRED_TOKEN
            }
        }
        //Add the user data to reuest
        req.user = payload;

    } catch(error){
        return {
            status: 400,
            body: {
                message: NO_AUTHENTICATION_HEADER,
                error
            }
        }
    }

    //Next action
    next();
    
}