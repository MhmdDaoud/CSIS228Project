const { validationResult } = require('express-validator')
const {
	getAllUserPreferences,
	getPreferenceById,
	getPreferenceByUser,
	insertUserPreference,
	updateUserPreference,
	deleteUserPreference,
} = require('../services/userpreferences.services')

const getAllPreferencesController = async (req, res) => {
	try {
		res.status(200).json({ message: await getAllUserPreferences() })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getPreferenceByIdController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { preference_id } = req.body
		const result = await getPreferenceById(preference_id)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const getPreferenceByUserController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { user_id } = req.body
		const result = await getPreferenceByUser(user_id)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const insertUserPreferenceController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { user_id, favorite_genres, favorite_artists, playlist_ids } =
			req.body
		userPref = { user_id, favorite_genres, favorite_artists, playlist_ids }
		const result = await insertUserPreference(userPref)
		console.log(result)
		res.status(200).json({
			message: 'User preferences added successfully.',
		})
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const updateUserPreferenceController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const {
			favorite_genres,
			favorite_artists,
			playlist_ids,
			preference_id,
		} = req.body
		userPref = {
			favorite_genres,
			favorite_artists,
			playlist_ids,
			preference_id,
		}
		const result = await updateUserPreference(userPref)
		console.log({ result })
		res.status(200).json({ message: 'Preferences updated successfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const deleteUserPreferenceController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { preference_id } = req.body
		const result = await deleteUserPreference(preference_id)
		console.log(result)
		res.status(200).json({
			message: 'Deleted user preferences successfully',
		})
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

module.exports = {
	getAllPreferencesController,
	getPreferenceByIdController,
	getPreferenceByUserController,
	insertUserPreferenceController,
	updateUserPreferenceController,
	deleteUserPreferenceController,
}
