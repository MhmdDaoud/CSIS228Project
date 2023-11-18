const { query } = require('../database/db')
require('dotenv').config()
const moment = require('moment')

/**
 * This function is used to get all the songs in the database
 * @returns songs
 */
const getSongs = async () => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.songs;`
		const result = await query(sql)
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get a song by ID from the database
 * @param {number} id
 * @returns song
 */
const getSongById = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.songs WHERE song_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get a song by name from the database
 * @param {String} name
 * @returns song
 */
const getSongByName = async (name) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.songs WHERE title = ?;`
		const result = await query(sql, [name])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to insert a song into the database
 * @param {song} song
 * @returns query result
 */
const insertSong = async (song) => {
	const { title, artist_id, album, release_date, duration, genre } = song

	try {
		let sql = `INSERT INTO ${process.env.DB_NAME}.songs 
		(title, artist_id, album, release_date, duration, genre)
		VALUES (?, ?, ?, ?, ?, ?);`
		const result = await query(sql, [
			title,
			artist_id,
			album,
			moment(release_date).format('YYYY-MM-DD'),
			duration,
			genre,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to update a song in the database
 * @param {song} song
 * @returns query result
 */
const updateSong = async (song) => {
	const { title, album, song_id } = song

	try {
		const existingSong = await getSongById(song_id)

		if (existingSong.length === 0) {
			throw new Error('Song with the provided ID does not exist.')
		}

		let sql = `UPDATE ${process.env.DB_NAME}.songs SET
		title = ?,
		album = ?
		WHERE song_id = ?;`
		const result = await query(sql, [title, album, song_id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to delete a song from the database
 * @param {int} id
 * @returns query result
 */
const deleteSong = async (id) => {
	try {
		return await query(
			`DELETE FROM ${process.env.DB_NAME}.songs WHERE song_id = ?;`,
			[id]
		)
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = {
	getSongs,
	getSongById,
	getSongByName,
	insertSong,
	updateSong,
	deleteSong,
}
