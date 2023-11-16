const express = require('express')
const {
	getPlaylistsController,
	getPlayListByIdController,
	getPlaylistByNameController,
	insertPlaylistController,
	updatePlaylistController,
	deletePlaylistController,
} = require('../controllers/playlists.controllers')
const {
	getPlaylistByIdValidator,
	getPlaylistByNameValidator,
	insertPlaylistValidator,
	updatePlaylistValidator,
	deletePlaylistValidator,
} = require('../validators/playlists.validators')
const router = express.Router()

router.get('/getPlaylists', getPlaylistsController)
router.post(
	'/getPlaylistById',
	getPlaylistByIdValidator,
	getPlayListByIdController
)
router.post(
	'/getPlaylistsByName',
	getPlaylistByNameValidator,
	getPlaylistByNameController
)
router.post(
	'/insertPlaylist',
	insertPlaylistValidator,
	insertPlaylistController
)
router.put('/updatePlaylist', updatePlaylistValidator, updatePlaylistController)
router.delete(
	'/deletePlaylist',
	deletePlaylistValidator,
	deletePlaylistController
)

module.exports = router
