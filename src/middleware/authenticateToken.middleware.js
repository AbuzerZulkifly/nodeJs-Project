const { StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  
  const authHeader = req.headers['authorization'];
  //the split method is used to split the string into an array of substrings, using the space character as the delimiter
  //After spliting the string before the space is 0th index and after the space is 1st index
  const token = authHeader && authHeader.split(' ')[1]; // Bear

  if(!token){
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'You are not authorized to access this resource',
    });
  }

  //verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if(err) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: 'You are not authorized to access this resource',
      });
    }
    req.user = user; 
    next()
  })
}

module.exports = authenticateToken;