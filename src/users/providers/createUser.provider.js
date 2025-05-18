const user = require("../user.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const { createUserValidator } = require("../validators/createUser.validator.js");  

async function createUsers(req, res){
  const validateRequest = matchedData(req)
  
  try {
    const createNewUser = new user({
      firstName: validateRequest.firstName,
      lastName: validateRequest.lastName,
      email: validateRequest.email,
      password: validateRequest.password,
    })
    await createNewUser.save()
    delete createNewUser.password 
    return res.status(StatusCodes.CREATED).json(createNewUser)
  }
   catch (error) {
    errorLogger(`${error.message} when creating a new user`, req, error)
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Please check your connection and try again later"
  })
}
}

module.exports = createUsers