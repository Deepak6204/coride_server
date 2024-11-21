const User = require("../Models/User");
const { validateAuthToken } = require("../Services/authentication");


async function signinController(req,res){
    const {email, password} = req.body;
    const token = await User.matchPasswordandGenerateToken(email, password)
    const payload = validateAuthToken(token)
    return res.status(200).json({message:`Welcome`, user: payload})
}

module.exports = signinController