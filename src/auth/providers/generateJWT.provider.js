const generateJWT = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

function generateJWTProvider(user) {

  const payLoad = {
    sub: user["_id"],
    email: user.email,
    //iat (issued at time) is set to the current time
    iat: Math.floor( Date.now() / 1000 ),
    //exp (expiration time) is set to 24 hours from now, by taking the time from env file
    //All env variables are strings by default, so we need to parse it to an integer
    exp: Math.floor( Date.now() / 1000 ) + parseInt(process.env.JWT_EXPIRATION),
  };

  return generateJWT.sign(payLoad, process.env.JWT_SECRET)
}

module.exports = generateJWTProvider