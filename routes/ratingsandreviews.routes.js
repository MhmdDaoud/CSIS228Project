const express = require('express')
const {
	getRatingsByUserController,
	getRatingsForSongController,
	insertRatingController,
	updateRatingController,
	deleteRatingController,
} = require('../controllers/ratingsandreviews.controllers')
const {
	getRatingsByUserValidator,
	getRatingsForSongValidator,
	insertRatingValidator,
	updateRatingValidator,
	deleteRatingValidator,
} = require('../validators/ratingsandreviews.validators')
const router = express.Router()

router.post(
	'/getRatingsForUser',
	getRatingsByUserValidator,
	getRatingsByUserController
)
router.post(
	'/getRatingsForSong',
	getRatingsForSongValidator,
	getRatingsForSongController
)
router.post('/addRating', insertRatingValidator, insertRatingController)
router.put('/updateRating', updateRatingValidator, updateRatingController)
router.delete('/deleteRating', deleteRatingValidator, deleteRatingController)

module.exports = router
