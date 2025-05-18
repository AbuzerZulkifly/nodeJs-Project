const { body } = require('express-validator');
const { StatusCodes } = require('http-status-codes');

const deleteTaskValidator = [
  body('_id', 'Valid document is not found').notEmpty().isMongoId()
];

module.exports = deleteTaskValidator;