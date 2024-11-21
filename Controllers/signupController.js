const User = require("../Models/User");
const { createAuthToken } = require("../Services/authentication");

async function signupController(req,res){
    const {fullName, email, password} = req.body;
    try{
        const user = await User.create({
            fullName,
            email,
            password
        });
        const token = createAuthToken(user)
        return res.status(201).json({message:"User registered successfully", token:token})

    }
    catch(error){
        return res.status(400).json({message:"Incorrect username or password"})
    }
   
}

module.exports = signupController