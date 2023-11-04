const express = require('express')
const {
	getArtistsController,
	getArtistByIdController,
	getArtistByNameController,
	insertArtistController,
	updateArtistController,
	deleteArtistController,
} = require('../controllers/artists.controllers')
const {
	getArtistByIdValidator,
	getArtistByNameValidator,
	insertArtistValidator,
	updateArtistValidator,
	deleteArtistValidator,
} = require('../validators/artists.validators')
const router = express.Router()

router.get('/getArtists', getArtistsController)
router.post('/getArtistById', getArtistByIdValidator, getArtistByIdController)
router.post(
	'/getArtistByName',
	getArtistByNameValidator,
	getArtistByNameController
)
router.post('/insertArtist', insertArtistValidator, insertArtistController)
router.put('/updateArtist', updateArtistValidator, updateArtistController)
router.delete('/deleteArtist', deleteArtistValidator, deleteArtistController)

module.exports = router
