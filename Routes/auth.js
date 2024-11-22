const { Router } = require("express");
const {
	signinController,
	signupController,
} = require("../Controllers/authController");

const router = Router();

router.post("/api/signup", signupController);
router.post("/api/signin", signinController);

module.exports = router;
