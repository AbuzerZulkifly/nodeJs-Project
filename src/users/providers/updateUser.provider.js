const User = require("../user.schema.js")

async function updateUser(req, res) {
  const user = await User.findById(req.body["_id"])

  
}