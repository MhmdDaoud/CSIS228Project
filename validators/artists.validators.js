const { check } = require('express-validator')

const getArtistByIdValidator = [
	check('artist_id').notEmpty().withMessage('Artist ID is required.'),
]

const getArtistByNameValidator = [
	check('name').notEmpty().withMessage('Artist name is required.'),
]

const insertArtistValidator = [
	check('name').notEmpty().withMessage('Artist name is required.'),
	check('genre').notEmpty().withMessage('Genre is required.'),
]

const updateArtistValidator = [
	check('artist_id').notEmpty().withMessage('Artist ID is required.'),
	check('name').notEmpty().withMessage('Artist name is required.'),
	check('genre').notEmpty().withMessage('Genre is required.'),
]

const deleteArtistValidator = [
	check('artist_id').notEmpty().withMessage('Artist ID is required.'),
]

module.exports = {
	getArtistByIdValidator,
	getArtistByNameValidator,
	insertArtistValidator,
	updateArtistValidator,
	deleteArtistValidator,
}
