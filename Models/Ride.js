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

rideSchema.static("getRides", async function(){
    const rides = this.find({})
    if(!rides)throw new Error("No rides found")

    return rides;
})

rideSchema.static("rideDetails", async function(id){
    const ride = this.find({_id:id})
    if(!ride)throw new Error("No Ride with mentioned id")
    
    return ride;
})

const Ride = model("ride", rideSchema)
module.exports = Ride