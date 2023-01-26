const express = require("express");

const router = express.Router();

const authenticationController = require("./controllers/authentication.controller");
const userController = require("./controllers/user.controller");

const { verifyToken } = require("./services/authentication.service");

router.post("/token", authenticationController.getToken);

router.get("/users", verifyToken, userController.getAllUsers);

module.exports = router;
