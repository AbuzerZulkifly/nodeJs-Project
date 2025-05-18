const express = require("express");
const usersRouter = express.Router();
const userController = require("./users.controller.js")
const createUserValidator = require("./validators/createUser.validator.js")
const { body, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

usersRouter.post("/create", createUserValidator, 
  (req, res)=> {
      const result = validationResult(req);
  
      if(result.isEmpty()){
        return userController.createUser(req,res)
      }
      else {
        res.status(StatusCodes.BAD_REQUEST).json(result);
      }
    }
);

usersRouter.delete("/delete", userController.deleteUser);

module.exports = usersRouter