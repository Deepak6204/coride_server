const JWT = require("jsonwebtoken")
const dotenv = require("dotenv")
const { validateAuthToken } = require("../Services/authentication")

function authenticateToken(req, res, next){
    const token = req.header("Authorization")?.split(" ")[1]
    if(!token)return res.status(401).json({message: "user not authorized"})
    
    try{
        const userPayload = validateAuthToken(token);
        req.user = userPayload
    }
    catch(err){
        return res.status(400).json({message:err.message})
    }
    next()
}

module.exports = authenticateToken