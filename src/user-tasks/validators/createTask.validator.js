const {body, validationResult} = require("express-validator");

const createTaskValidator = [
  
    body("title", "Please enter a title").notEmpty().trim(),
    body("title").isLength({max: 100}),
    body("dueDate", "Please enter a dueDate in the ISO8601 format").notEmpty().isISO8601(),
    body("description").notEmpty().trim(),
    body("priority").isIn(["low", "normal", "high"]),
    body("status").isIn(["todo", "inProgress", "completed"])
  ]

module.exports = createTaskValidator