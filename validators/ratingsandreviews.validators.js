const { check } = require('express-validator')

const getRatingsForSongValidator = [
    check('song_id').notEmpty().withMessage('Song ID is required')
]

const getRatingsByUserValidator = [
    check('user_id').notEmpty().withMessage('User ID is required')
]

const insertRatingValidator = [
    check('user_id').notEmpty().withMessage('User ID is required'),
    check('song_id').notEmpty().withMessage('Song ID is required')
]

const updateRatingValidator = [
    check('rating_id').notEmpty().withMessage('Rating ID is required')
]

const deleteRatingValidator = [
    check('rating_id').notEmpty().withMessage('Rating ID is required')
]

module.exports = {
    getRatingsForSongValidator,
    getRatingsByUserValidator,
    insertRatingValidator,
    updateRatingValidator,
    deleteRatingValidator
}
