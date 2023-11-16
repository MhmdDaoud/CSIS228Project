const { check } = require('express-validator')

const getFriendsForUserValidator = [
    check('user_id').notEmpty().withMessage('User ID can not be empty.')
]

const insertFriendshipValidator = [
    check('user_id1').notEmpty().withMessage('User ID can not be empty.'),
    check('user_id2').notEmpty().withMessage('User ID can not be empty.')
]

const updateFriendshipValidator = [
    check('status').notEmpty().withMessage('Friendship status can not be empty'),
]

const deleteFriendshipValidator = [
    check('user_id').notEmpty().withMessage('User ID can not be empty.')
]

module.exports = {
    getFriendsForUserValidator,
    insertFriendshipValidator,
    updateFriendshipValidator,
    deleteFriendshipValidator
}


