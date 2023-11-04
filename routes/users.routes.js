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
} = require('../validators/users.validators')
const router = express.Router()

router.get('/getUsers', authenticateController, getUsersController)
router.post('/userById', getUserByIdValidator, getUserByIdController)
router.post('/insertUser', insertUserValidator, insertUserController)
router.put('/updateUser', updateUserValidator, updateUserController)
router.delete('/deleteUser', deleteUserValidator, deleteUserController)

module.exports = router
