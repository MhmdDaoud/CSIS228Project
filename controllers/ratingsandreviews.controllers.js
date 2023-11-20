const { validationResult } = require('express-validator')
const {
	getRatingsForSong,
	getRatingsByUser,
	insertRating,
	updateRating,
	deleteRating,
} = require('../services/ratingsandreviews.services')

const getRatingsForSongController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { song_id } = req.body
		const result = await getRatingsForSong(song_id)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getRatingsByUserController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { user_id } = req.body
		const result = await getRatingsByUser(user_id)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const insertRatingController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { user_id, song_id, rating, review_text } = req.body
		const ratingnreview = {
			user_id,
			song_id,
			rating,
			review_text,
		}
		const result = await insertRating(ratingnreview)
		console.log(result)
		res.status(200).json({ message: 'Rating added successfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const updateRatingController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { rating, review_text, rating_id } = req.body
		const ratingnreview = { rating, review_text, rating_id }
		const result = await updateRating(ratingnreview)
		console.log({ result })
		res.status(200).json({
			message: 'Rating updated successfully.',
		})
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const deleteRatingController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { rating_id } = req.body
		const result = await deleteRating(rating_id)
		console.log(result)
		res.status(200).json({ message: 'Rating deleted successfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

module.exports = {
	getRatingsForSongController,
	getRatingsByUserController,
	insertRatingController,
	updateRatingController,
	deleteRatingController,
}
