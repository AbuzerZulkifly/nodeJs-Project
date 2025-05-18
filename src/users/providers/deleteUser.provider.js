const User = require("../user.schema.js")

async function deleteUser(req, res){
  return await User.deleteOne({_id: req.body["_id"]})
}

module.exports = deleteUser