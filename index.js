const express  = require("express")
const authRouter = require("./Routes/auth")
const rideRouter = require("./Routes/ride")
const authMiddleware = require("./Middlewares/authMiddleware")
require('dotenv').config()
const mongoose = require("mongoose")
const PORT = 8000
const app = express()


mongoose.connect("mongodb://localhost:27017/coride").then((e)=>{
    console.log("mongodb connected")
})
app.use(express.json())
app.use(authMiddleware)
app.use("/", authRouter)
app.get("/", (req,res)=>{
    return res.json({message: req.user})
})

app.use("/ride", rideRouter)

app.listen(PORT, (req, res) => {
    console.log(`Server started at http://localhost:${PORT}`)
})