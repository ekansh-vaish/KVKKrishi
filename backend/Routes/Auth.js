
const express = require("express");
const router = express.Router();
const Authentication = require("../Controllers/Authentication")


router.post("/signup",Authentication.RegisterUser)

router.post("/login",Authentication.LoginUser );

module.exports = router;