const validationResult = require('express-validator')
const {
	getFriendsForUser,
	insertFriendship,
	updateFriendship,
	deleteFriendship,
} = require('../services/friendship.services')

const getFriendsForUserController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const user_id = req.body
		const result = await getFriendsForUser(user_id)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const insertFriendshipController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { user_id1, user_id2 } = req.body
		const result = await insertFriendship(user_id1, user_id2)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const updateFriendshipController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { status } = req.body
		const friendship = { status }
		const result = await updateFriendship(friendship)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const deleteFriendshipController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { user_id } = req.body
		const result = await deleteFriendship(user_id)
		res.status(200).json({ result: result })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

module.exports = {
	getFriendsForUserController,
	insertFriendshipController,
	updateFriendshipController,
	deleteFriendshipController,
}
