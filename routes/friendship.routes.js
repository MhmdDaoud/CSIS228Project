const express = require('express')
const {
	getFriendsForUserValidator,
	insertFriendshipValidatorm,
	updateFriendshipValidator,
	deleteFriendshipValidator,
} = require('../validators/friendship.validators')
const {
	getFriendsForUserController,
	insertFriendshipController,
	updateFriendshipController,
	deleteFriendshipController,
} = require('../controllers/friendship.controllers')
const router = express.Router()

router.post(
	'/getFriendsList',
	getFriendsForUserValidator,
	getFriendsForUserController
)
router.post(
	'/insertFriendship',
	insertFriendshipValidatorm,
	insertFriendshipController
)
router.put(
	'/updateFriendship',
	updateFriendshipValidator,
	updateFriendshipController
)
router.delete(
	'/deleteFriendship',
	deleteFriendshipValidator,
	deleteFriendshipController
)

module.exports = router