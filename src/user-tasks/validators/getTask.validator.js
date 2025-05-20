const {query} = require("express-validator");

const getTaskValidator = [
  query("limit", "The limit must be a valid number").optional().isInt().toInt({min: 1}),
  query("limit").customSanitizer((value, {req}) => {return value ? value : 5}),
  query("page", "The page must be a valid number").optional().isInt().toInt(),
  query("page").customSanitizer((value, {req}) => {return value ? value : 1}),
  query("order", "Order must be ['asc','desc']").optional().isIn(["asc","dsc"]),
  query("order").customSanitizer((value, {req}) => {return value ? value : "asc"}),
]

module.exports = getTaskValidator;