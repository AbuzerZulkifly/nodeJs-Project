const User = require("../user.schema.js");

async function getUserByEmail(email) {

  try {
      
    const user = await User.findOne({ email: email });
    return user
  }
  catch (error) {
    error = "Error trying to get user"
    return error
  }
}

module.exports = getUserByEmail;