const { query } = require('../database/db')
require('dotenv').config()

/**
 * This function is used to get all the artists from the database
 * @returns artists
 */
const getArtists = async () => {
	try {
		let sql = `SELECT * FROM ${proces.env.DB_NAME}.artists;`
		const result = await query(sql)
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get an artist by ID from the database
 * @param {int} id
 * @returns artist
 */
const getArtistById = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.artists WHERE artist_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get an artist by name from the database
 * @param {string} name
 */
const getArtistByName = async (name) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.artists WHERE name = ?;`
		const result = await query(sql, [name])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to insert an artist in the database
 * @param {artist} artist
 */
const insertArtist = async (artist) => {
	const { name, bio, genre, country, website, social_media_links } = artist

	try {
		let sql = `INSERT INTO ${process.env.DB_NAME}.artists 
        (name, bio, genre, country, website, social_media_links) VALUES (?, ?, ?, ?, ?, ?);`
		const result = await query(sql, [
			name,
			bio,
			genre,
			country,
			website,
			social_media_links,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to update an artist in the database
 * @param {artist} artist
 * @returns new artist
 */
const updateArtist = async (artist) => {
	const {
		name,
		bio,
		genre,
		country,
		website,
		social_media_links,
		artist_id,
	} = artist

	try {
		const existingArtist = await getArtistById(artist_id)

		if (existingArtist.length === 0) {
			throw new Error('Artist with the provided ID does not exist.')
		}

		let sql = `UPDATE ${process.env.DB_NAME}.artists SET
        name = ?,
        bio = ?,
        genre = ?,
        country = ?,
        website = ?,
        social_media_links = ?
		WHERE artist_id = ?;`
		const result = await query(sql, [
			name,
			bio,
			genre,
			country,
			website,
			social_media_links,
			artist_id,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to delete an artist from the database
 * @param {int} id
 * @returns query result
 */
const deleteArtist = async (id) => {
	try {
		return await query(
			`DELETE FROM ${process.env.DB_NAME}.artists WHERE artist_id = ?;`,
			[id]
		)
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = {
	getArtists,
	getArtistById,
	getArtistByName,
	insertArtist,
	updateArtist,
	deleteArtist,
}
