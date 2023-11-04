const validationResult = require('express-validator')
const {
	getPlaylists,
	getPlayListById,
	getPlaylistsByName,
	insertPlaylist,
	updatePlaylist,
	deletePlaylist,
} = require('../services/playlists.services')

const getPlaylistsController = async (req, res) => {
	try {
		res.status(200).json({ result: await getPlaylists() })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getPlayListByIdController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmtpy()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { playlist_id } = req.body
		const playlist = await getPlayListById(playlist_id)
		res.status(200).json({ result: playlist })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getPlaylistByNameController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmtpy()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { name } = req.body
		const playlists = await getPlaylistsByName(name)
		res.status(200).json({ result: playlists })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const insertPlaylistController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmtpy()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { title, description, song_ids } = req.body
		const result = await insertPlaylist({ title, description, song_ids })
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const updatePlaylistController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmtpy()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { title, description, song_ids } = req.body
		const result = await insertPlaylist({ title, description, song_ids })
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const deletePlaylistController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmtpy()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { playlist_id } = req.body
		const result = await deletePlaylist(playlist_id)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

module.exports = {
	getPlaylistsController,
	getPlayListByIdController,
	getPlaylistByNameController,
	insertPlaylistController,
	updatePlaylistController,
	deletePlaylistController,
}
