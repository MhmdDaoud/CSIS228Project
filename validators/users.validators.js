const { check } = require('express-validator')

const authenticateValidator = [
	check('email').notEmpty().withMessage('Email is required.'),
	check('password').notEmpty().withMessage('Password is required.'),
]

const getUserByIdValidator = [
	check('user_id').notEmpty().withMessage('User ID is required.'),
]

const insertUserValidator = [
	check('username').notEmpty().withMessage('Username is required.'),
	check('email').isEmail().withMessage('Invalid email.'),
	check('password').isStrongPassword().withMessage('Password is weak.'),
]

const updateUserValidator = [
	check('user_id').notEmpty().withMessage('User ID is required.'),
	check('username').notEmpty().withMessage('Username is required.'),
	check('email').isEmail().withMessage('Invalid email.'),
	check('password').isStrongPassword().withMessage('Password is weak.'),
]

const deleteUserValidator = [
	check('user_id').notEmpty().withMessage('User ID is required.'),
]

module.exports = {
	authenticateValidator,
	getUserByIdValidator,
	insertUserValidator,
	updateUserValidator,
	deleteUserValidator,
}
