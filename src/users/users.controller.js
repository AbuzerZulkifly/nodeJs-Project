const { StatusCodes, ReasonPhrases, getReasonPhrase } = require("http-status-codes")
const createUsers = require("./providers/createUser.provider.js"); 
const fetchUsers = require("./providers/fetchUser.provider.js");
const updateUsers = require("./providers/updateUser.provider.js");
const deleteUsers = require("./providers/deleteUser.provider.js"); 

async function createUser(req,res){
  const users = await createUsers(req, res)
  res.status(StatusCodes.OK).json(users)
}

async function fetchUser(req,res){
  res.send("user created")
}

async function updateUser(req,res){
  res.send("user created")
}

async function deleteUser(req,res){
  res.send("user created")
}

module.exports = {
  createUser,
  fetchUser,
  updateUser,
  deleteUser
}