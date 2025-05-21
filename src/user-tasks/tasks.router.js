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


/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * 
 * /tasks:
 *  get:
 *   summary: Get tasks
 *   tags: [Tasks]
 *   security:
 *     - bearerAuth: []
 *   parameters:
 *     - in: query
 *       name: limit
 *       schema:
 *         type: integer
 *         default: 10
 *       description: The number of tasks to return per page
 *     - in: query
 *       name: page
 *       schema:
 *         type: integer
 *         default: 1
 *       description: The page number to return
 *     - in: query
 *       name: order
 *       schema:
 *         type: string
 *         default: 'asc'
 *         enum: [asc, dsc]
 *       description: the order of the tasks to return
 *   responses:
 *     200: 
 *       description: Tasks retrieved successfully
 *       content:
 *        application/json:
 *         example:
 *          status: success
 *          statusCode: 200
 *          message: Tasks retrieved successfully
 *          data:
 *              - _id: 682c732236ebbdf7375f7bd7
 *                title: "Complete the project"
 *                description: "Finish the project by the end of the week"
 *                status: "todo"
 *                priority: "normal"
 *                dueDate: "2023-10-01T00:00:00.000Z"  
 * 
 *     401: 
 *      description: Not authorized
 *      content:
 *       application/json:
 *         example:
 *           status: error
 *           statusCode: 401
 *           message: Unauthorized
 *           data:
 *             message: You are not authorized to access this resource
 *
 *     403: 
 *       description:  Forbidden
 *       content:
 *        application/json:
 *         example:
 *           status: error
 *           statusCode: 403
 *           message: Forbidden
 *           data:
 *             message: Please login again
 */
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

/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * 
 * /tasks:
 *  post:
 *   summary: Create a new task
 *   tags: [Tasks]
 *   security:
 *     - bearerAuth: []
 *   requestBody:
 *     required: true
 *     content: 
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Task'
 *   responses:
 *     201: 
 *      description: Task created successfully
 *      content:
 *       application/json:
 *        example:
 *          status: success
 *          statusCode: 201
 *          message: Task created successfully
 *          data:
 *            _id: 682c732236ebbdf7375f7bd7
 *            title: "Complete the project"
 *            description: "Finish the project by the end of the week"
 *            status: "todo"
 *            priority: "normal"
 *            dueDate: "2023-10-01T00:00:00.000Z"
 * 
 *     401: 
 *      description:  Not authorized
 *      content:
 *       application/json:
 *         example:
 *           status: error
 *           statusCode: 401
 *           message: Unauthorized
 *           data:
 *             message: You are not authorized to access this resource
 *
 *     403: 
 *       description:  Forbidden
 *       content:
 *        application/json:
 *         example:
 *           status: error
 *           statusCode: 403
 *           message: Forbidden
 *           data:
 *             message: Please login again
 */

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

/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * 
 * /tasks:
 *  patch:
 *   summary: Update a task
 *   tags: [Tasks]
 *   security:
 *     - bearerAuth: []
 *   requestBody:
 *     required: true
 *     content: 
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/TaskUpdate'
 *   responses:
 *     200: 
 *      description: Task updated successfully
 *      content:
 *       application/json:
 *        example:
 *          status: success
 *          statusCode: 201
 *          message: Task updated successfully
 *          data:
 *            _id: 682c732236ebbdf7375f7bd7
 *            title: "Complete the project"
 *            description: "Finish the project by the end of the week"
 *            status: "todo"
 *            priority: "normal"
 *            dueDate: "2023-10-01T00:00:00.000Z"
 * 
 *     401: 
 *      description:  Not authorized
 *      content:
 *       application/json:
 *         example:
 *           status: error
 *           statusCode: 401
 *           message: Unauthorized
 *           data:
 *             message: You are not authorized to access this resource
 *
 *     403: 
 *       description:  Forbidden
 *       content:
 *        application/json:
 *         example:
 *           status: error
 *           statusCode: 403
 *           message: Forbidden
 *           data:
 *             message: Please login again
 */

taskRouter.patch("/tasks", [updateTaskValidator, authenticateToken ] , (req,res)=>{
  const result = validationResult(req);

  if(result.isEmpty()){
    return taskController.handleUpdateTasks(req,res)
  }
  else {
    res.status(StatusCodes.BAD_REQUEST).json(result);
  }

})

/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * 
 * /tasks:
 *  delete:
 *   summary: Delete a task
 *   tags: [Tasks]
 *   security:
 *     - bearerAuth: []
 *   requestBody:
 *     required: true
 *     content: 
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/TaskDelete'
 *   responses:
 *     200: 
 *      description: Task deleted successfully
 *      content:
 *       application/json:
 *        example:
 *          status: success
 *          statusCode: 201
 *          message: Task deleted successfully
 *          data:
 *            acknowledged: true
 *            deletedCount: 1
 * 
 *     401: 
 *      description:  Not authorized
 *      content:
 *       application/json:
 *         example:
 *           status: error
 *           statusCode: 401
 *           message: Unauthorized
 *           data:
 *             message: You are not authorized to access this resource
 *
 *     403: 
 *       description:  Forbidden
 *       content:
 *        application/json:
 *         example:
 *           status: error
 *           statusCode: 403
 *           message: Forbidden
 *           data:
 *             message: Please login again
 */
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