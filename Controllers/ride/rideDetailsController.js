const Ride = require("../../Models/Ride")


async function rideDetailsController(req, res){
    const id = req.params.id
    const ride = await Ride.rideDetails(id)
    console.log(ride)

    return res.json(ride)
}


module.exports = rideDetailsController