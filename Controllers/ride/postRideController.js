const Ride = require("../../Models/Ride")


async function postRideController(req, res){
    const {origin, destination, time} = req.body;
    const userId = req.user._id;
    try{
        const ride = await Ride.create({
            origin,
            destination,
            time,
            userId
        })

        return res.status(200).json({ride})

    }
    catch(err){
        return res.status(400).json({message:"each field is mandatory"})
    }
}


module.exports = postRideController