const { validationResult } = require('express-validator')
const {
	getSongs,
	getSongById,
	getSongByName,
	insertSong,
	updateSong,
	deleteSong,
} = require('../services/songs.services')

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
		const {
			title,
			artist_id,
			album,
			release_date,
			duration,
			genre,
			audio_file_path,
		} = req.body
		const song = await insertSong(
			title,
			artist_id,
			album,
			moment(release_date).format('YYYY-MM-DD'),
			duration,
			genre,
			audio_file_path
		)
		res.status(200).json({ song })
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
		const song = await updateSong(title, album, song_id)
		res.status(200).json({ song })
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
		res.status(200).json({ result })
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
