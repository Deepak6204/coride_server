const Ride = require("../Models/Ride");
const PoolReq = require("../Models/PoolReq");

async function getRide(req, res) {
	try {
		const rides = await Ride.getRides();
		return res.status(200).json(rides);
	} catch (err) {
		return res.json({ message: "no rides found" });
	}
}

async function postRide(req, res) {
	const { origin, destination, time } = req.body;
	const userId = req.user._id;
	try {
		const ride = await Ride.create({
			origin,
			destination,
			time,
			userId,
		});

		return res.status(200).json({ ride });
	} catch (err) {
		return res.status(400).json({ message: "each field is mandareqTory" });
	}
}

async function rideDetails(req, res) {
	const id = req.params.id;
	const ride = await Ride.rideDetails(id);
	console.log(ride);

	return res.json(ride);
}

async function deleteRide(req, res) {
	const id = req.params.id;
	await Ride.deleteRide(id);
	return res.status(200).json({ message: "Ride deleted successfully" });
}

async function reqPool(req, res) {
	const reqTo = req.params.id;
	const reqFrom = req.user._id;
	const message = req.body.message;
	try {
		const poolReq = await PoolReq.create({
			reqFrom,
			reqTo,
			message,
		});
		return res.status(200).json(poolReq);
	} catch (err) {
		return res.status(400).json({ message: "Pool request already sent" });
	}
}

async function deleteReq(req, res) {
	const reqTo = req.params.id;
	await PoolReq.deleteOne({ reqFrom: req.user._id, reqTo: reqTo });
	return res.status(200).json({ message: "Req deleted successfully" });
}

module.exports = {
	getRide,
	postRide,
	rideDetails,
	deleteRide,
	reqPool,
	deleteReq,
};
