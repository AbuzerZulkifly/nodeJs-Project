const express = require("express");
const usersRouter = express.Router();
const userController = require("./users.controller.js")

usersRouter.post("/create", userController.createUser);

module.exports = usersRouter