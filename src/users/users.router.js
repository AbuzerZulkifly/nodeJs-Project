const express = require("express");
const usersRouter = express.Router();
const userController = require("./users.controller.js")
const createUserValidator = require("./validators/createUser.validator.js")
const { body, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");



/**
 * @swagger
 * /users/create:
 *  post:
 *   summary: Create a new user
 *   tags: [Users]
 *   security:
 *     - bearerAuth: []
 *   requestBody:
 *     required: true
 *     content: 
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/User'
 *   responses:
 *     201: 
 *      description: User created successfully
 *      content:
 *       application/json:
 *        example:
 *          status: success
 *          statusCode: 201
 *          message: User created successfully
 *          data:
 *            _id: 682c732236ebbdf7375f7bd7
 *            firstName: "Abuzer"
 *            lastName: "Zulkifly"
 *            email: "abzer@gmail.com"
 *            
 */

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