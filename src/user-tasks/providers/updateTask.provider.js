const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const { getReasonPhrase } = require("http-status-codes");

async function updateTasks(req, res) {
 
  const validatedData = matchedData(req);
  try {
      //fetch the id
  const task = await Task.findById(req.body["_id"])
  //update all the properties
  //if there is no validated data then the already existing data will be used
  task.title = validatedData.title || task.title;
  task.description = validatedData.description || task.description;
  task.priority = validatedData.priority || task.priority;
  task.dueDate = validatedData.dueDate || task.dueDate;
  task.status = validatedData.status || task.status;

  await task.save();
  return res.status(StatusCodes.OK).json(task)
  
} 
catch (error) {
    errorLogger("Error while updating task", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment please try again later.",
    });
  }
}

module.exports = updateTasks;