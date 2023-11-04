const { check } = require('express-validator')

const getPlaylistByIdValidator = [
	check('playlist_id').notEmpty().withMessage('Playlist ID is required.'),
]

const getPlaylistByNameValidator = [
	check('title').notEmpty().withMessage('Playlist name is required.'),
]

const insertPlaylistValidator = [
	check('title').notEmpty().withMessage('Playlist name is required.'),
	check('song_ids')
		.notEmpty()
		.withMessage('Playlist must contain atleast one song.'),
]

const updatePlaylistValidator = [
	check('title').notEmpty().withMessage('Playlist name is required.'),
	check('song_ids')
		.notEmpty()
		.withMessage('Playlist must contain atleast one song.'),
]

const deletePlaylistValidator = [
	check('playlist_id').notEmpty().withMessage('Playlist ID is required.'),
]

module.exports = {
	getPlaylistByIdValidator,
	getPlaylistByNameValidator,
	insertPlaylistValidator,
	updatePlaylistValidator,
	deletePlaylistValidator,
}
