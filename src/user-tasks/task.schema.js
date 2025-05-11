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
}, { timestamps: true } ) 

const Task = model("Task", taskSchema);

module.exports = Task;