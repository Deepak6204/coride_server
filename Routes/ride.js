const { Router } = require("express");
const {
	getRide,
	postRide,
	rideDetails,
	deleteRide,
	reqPool,
	deleteReq,
} = require("../Controllers/rideController");

const router = Router();
router.route("/").post(postRide).get(getRide);

router.route("/:id").get(rideDetails).delete(deleteRide);

router.route("/req/:id").post(reqPool).delete(deleteReq);

module.exports = router;
