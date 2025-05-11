const express = require("express");
const taskRouter = express.Router();
const {body, validationResult} = require("express-validator");
const createTaskValidator = require("./validators/createTask.validator.js")
const taskController = require("./tasks.controller.js");
const { StatusCodes } = require("http-status-codes");

taskRouter.get("/tasks", taskController.handleGetTasks)

taskRouter.post("/tasks", createTaskValidator ,
(req, res)=> {
  const result = validationResult(req);

  if(result.isEmpty()){
     return taskController.handlePostTasks(req,res)
  }
  else {
    res.status(StatusCodes.BAD_REQUEST).json(result);
  }
}
)

taskRouter.patch("/tasks", taskController.handlePatchTasks)

taskRouter.delete("/tasks", taskController.handleDeleteTasks)

module.exports = taskRouter;