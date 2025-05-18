const { StatusCodes, ReasonPhrases, getReasonPhrase } = require("http-status-codes")
const createUsers = require("./providers/createUser.provider.js"); 
const fetchUsers = require("./providers/fetchUser.provider.js");
const updateUsers = require("./providers/updateUser.provider.js");
const deleteUsers = require("./providers/deleteUser.provider.js"); 

async function createUser(req,res){
  return await createUsers(req, res)
}

async function fetchUser(req,res){
  res.send("user created")
}

async function updateUser(req,res){
  res.send("user created")
}

async function deleteUser(req,res){
  const deleteUser = await deleteUsers(req, res);
  res.status(StatusCodes.OK).json(deleteUser)
}

module.exports = {
  createUser,
  fetchUser,
  updateUser,
  deleteUser
}