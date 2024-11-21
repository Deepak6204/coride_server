const {Schema, model} = require("mongoose")

const rideSchema = new Schema({
    origin:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
    
},
{
    timestamps: true,
})

rideSchema.static("getRides", async function(req,res){
    const rides = this.find({})
    if(!rides)throw new Error("No rides found")

    return rides;
})

const Ride = model("ride", rideSchema)
module.exports = Ride