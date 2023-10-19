const { validationResult } = require('express-validator')
const {
	getUsers,
	getUserById,
	insertUser,
	updateUser,
	deleteUser,
} = require('../services/users.services')

const getUsersController = async (req, res) => {
	try {
		res.status(200).json({ users: await getUsers() })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const getUserByIdController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array })
	}

	try {
		const { user_id } = req.body
		const user = await getUserById(user_id)
		res.status(200).json({ user })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const insertUserController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array })
	}

	try {
		const { username, email, password } = req.body
		const user = await insertUser({ username, email, password })
		res.status(200).json({ user })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const updateUserController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array })
	}

	try {
		const { username, email, password } = req.body
		const user = await updateUser({ username, email, password })
		res.status(200).json({ user })
	} catch (error) {
		res.status(500).json({ errors: errors.array })
	}
}

const deleteUserController = async(req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array })
	}

	try {
		const { user_id } = req.body
		const result = await deleteUser(user_id)
		res.status(200).json({ result })
	} catch(error) {
		res.status(500).json({ message: error?.message })
	}
}

module.exports = {
	getUsersController,
	getUserByIdController,
	insertUserController,
    updateUserController,
	deleteUserController,
}
