const { validationResult } = require('express-validator')
const {
	getArtists,
	getArtistById,
	getArtistByName,
	insertArtist,
	updateArtist,
	deleteArtist,
} = require('../services/artists.services')

const getArtistsController = async (req, res) => {
	try {
		res.status(200).json({ result: await getArtists() })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getArtistByIdController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { artist_id } = req.body
		res.status(200).json({ result: await getArtistById(artist_id) })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getArtistByNameController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { name } = req.body
		res.status(200).json({ result: await getArtistByName(name) })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const insertArtistController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { name, bio, genre, country, website, social_media_links } =
			req.body
		const artist = {
			name,
			bio,
			genre,
			country,
			website,
			social_media_links,
		}
		const result = await insertArtist(artist)
		console.log({ result })
		res.status(200).json({ message: 'Artist added successfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const updateArtistController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() })
	}

	try {
		const {
			name,
			bio,
			genre,
			country,
			website,
			social_media_links,
			artist_id,
		} = req.body
		const artist = {
			name,
			bio,
			genre,
			country,
			website,
			social_media_links,
			artist_id,
		}
		const result = await updateArtist(artist)
		console.log({ result })
		res.status(200).json({
			message: 'Artist updated successfully.',
		})
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const deleteArtistController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { artist_id } = req.body
		const result = await deleteArtist(artist_id)
		console.log({ result })
		res.status(200).json({ message: 'Artist deleted successfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

module.exports = {
	getArtistsController,
	getArtistByIdController,
	getArtistByNameController,
	insertArtistController,
	updateArtistController,
	deleteArtistController,
}
