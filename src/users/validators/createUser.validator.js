const { body } = require('express-validator');

const createUserValidator = [
  body('firstName', 'Please enter a first name').notEmpty().trim(),
  body('firstName').isLength({ max: 50 }),
  body('lastName', 'Please enter a last name').optional().trim(),
  body('lastName').isLength({ max: 50 }),
  body('email', 'Please enter a valid email').notEmpty().isEmail(),
  body('email').isLength({ max: 100 }),
  body('password', 'Please enter a password').notEmpty().isLength({ min: 8, max: 100 }).matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),    
]

module.exports = createUserValidator;