const {createHmac, randomBytes} =  require('crypto')
const {Schema, model} = require("mongoose")
const { createAuthToken } = require('../Services/authentication')
const userSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt:{
        type: String,
    },
    password:{
        type: String,
        required: true
    },
    profileImgUrl:{
        type:String,
        default: "/Images/profile.png"
    },
    role:{
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
},
{
    timestamps: true
}
)

userSchema.pre("save", function(next){
    const user = this
    if (!user.isModified("password"))return ;

    const salt = randomBytes(16).toString();
    const hashedPass = createHmac('sha256', salt).update(user.password).digest("hex")
    this.salt = salt;
    this.password = hashedPass;
    next()
})

userSchema.static("matchPasswordandGenerateToken",async function(email, password){
    const user = await this.findOne({email});
    if(!user)throw new Error("User not found");

    const salt = user.salt;
    const hashedPassword = user.password;
    const userProvidedHash = createHmac("sha256", salt).update(password).digest("hex")
    if(userProvidedHash !== hashedPassword)throw new Error("Incorrect Password")
    
    const token = createAuthToken(user)
    console.log(token)
    return token
})

const User = model("user", userSchema)
module.exports = User