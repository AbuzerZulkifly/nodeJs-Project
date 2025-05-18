const {query} = require("express-validator");

const getTaskValidator = [
  query("limit", "The limit must be a valid number").optional().isInt().toInt(),
  query("page", "The page must be a valid number").optional().isInt().toInt(),
  query("order", "Order must be ['asc','desc']").optional().isIn(["asc","desc"])
]

module.exports = getTaskValidator;