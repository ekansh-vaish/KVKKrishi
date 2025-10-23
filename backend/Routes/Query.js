const wrapAsync = require("../utils/wrapAsync");
const express = require("express");
const router = express.Router();
const {jwtAuthMiddleware} = require("../Middlewares/Auth");
const QueryController = require("../Controllers/Query");

router.post("/queries",jwtAuthMiddleware,wrapAsync(QueryController.UserQuery))

module.exports = router;