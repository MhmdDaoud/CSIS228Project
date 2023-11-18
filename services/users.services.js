const moment = require('moment')
const { query } = require('../database/db')
require('dotenv').config()

/**
 * THis function is used to get all the users in the database
 * @returns users
 */
const getUsers = async () => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.users;`
		const result = await query(sql)
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get a user by ID from the database
 * @param {int} id
 * @returns query result
 */
const getUserById = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.users WHERE user_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to insert a user in the database
 * @param {user} user
 * @returns query result
 */
const insertUser = async (user) => {
	const { username, email, password } = user

	try {
		let sql = `INSERT INTO ${process.env.DB_NAME}.users 
    (username, email, password, registration_date) VALUES (?, ?, ?, ?);`
		const result = await query(sql, [
			username,
			email,
			password,
			moment().format('YYYY-MM-DD'),
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to update users in the database
 * @param {user} user
 * @returns query result
 */
const updateUser = async (user) => {
	const { username, email, password, user_id } = user

	try {
		const existingUser = await getUserById(user_id)

		if (existingUser.length === 0) {
			throw new Error('User with the provided ID does not exist')
		}

		let sql = `UPDATE ${process.env.DB_NAME}.users SET
    username = ?,
    email = ?,
    password = ?
    WHERE user_id = ?;`

		const result = await query(sql, [username, email, password, user_id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to delete users from the database
 * @param {int} id
 * @returns query result
 */
const deleteUser = async (id) => {
	try {
		return await query(
			`DELETE FROM ${process.env.DB_NAME}.users WHERE user_id = ?;`,
			[id]
		)
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to authenticate users
 * @param {string} email
 * @param {string} password
 * @returns user
 */
const authenticate = async (email, password) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.users 
		WHERE email = ? AND password = ?;`
		const user = await query(sql, [email, password])
		return user[0]
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = {
	getUsers,
	getUserById,
	insertUser,
	updateUser,
	deleteUser,
	authenticate,
}
