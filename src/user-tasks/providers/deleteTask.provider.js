const Task = require("../task.schema.js");

async function deleteTask(req, res) {
  
  return await Task.deleteOne({_id: req.body["_id"]});
  
}

module.exports = deleteTask