const Task = require("../task.schema.js")
const { matchedData } = require("express-validator")
const { StatusCodes } = require("http-status-codes")
const errorLogger = require("../../helpers/errorLogger.helper.js")

async function fetchTask(req, res) {
  //.find is used to fetch all the task 
  const query = matchedData(req)
  try {
    const tasks = await Task.find();
    return res.status(StatusCodes.OK).json(tasks)   
  } catch (error) {
    errorLogger("Error while fetching tasks", req, error)
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment please try again later."
    })
  }

}

module.exports = fetchTask