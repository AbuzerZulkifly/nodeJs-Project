const express = require("express");
const userController = require("./users.controller.js")
const usersRouter = express.Router();

usersRouter.post("/create", userController);

module.exports = usersRouter