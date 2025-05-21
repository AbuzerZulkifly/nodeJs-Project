const user = require("../user.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const { createUserValidator } = require("../validators/createUser.validator.js");  
const bcrypt = require("bcrypt");
const getUserByEmail = require("./getUserByEmail.provider.js");
async function createUsers(req, res){
  const validateRequest = matchedData(req);
  
  try {
    const isExistingUser = await getUserByEmail(validateRequest.email)
    if (isExistingUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "A user with this email already exists",
      })
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(validateRequest.password, salt);
    const createNewUser = new user({
      firstName: validateRequest.firstName,
      lastName: validateRequest.lastName,
      email: validateRequest.email,
      password: hashedPassword,
    })
    await createNewUser.save()
    //delete createNewUser.password 
    return res.status(StatusCodes.CREATED).json({
      message: "User created successfully",
      data: {
        id: createNewUser._id,
        firstName: createNewUser.firstName,
        lastName: createNewUser.lastName,
        email: createNewUser.email
      }
    })
  }
   catch (error) {
    errorLogger(`${error.message} when creating a new user`, req, error)
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Please check your connection and try again later"
  })
}
}

module.exports = createUsers