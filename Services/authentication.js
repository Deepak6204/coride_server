const JWT = require("jsonwebtoken")
const dotenv = require("dotenv")

function createAuthToken(user){
    const payload = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImage: user.profileImage,
        role: user.role
    };
    const token = JWT.sign(payload, process.env.JWT_TOKEN);
    return token
}


function validateAuthToken(token){
    const payload = JWT.verify(token, process.env.JWT_TOKEN);
    return payload;
}

module.exports = {createAuthToken, validateAuthToken}