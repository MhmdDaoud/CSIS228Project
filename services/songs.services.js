const { query } = require('../database/db')
const moment = require('moment')

const getSongs = async () => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.songs;`
		const result = await query(sql)
		return result
	} catch (error) {
		throw new Error(error)
	}
}

const getSongById = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.songs WHERE song_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

const getSongByName = async (name) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.songs WHERE title = ?;`
		const result = await query(sql, [name])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

const insertSong = async (song) => {
	const {
		title,
		artist_id,
		album,
		release_date,
		duration,
		genre,
		audio_file_path,
	} = song

	try {
		let sql = `INSERT INTO ${process.env.DB_NAME}.songs 
		(title, artist_id, album, release_date, duration, genre, audio_file_path)
		VALUES (?, ?, ?, ?, ?, ?, ?);`
		const result = await query(sql, [
			title,
			artist_id,
			album,
			moment(release_date).format('YYYY-MM-DD'),
			duration,
			genre,
			audio_file_path,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

const updateSong = async (song) => {
	const { title, album } = song

	try {
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
