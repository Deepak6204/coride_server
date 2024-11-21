const {Router} = require("express")
const signupController = require("../Controllers/signupController")
const signinController = require("../Controllers/signinController")

const router=Router();


router.post("/api/signup", signupController)
router.post("/api/signin", signinController)

module.exports = router