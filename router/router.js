const express = require("express")
const router = express.Router()
const {signUp,login} = require("../controller/useController")

// for registering routes
router.post("/signup", signUp)
// for login routes
router.post("/login", login)

module.exports = router