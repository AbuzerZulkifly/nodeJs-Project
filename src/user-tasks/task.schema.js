const {Schema, model} = require("mongoose");

const taskSchema = new Schema({
  
  title: {
    type: String,
    required: [true, "Please enter a title for your task"],
    trim: true,
    maxLenght: [100, "Title cannot be more than 100 characters"],
    minLenght: [5, "Title cannot be less than 5 characters"]
  },
  description: {
    type: String,
    required: [true, "Please enter a description for your task"],
    trim: true,
    maxLenght: [100, "Description cannot be more than 500 characters"],
    minLenght: [5, "Description cannot be less Than 5 characters"]
  },
  
  status: {
    type: String,
    required: [true, "Task status should be selected"],
    enum: ["todo", "inProgress", "completed"],
    default: "todo"
  },

  priority: {
    type: String,
    required: [true, "Task priority should be selected"],
    enum: ["low", "normal", "high"],
    default: "normal"
  },

  dueDate: {
    type: Date,
    required: [true, "Please enter a due date to your task"],
    default: "normal"
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: [true, "Please enter a user for your task"]
  },
}, 
{ timestamps: true }
 ) 

const Task = model("Task", taskSchema);

module.exports = Task;

/** 
 * @swagger
 * components:
 *  schemas:
 *   Task:
 *    type: object
 *    required:
 *     - title
 *     - description
 *     - status
 *     - priority
 *     - dueDate
 *    properties:
 *      title: 
 *       type: string
 *       description: The title of the task
 *       example: "Complete the project"
 *      
 *      description:
 *        type: string
 *        description: The description of the task
 *        example: "Finish the project by the end of the week"
 * 
 *      status:
 *        type: string
 *        description: The status of the task
 *        enum: ["todo", "inProgress", "completed"]
 *        example: "todo"
 * 
 *      priority:
 *        type: string
 *        description: The priority of the task
 *        enum: ["low", "normal", "high"]
 *        example: "normal"
 * 
 *      dueDate:
 *        type: string
 *        format: date
 *        description: The due date of the task
 *        example: "2023-10-01"
 * 
 *    example:
 *      title: "Complete the project"
 *      description: "Finish the project by the end of the week"
 *      status: "todo"
 *      priority: "normal"
 *      dueDate: "2023-10-01"    
 */

/** 
 * @swagger
 * components:
 *  schemas:
 *   TaskUpdate:
 *    type: object
 *    required:
 *     - _id
 *    properties:
 *      _id: 
 *       type: string
 *       description: The mongoDB ID of the task
 *       format: ObjectId
 * 
 *      title: 
 *       type: string
 *       description: The title of the task
 *       example: "Complete the project"
 *      
 *      description:
 *        type: string
 *        description: The description of the task
 *        example: "Finish the project by the end of the week"
 * 
 *      status:
 *        type: string
 *        description: The status of the task
 *        enum: ["todo", "inProgress", "completed"]
 *        example: "todo"
 * 
 *      priority:
 *        type: string
 *        description: The priority of the task
 *        enum: ["low", "normal", "high"]
 *        example: "normal"
 * 
 *      dueDate:
 *        type: string
 *        format: date
 *        description: The due date of the task
 *        example: "2023-10-01"
 * 
 *    example:
 *      _id: 682c732236ebbdf7375f7bd7
 *      title: "Complete the project"
 *      description: "Finish the project by the end of the week"
 *      status: "todo"
 *      priority: "normal"
 *      dueDate: "2023-10-01"    
 */

/** 
 * @swagger
 * components:
 *  schemas:
 *   TaskDelete:
 *    type: object
 *    required:
 *     - _id
 *    properties:
 *      _id: 
 *       type: string
 *       description: The mongoDB ID of the task
 *       format: ObjectId
 *    example:
 *      _id: 682c732236ebbdf7375f7bd7 
 */