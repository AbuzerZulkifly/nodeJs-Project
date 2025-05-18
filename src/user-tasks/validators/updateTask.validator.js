const { body } = require('express-validator');
const { StatusCodes } = require('http-status-codes');

const updateTaskValidator = [
  body('_id', 'Valid document is not found').notEmpty().isMongoId(),
  body('title', 'Please enter a title').optional().notEmpty(),
  body('title').isLength({ max: 100 }),
  body('dueDate', 'Please enter a dueDate in the ISO8601 format').optional().isISO8601(),
  body('description').optional().notEmpty().trim(),
  body('priority').optional().isIn(['low', 'normal', 'high']),
  body('status').optional().isIn(['todo', 'inProgress', 'completed']),
];

module.exports = updateTaskValidator;