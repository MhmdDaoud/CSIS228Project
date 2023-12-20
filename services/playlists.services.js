const { query } = require('../database/db')
const moment = require('moment')
require('dotenv').config()

/**
 * This function is used to get all the playlists in the database
 * @returns playlists
 */
const getPlaylists = async () => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.playlists;`
		const result = await query(sql)
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get playlist by ID from the database
 * @param {int} id
 * @returns playlist
 */
const getPlayListById = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.playlists WHERE playlist_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get playlists with a certain name
 * @param {string} name
 * @returns playlists
 */
const getPlaylistsByName = async (name) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.playlists WHERE title LIKE ?;`
		const result = await query(sql, [`%${name}%`])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to insert a playlist in the database
 * @param {playlist} playlist
 * @returns query result
 */
const insertPlaylist = async (playlist) => {
	const { user_id, title, description, song_ids } = playlist

	try {
		let sql = `INSERT INTO ${process.env.DB_NAME}.playlists (user_id, title, description, creation_date, song_ids, img_path)
        VALUES (?, ?, ?, ?, ?, ?);`
		const result = await query(sql, [
			user_id,
			title,
			description,
			moment().format('YYYY-MM-DD HH:mm:ss'),
			song_ids,
			img_path
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to update a playlist in the database
 * @param {playlist} playlist
 * @returns query result
 */
const updatePlaylist = async (playlist) => {
	const { title, description, song_ids, img_path, playlist_id } = playlist

	try {
		const existingPlaylist = await getPlayListById(playlist_id)

		if (existingPlaylist.length === 0) {
			throw new Error('Playlist with the provided ID does not exist')
		}

		let sql = `UPDATE ${process.env.DB_NAME}.playlists SET
        title = ?,
        description = ?,
        song_ids = ?,
		img_path = ?
        WHERE playlist_id  = ?;`
		const result = await query(sql, [
			title,
			description,
			song_ids,
			img_path,
			playlist_id,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to delete a playlist from the database
 * @param {int} id
 * @returns query result
 */
const deletePlaylist = async (id) => {
	try {
		return await query(
			`DELETE FROM ${process.env.DB_NAME}.playlists WHERE playlist_id = ?;`,
			[id]
		)
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = {
	getPlaylists,
	getPlayListById,
	getPlaylistsByName,
	insertPlaylist,
	updatePlaylist,
	deletePlaylist,
}
