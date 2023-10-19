const moment = require('moment')
const { query } = require('../database/db')
require('dotenv').config()

const getUsers = async () => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.users;`
		const result = await query(sql)
		return result
	} catch (error) {
		throw new Error(error)
	}
}

const getUserById = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.users WHERE user_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

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

const updateUser = async (user) => {
	const { username, email, password } = user

	try {
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

module.exports = {
	getUsers,
	getUserById,
	insertUser,
	updateUser,
	deleteUser,
}
