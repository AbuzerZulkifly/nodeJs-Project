const express = require("express");
const taskRouter = express.Router();
const {body, validationResult} = require("express-validator");
const createTaskValidator = require("./validators/createTask.validator.js")
const getTaskValidator = require("./validators/getTask.validator.js")
const updateTaskValidator = require("./validators/updateTask.validator.js")
const deleteTaskValidator = require("./validators/deleteTask.validator.js")
const authenticateToken = require("../middleware/authenticateToken.middleware.js");
const taskController = require("./tasks.controller.js");
const { StatusCodes } = require("http-status-codes");

taskRouter.get("/tasks", [getTaskValidator, authenticateToken],  
  (req, res)=> {
    const result = validationResult(req);

    if(result.isEmpty()){
      return taskController.handleGetTasks(req,res)
    }
    else {
      res.status(StatusCodes.BAD_REQUEST).json(result);
    }
  }
)

taskRouter.post("/tasks", [createTaskValidator, authenticateToken ] ,
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

taskRouter.patch("/tasks", [updateTaskValidator, authenticateToken ] , (req,res)=>{
  const result = validationResult(req);

  if(result.isEmpty()){
    return taskController.handleUpdateTasks(req,res)
  }
  else {
    res.status(StatusCodes.BAD_REQUEST).json(result);
  }

})

taskRouter.delete("/tasks", [deleteTaskValidator, authenticateToken ],
  (req,res)=>{
    const result = validationResult(req);
  
    if(result.isEmpty()){
      return taskController.handleDeleteTasks(req,res)
    }
    else {
      res.status(StatusCodes.BAD_REQUEST).json(result);
    }
  
  }
)

module.exports = taskRouter;