const express = require('express')
const {
	getSongByIdValidator,
	getSongByNameValidator,
	insertSongValidator,
	updateSongValidator,
	deleteSongValidator,
} = require('../validators/songs.validators')
const {
	getSongsController,
	getSongByIdController,
	getSongByNameController,
	insertSongController,
	updateSongController,
	deleteSongController,
} = require('../controllers/songs.controllers')
const router = express.Router()

router.get('/getSongs', getSongsController)
router.post('/getSongById', getSongByIdValidator, getSongByIdController)
router.get('/get_songs_by_name', getSongByNameValidator, getSongByNameController)
router.post('/insertSong', insertSongValidator, insertSongController)
router.put('/updateSong', updateSongValidator, updateSongController)
router.delete('/deleteSong', deleteSongValidator, deleteSongController)

module.exports = router
