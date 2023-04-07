const Auth = require("./model");
const bcrypt = require('bcrypt');
const { AUTH_DATA_REQUIRED, USERNAME_NOT_FOUND, LOGIN_SUCCESS} = require('../../constants/Constants');
const { getUserById } = require("./../user/controller");

const jwt = require('./../../services/logging/jwt');


module.exports = {
    async insertAuth(authDao) {
        const authData = new Model(authDao);
        authData.save();
    },

    async login(authData) {

        //1- Comprobar que el usuaraio existe en la bbdd
        if(!authData.username || !authData.password){
            return {
                status: 400,
                body: AUTH_DATA_REQUIRED
            }
        }

        const user = await this.usernameExists(authData.username)
        if(!user) {
            return {
                status: 400,
                body: AUTH_DATA_REQUIRED
            } 
        }

        //2- Comprobar si la contraseña es correcta
        const pwd = bcrypt.compareSync(authData.password, user.password)
        if(!pwd){
            return {
                status: 400,
                body: USERNAME_NOT_FOUND
            }
        }

        //3- Devolver Token
        const token = jwt.createToken(user);

        //4- Devolver datos del usuario

        return {
            status: 200,
            body: {
                message:LOGIN_SUCCESS,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    fecha_de_alta: user.Alta
                },
                token
            }
        }      
        
    },

    async usernameExists(username) {
        const auth = await Auth.findOne({username: username},{__v:false, _id:false})
        if(auth !== null){
            const user = await getUserById(auth.userId)
            return {
                ...user,
                username: username,
                password: auth.password
            };
        }
        return false
    }
}