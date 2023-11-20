const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const {
	getUsers,
	getUserById,
	insertUser,
	updateUser,
	deleteUser,
	authenticate,
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
		return res.status(400).json({ errors: errors.array() })
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
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { username, email, password } = req.body
		const user = await insertUser({ username, email, password })
		console.log({ user })
		res.status(200).json({ message: 'User added succesfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const updateUserController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { username, email, password, user_id } = req.body
		const user = await updateUser({ username, email, password, user_id })
		console.log({ user })
		res.status(200).json({
			message: 'User updated successfully',
		})
	} catch (error) {
		res.status(500).json({ errors: errors.array() })
	}
}

const deleteUserController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const { user_id } = req.body
		const result = await deleteUser(user_id)
		console.log({ result })
		res.status(200).json({ message: 'Deleted user successfully.' })
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

const authenticateController = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const user = req.body
		if (!user) {
			res.status(401).json({ message: 'Missing data ' })
		}

		const result = await authenticate(user.email, user.password)
		const token = jwt.sign(
			{ user_id: result?.user_id },
			process.env.SECRET_KEY
		)
		res.status(200).json({
			message: 'Authenticated',
			user: result,
			token: token,
		})
	} catch (error) {
		res.status(500).json({ message: error?.message })
	}
}

module.exports = {
	getUsersController,
	getUserByIdController,
	insertUserController,
	updateUserController,
	deleteUserController,
	authenticateController,
}
