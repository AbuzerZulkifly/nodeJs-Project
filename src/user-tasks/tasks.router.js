const express = require("express");
const taskRouter = express.Router();
const taskController = require("./tasks.controller.js")

taskRouter.get("/tasks", taskController.handleGetTasks)

taskRouter.post("/tasks", taskController.handlePostTasks)

taskRouter.patch("/tasks", taskController.handlePatchTasks)

taskRouter.delete("/tasks", taskController.handleDeleteTasks)

module.exports = taskRouter;