const { check } = require('express-validator')

const getUserByIdValidator = [
	check('user_id').notEmpty().withMessage('User ID is required.'),
]

const insertUserValidator = [
	check('username').notEmpty().withMessage('Username is required.'),
	check('email').isEmail().withMessage('Invalid email.'),
	check('email').isEmpty().withMessage('Email is required.'),
	check('password').isStrongPassword().withMessage('Password is weak.'),
	check('password').matches(
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		'i'
	),
]

const updateUserValidator = [
	check('username').notEmpty().withMessage('Username is required.'),
	check('email').isEmail().withMessage('Invalid email.'),
	check('email').isEmpty().withMessage('Email is required.'),
	check('password').isStrongPassword().withMessage('Password is weak.'),
	check('password').matches(
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		'i'
	),
]

const deleteUserValidator = [
	check('user_id').isEmpty().withMessage('User ID is required.'),
]

module.exports = {
	getUserByIdValidator,
	insertUserValidator,
	updateUserValidator,
	deleteUserValidator,
}
