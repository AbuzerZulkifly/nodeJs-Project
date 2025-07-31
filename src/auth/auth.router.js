const express = require("express");
const authController = require("./auth.controller.js")
const {StatusCodes} = require("http-status-codes")
const loginValidator = require("./validators/login.validator.js")
const { validationResult } = require("express-validator")

const authRouter = express.Router()
/**
 * @swagger
 * /auth/login:
 *  post:
 *   summary: User Logged in
 *   tags: [Authentication]
 *   security:
 *     - bearerAuth: []
 *   requestBody:
 *     required: true
 *     content: 
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Login'
 *   responses:
 *     200: 
 *      description: User logged In successfully
 *      content:
 *       application/json:
 *        example:
 *          status: success
 *          statusCode: 200
 *          message: User Logged in successfully
 *          data:
 *            accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODJjNzMyMjM2ZWJiZGY3Mzc1ZjdiZDciLCJlbWFpbCI6ImFidXpl
 *                         ckBnbWFpbC5jb20iLCJpYXQiOjE3NDc3ODkwODEsImV4cCI6MTc0Nzg3NTQ4MX0.BASF9A5H0xak6kkbOk-I6UWEMemqX-QdtsGJX3-ppys
 */
authRouter.post("/login", loginValidator ,(req, res)=> {
    const result = validationResult(req);

    if(result.isEmpty()){
      return authController.handleLogin(req,res)
    }
    else {
      res.status(StatusCodes.BAD_REQUEST).json(result);
    }
  }
)

module.exports = authRouter

/** 
 * @swagger
 * components:
 *  schemas:
 *   Login:
 *    type: object
 *    required:
 *     - email
 *     - password
 *    properties:
 *      email:
 *        type: string
 *        description: The email of the user
 *        example: "abzer@gmail.com"
 * 
 *      password:
 *        type: string
 *        description: The password of the user
 *        example: "ab@12345"
 *    example:
 *      email: "abuzer@gmail.com"
 *      password: "Aa@123456"    
 */