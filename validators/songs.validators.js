const { check } = require('express-validator')

const getSongByIdValidator = [
	check('song_id').notEmpty().withMessage('Song ID is required.'),
]

const getSongByNameValidator = [
	check('title').notEmpty().withMessage('Song name is required.'),
]

const insertSongValidator = [
	check('title').notEmpty().withMessage('Song name is required.'),
	check('artist_id').notEmpty().withMessage('Arist ID is required.'),
	check('album').notEmpty().withMessage('Album name is required.'),
    check('duration').notEmpty().withMessage('Duration is required.'),
    check('genre').notEmpty().withMessage('Genre is required.'),
]

const updateSongValidator = [
	check('song_id').notEmpty().withMessage('Song ID is required.'),
	check('title').notEmpty().withMessage('Song name is required.'),
	check('album').notEmpty().withMessage('Album name is required.'),
]

const deleteSongValidator = [
	check('song_id').notEmpty().withMessage('Song ID is required.'),
]

module.exports = {
	getSongByIdValidator,
	getSongByNameValidator,
	insertSongValidator,
	updateSongValidator,
	deleteSongValidator,
}
