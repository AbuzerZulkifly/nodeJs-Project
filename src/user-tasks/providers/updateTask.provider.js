const Task = require("../task.schema.js");

async function updateTasks(req, res) {
  //fetch the id
  const task = await Task.findById(req.body["_id"])
  //update all the properties
  task.title = req.body.title;
  task.description = req.body.description;
  task.priority = req.body.priority;
  task.dueDate = req.body.dueDate;
  task.status = req.body.status;

  return await task.save();
}

module.exports = updateTasks;