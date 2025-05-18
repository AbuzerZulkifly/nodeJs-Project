const Task = require("../task.schema.js");
const { matchedData } = require("express-validator")
const { StatusCodes } = require("http-status-codes")
const errorLogger = require("../../helpers/errorLogger.helper.js")

async function deleteTask(req, res) {
  const validatedData = matchedData(req);
  try {
  
    const deletedData = await Task.deleteOne({_id: validatedData["_id"]});
    res.status(StatusCodes.OK).json(deletedData);
  } catch (error) {
    errorLogger("Error while fetching tasks", req, error)
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment please try again later."})
  }

}

module.exports = deleteTask