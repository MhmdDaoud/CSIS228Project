const { check } = require('express-validator')

const getPreferenceByIdValidator = [
	check('preference_id').notEmpty().withMessage('ID can not be empty.'),
]

const getPreferenceByUserValidator = [
	check('user_id').notEmpty().withMessage('ID can not be empty.'),
]

const insertUserPreferenceValidator = [
	check('user_id').notEmpty().withMessage('ID can not be empty.'),
	check('favorite_genres')
		.notEmpty()
		.withMessage('Must have atleast 1 genre selected.'),
]

const updateUserPreferenceValidator = [
	check('user_id').notEmpty().withMessage('ID can not be empty.'),
	check('favorite_genres')
		.notEmpty()
		.withMessage('Must have atleast 1 genre selected.'),
]

const deleteUserPreferenceValidator = [
	check('user_id').notEmpty().withMessage('ID can not be empty.'),
]

module.exports = {
	getPreferenceByIdValidator,
	getPreferenceByUserValidator,
	insertUserPreferenceValidator,
	updateUserPreferenceValidator,
	deleteUserPreferenceValidator,
}
