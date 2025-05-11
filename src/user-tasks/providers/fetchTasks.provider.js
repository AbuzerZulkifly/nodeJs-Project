const Task = require("../task.schema.js")

async function fetchTask(req, res) {
  //.find is used to fetch all the task 
  return await Task.find();
}

module.exports = fetchTask