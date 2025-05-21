const {Schema, model} = require("mongoose");

const createNewUser = new Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    trim: true
  },

  lastName: {
    type: String,
    trim: true
  },

  email: {
    type: String,
    required: [true, "Please enter a valid email"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: function (email){
       return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }, 
       message: ()=> `email is not valid email `
  },

  password: {
    type: String,
    required: [true, "Please enter a password"]    
    },
  }
)

const Users = model("users", createNewUser)

module.exports = Users;

/** 
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    required:
 *     - firstName
 *     - email
 *     - password
 *    properties:
 *      firstName: 
 *       type: string
 *       description: The first name of the user
 *       example: "Abuzer Zulkifly"
 *      
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
 *      firstName: "Abuzer"
 *      lastName: "zulkifly"
 *      email: "abzer@gmail.com"
 *      password: "Aa@12345"    
 */