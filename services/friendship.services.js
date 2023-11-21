const { query } = require('../database/db')
const moment = require('moment')
require('dotenv').config()

/**
 * This function is used to get a friendship by ID from the database
 * @param {int} friendship_id
 * @returns friendship
 */
const getFriendshipById = async (friendship_id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.friendship WHERE friendship_id = ?;`
		const result = await query(sql, [friendship_id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get the friends list of a user from the database
 * @param {int} id
 * @returns [friendship]
 */
const getFriendsForUser = async (id) => {
	try {
		let sql =
			`SELECT * FROM ${process.env.DB_NAME}.friendship 
			WHERE user_id1 = ? OR user_id2 = ? AND status = 'Accepted';`
		const result = await query(sql, [id.user_id, id.user_id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to insert a friendship into the database
 * @param {friendship} friendship
 * @returns query result
 */
const insertFriendship = async (friendship) => {
	try {
		const { user_id1, user_id2 } = friendship
		let sql = `INSERT INTO ${process.env.DB_NAME}.friendship 
                    (user_id1, user_id2, status, request_date, response_date) 
                    VALUES (?, ?, 'Pending', ?, NULL);`

		const currentDate = moment().format('YYYY-MM-DD HH:mm:ss')

		const result = await query(sql, [user_id1, user_id2, currentDate])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to update a friendship in the database
 * @param {friendship} friendship
 * @returns query result
 */
const updateFriendship = async (friendship) => {
	const { status, friendship_id } = friendship

	try {
		const existingFriendship = await getFriendshipById(friendship_id)

		if (existingFriendship.length === 0) {
			throw new Error('Friendship with the provided ID does not exist')
		}

		let sql = `UPDATE ${process.env.DB_NAME}.friendship SET
        status = ?,
		response_date = ?
        WHERE friendship_id = ?;`
		const result = await query(sql, [
			status,
			(response_date = moment().format('YYYY-MM-DD HH:mm:ss')),
			friendship_id,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to delete a friendship from the database
 * @param {int} id
 * @returns query result
 */
const deleteFriendship = async (id) => {
	try {
		let sql = `DELETE FROM ${process.env.DB_NAME}.friendship WHERE friendship_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = {
	getFriendshipById,
	getFriendsForUser,
	insertFriendship,
	updateFriendship,
	deleteFriendship,
}
