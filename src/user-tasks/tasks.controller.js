const { StatusCodes, ReasonPhrases, getReasonPhrase } = require("http-status-codes")
const createNewTask = require("./providers/createTask.provider.js")
const fetchTasks = require ("./providers/fetchTasks.provider.js")
const updateTasks = require ("./providers/updateTask.provider.js")
const deleteTasks = require ("./providers/deleteTask.provider.js")

async function handleGetTasks(req, res) {
  return await fetchTasks(req, res)
  
}

async function handlePostTasks(req, res) {
  return await createNewTask(req, res)
}

async function handleUpdateTasks(req, res) {
  return await updateTasks(req, res);
}

async function handleDeleteTasks(req, res) {
  return await deleteTasks(req, res);
}

module.exports = {
  handleGetTasks, 
  handlePostTasks, 
  handleUpdateTasks,
  handleDeleteTasks
}