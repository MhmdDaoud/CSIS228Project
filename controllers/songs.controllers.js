const { validationResult } = require('express-validator')
const {
	getSongs,
	getSongById,
	getSongByName,
	insertSong,
	updateSong,
	deleteSong,
} = require('../services/songs.services')
const moment = require('moment')

const getSongsController = async (req, res) => {
	try {
		res.status(200).json({ songs: await getSongs() })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getSongByIdController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { song_id } = req.body
		const song = await getSongById(song_id)
		res.status(200).json({ song })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getSongByNameController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { title } = req.body
		const results = await getSongByName(title)
		res.status(200).json({ results })
	} catch (error) {
		res.status(500).json({ errors: errors.array() })
	}
}

const insertSongController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { title, artist_id, album, duration, genre } = req.body
		const songData = {
			title,
			artist_id,
			album,
			duration,
			genre,
		}
		const result = await insertSong(songData)
		console.log(result)
		res.status(200).json({ message: 'Song added succesfully.' })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const updateSongController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { title, album, song_id } = req.body
		const song = { title, album, song_id }
		const result = await updateSong(song)
		console.log({ result })
		res.status(200).json({ message: 'Song updated successfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const deleteSongController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { song_id } = req.body
		const result = await deleteSong(song_id)
		console.log(result)
		res.status(200).json({ message: 'Song deleted successfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

module.exports = {
	getSongsController,
	getSongByIdController,
	getSongByNameController,
	insertSongController,
	updateSongController,
	deleteSongController,
}
