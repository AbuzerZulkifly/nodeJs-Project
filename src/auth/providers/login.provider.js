const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const getUserByEmail = require("../../users/providers/getUserByEmail.provider.js");
const bcrypt = require("bcrypt");
const jwtProvider = require("./generateJWT.provider.js");

async function loginProvider(req, res) {
  // matchedData will return the validated data from the request. 
  // When you validate data, then express-validator internally saves the req data
  // so you can use matchedData to get the validated data.
  const validatedData = matchedData(req);
  try {
    const user = await getUserByEmail(validatedData.email);
    //check if user password is correct
    const result = await bcrypt.compare(
      validatedData.password,
      user.password
    );

    if (!result) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Invalid credentials",
      });
    }

    const token = jwtProvider(user);

    return res.status(StatusCodes.OK).json({
      accessToken: token, 
      name: user.firstName + " " + user.lastName, 
      email: user.email
    })
 
  }

   catch (error) {
    errorLogger("Error trying to Login", req, error)
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment please try again later."})
  }

}

module.exports = loginProvider;