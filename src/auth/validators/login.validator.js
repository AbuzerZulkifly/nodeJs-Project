const {body} = require('express-validator');

const loginValidator = [
  body('email', 'Please enter a valid email').isEmail().notEmpty().trim(),
  body('password', 'Please enter a password').notEmpty().isLength({min: 8}),
];

module.exports = loginValidator;