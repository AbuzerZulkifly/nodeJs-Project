const { StatusCodes, ReasonPhrases, getReasonPhrase } = require("http-status-codes")
const createNewTask = require("./providers/createTask.provider.js")
const fetchTasks = require ("./providers/fetchTasks.provider.js")
const updateTasks = require ("./providers/updateTask.provider.js")
const deleteTasks = require ("./providers/deleteTask.provider.js")

async function handleGetTasks(req, res) {
  const fetchTask = await fetchTasks(req, res)
  res.status(StatusCodes.OK).json(fetchTask)
}

async function handlePostTasks(req, res) {
  const createTask = await createNewTask(req, res)
  res.status(StatusCodes.CREATED).json(createTask);
}

async function handlePatchTasks(req, res) {
  const updateTask = await updateTasks(req, res);
  res.status(StatusCodes.OK).json(updateTask);
}

async function handleDeleteTasks(req, res) {
  const deleteTask = await deleteTasks(req, res);
  res.status(StatusCodes.OK).json(deleteTask);
}

module.exports = {
  handleGetTasks, 
  handlePostTasks, 
  handlePatchTasks,
  handleDeleteTasks
}