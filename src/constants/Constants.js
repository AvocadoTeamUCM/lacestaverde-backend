
const ROLES = {
    0: "PROVEDOR",
    1: "COMPRADOR"
};

const NOT_IMAGE = "Invalid extension"
const INVALID_TOKEN = "Invalid token"
const INTERNAL_ERROR = 'Internal Error'
const USER_EXISTS = "The email already exists"
const LOGIN_SUCCESS = "Correct identification"
const LOGIN_FAILED = "Incorrect data authentication"
const IMAGE_UPLOAD = 'Image uploaded successfully'
const IMAGE_NOT_FOUND = 'The image does not exist'
const USERNAME_EXISTS = "The username already exists"
const USERNAME_NOT_FOUND = "Incorrect username or password"
const USER_CREATED = "The user has been created successfully"
const AUTH_DATA_REQUIRED = "The username and password are required"
const PRODUCT_CREATED = 'The product has been created successfully'
const NO_AUTHENTICATION_HEADER = "No authentication header provided"
const EXPIRED_TOKEN = "Token expired"

module.exports ={
    ROLES,
    NOT_IMAGE,
    USER_EXISTS,
    IMAGE_UPLOAD,
    LOGIN_FAILED,
    USER_CREATED,
    EXPIRED_TOKEN,
    LOGIN_SUCCESS,
    INVALID_TOKEN,
    INTERNAL_ERROR,
    USERNAME_EXISTS,
    PRODUCT_CREATED,
    IMAGE_NOT_FOUND, 
    AUTH_DATA_REQUIRED,
    USERNAME_NOT_FOUND,
    NO_AUTHENTICATION_HEADER
}