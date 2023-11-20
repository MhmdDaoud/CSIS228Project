const { validationResult } = require('express-validator')
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
		const friendship = {
			user_id1,
			user_id2,
		}
		const result = await insertFriendship(friendship)
		console.log({ result })
		res.status(200).json({ message: 'Friendship added successfully.' })
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
		const { status, friendship_id } = req.body
		const friendship = { status, friendship_id }
		const result = await updateFriendship(friendship)
		console.log({ result })
		res.status(200).json({ message: 'Friendship updated' })
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
		const { friendship_id } = req.body
		const result = await deleteFriendship(friendship_id)
		console.log({ result })
		res.status(200).json({ message: 'Friendship deleted.' })
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
