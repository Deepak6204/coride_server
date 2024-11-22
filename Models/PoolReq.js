const {Schema, model}  = require("mongoose")

const poolReqSchema = new Schema({
    reqFrom:{
        type: String,
        required: true
    },
    reqTo:{
        type: String,
        required: true
    },
    message:{
        type: String,
    }
},
{timestamps:true})

poolReqSchema.index({reqFrom:1, reqTo:1}, {unique:true})

const PoolReq = model("poolReq", poolReqSchema)

module.exports = PoolReq