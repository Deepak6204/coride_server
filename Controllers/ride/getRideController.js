const Ride = require("../../Models/Ride")


async function getRideController(req, res){
    try{
        const rides = await Ride.getRides()
        return res.status(200).json(rides)
    }
    catch(err){
        return res.json({message:"no rides found"})
    }
}


module.exports = getRideController