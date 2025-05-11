const user = require("../user.schema.js");

async function createUsers(req, res){
  const createNewUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  })
  return await createNewUser.save()
}

module.exports = createUsers