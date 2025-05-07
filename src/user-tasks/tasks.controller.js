const { StatusCodes, ReasonPhrases, getReasonPhrase } = require("http-status-codes")

function handleGetTasks(req, res) {
  let response = [
    {
      "title": "New Task",
      "date": "2025-01-01T12:00:00Z",
      "status": "todo",
      "description": "This is a new task to be done",
      "priority": "High"
    },
    {
      "title": "New Task 2",
      "date": "2025-01-01T12:00:00Z",
      "status": "todo",
      "description": "This is a new task to be done",
      "priority": "High"
    }
  ]
  res.status(StatusCodes.OK).json(response)
}

function handlePostTasks(req, res) {
  res.send("Post Tasks")
}
function handlePatchTasks(req, res) {
  res.send("Patch Tasks")
}
function handleDeleteTasks(req, res) {
  res.send("Delete Tasks")
}

module.exports = {
  handleGetTasks, 
  handlePostTasks, 
  handlePatchTasks,
  handleDeleteTasks
}