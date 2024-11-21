const {Router} = require("express")
const postRideController = require("../Controllers/ride/postRideController")
const getRideController = require("../Controllers/ride/getRideController")
const rideDetailsController = require("../Controllers/ride/rideDetailsController")


const router = Router()
router.post("/", postRideController)
router.get("/", getRideController)
router.get("/:id", rideDetailsController)

module.exports = router