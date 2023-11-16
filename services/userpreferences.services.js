const { query } = require('../database/db')
require('dotenv').config()

/**
 * This function is used to get all user preferences in the database
 * @returns [user preferences]
 */
const getAllUserPreferences = async () => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.userpreferences;`
		const result = await query(sql)
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get a user preference by ID from the database
 * @param {int} id
 * @returns user preference
 */
const getPreferenceById = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.userpreferences WHERE preference_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get a user preference by user ID from the database
 * @param {int} id
 * @returns user preference
 */
const getPreferenceByUser = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.userpreferences WHERE user_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to insert a userpreference into the database
 * @param {userPreference} userPreference
 * @returns query result
 */
const insertUserPreference = async (userPreference) => {
	const { user_id, favorite_genres, favorite_artists, playlist_ids } =
		userPreference

	try {
		let sql = `INSERT INTO ${process.env.DB_NAME}.userpreferences 
        (user_id, favorite_genres, favorite_artists, playlist_ids) VALUES (?, ?, ?, ?);`
		const result = await query(sql, [
			user_id,
			favorite_genres,
			favorite_artists,
			playlist_ids,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to update an existing user preference in the database
 * @param {userPreference} userPreference
 * @returns query result
 */
const updateUserPreference = async (userPreference) => {
	const { favorite_genres, favorite_artists, playlist_ids } = userPreference

	try {
		let sql = `UPDATE ${process.env.DB_NAME}.userpreferences SET
        favorite_genres = ?,
        favorite_artists = ?,
        playlist_ids = ?;`
		const result = await query(sql, [
			favorite_genres,
			favorite_artists,
			playlist_ids,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to delete a userpreference by ID from the database
 * @param {int} id 
 * @returns query result
 */
const deleteUserPreference = async (id) => {
	try {
		let sql = `DELETE FROM ${process.env.DB_NAME}.userpreferences WHERE preference_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = {
	getAllUserPreferences,
	getPreferenceById,
	getPreferenceByUser,
	insertUserPreference,
	updateUserPreference,
	deleteUserPreference,
}
