const moment = require('moment')
const { query } = require('../database/db')
require('dotenv').config()

/**
 * This function is used to get a rating by ID from the database
 * @param {int} id
 * @returns rating
 */
const getRatingById = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.ratingsandreviews WHERE rating_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get all the ratings for a song in the database
 * @param {int} id
 * @returns [ratings]
 */
const getRatingsForSong = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.ratingsandreviews WHERE song_id = ?
        GROUP BY rating_id;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to get all the ratings by a user in the database
 * @param {int} id
 * @returns [ratings]
 */
const getRatingsByUser = async (id) => {
	try {
		let sql = `SELECT * FROM ${process.env.DB_NAME}.ratingsandreviews WHERE user_id = ?
        GROUP BY rating_id;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to insert a rating and review in the database
 * @param {ratingandreview} ratingmreview
 * @returns query result
 */
const insertRating = async (ratingnreview) => {
	try {
		const { user_id, song_id, rating, review_text } =
			ratingnreview
		let sql = `INSERT INTO ${process.env.DB_NAME}.ratingsandreviews 
        (user_id, song_id, rating, review_text, timestamp) VALUES (?, ?, ?, ?, ?);`
		const result = await query(sql, [
			user_id,
			song_id,
			rating,
			review_text,
			moment().format('YYYY-MM-DD HH:mm:ss'),
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to update a rating and review in the database
 * @param {ratingandreview} ratingnreview
 * @returns query result
 */
const updateRating = async (ratingnreview) => {
	const { rating, review_text, rating_id } = ratingnreview

	try {
		const existingRating = await getRatingById(rating_id)

		if (existingRating.length === 0) {
			throw new Error('Rating with the provided ID does not exist')
		}

		let sql = `UPDATE ${process.env.DB_NAME}.ratingsandreviews 
        SET rating = ?,
        review_text = ?
        WHERE rating_id = ?;`
		const result = await query(sql, [
			rating,
			review_text,
			rating_id,
		])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

/**
 * This function is used to delete a rating and review from the database
 * @param {int} id
 * @returns query result
 */
const deleteRating = async (id) => {
	try {
		let sql = `DELETE FROM ${process.env.DB_NAME}.ratingsandreviews WHERE rating_id = ?;`
		const result = await query(sql, [id])
		return result
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = {
	getRatingById,
	getRatingsForSong,
	getRatingsByUser,
	insertRating,
	updateRating,
	deleteRating,
}
