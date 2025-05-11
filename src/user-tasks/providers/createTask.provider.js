const Task = require("../task.schema.js")
const { matchedData } = require("express-validator")
const { StatusCodes } = require("http-status-codes")

async function createNewTask(req, res) {
  const validateRequest = matchedData(req)
  const createTask = new Task(validateRequest)

  try {
    await createTask.save();
    return res.status(StatusCodes.CREATED).json(createTask)    
  } 
  catch (error) {
    console.log(error);
    
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Please check your connection and try again later"
    })
  }
  
  // const createTask = new Task({
  //   title: req.body.title,
  //   description: req.body.description,
  //   status: req.body.status,
  //   priority: req.body.priority,
  //   dueDate: req.body.dueDate
  // })
}

module.exports = createNewTask