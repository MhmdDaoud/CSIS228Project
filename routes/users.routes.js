const express = require('express')
const {
	getUsersController,
	getUserByIdController,
	insertUserController,
	deleteUserController,
	updateUserController,
	authenticateController,
} = require('../controllers/users.controllers')
const {
	getUserByIdValidator,
	insertUserValidator,
	updateUserValidator,
	deleteUserValidator,
	authenticateValidator,
} = require('../validators/users.validators')
const router = express.Router()

router.get('/getUsers', getUsersController)
router.post('/authenticate', authenticateValidator, authenticateController)
router.post('/userById', getUserByIdValidator, getUserByIdController)
router.post('/create_user', insertUserValidator, insertUserController)
router.put('/updateUser', updateUserValidator, updateUserController)
router.delete('/deleteUser', deleteUserValidator, deleteUserController)

module.exports = router
