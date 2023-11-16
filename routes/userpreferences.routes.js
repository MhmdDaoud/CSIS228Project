const express = require('express')
const {
	getPreferenceByIdValidator,
	getPreferenceByUserValidator,
	insertUserPreferenceValidator,
	updateUserPreferenceValidator,
	deleteUserPreferenceValidator,
} = require('../validators/userpreferences.validators')
const {
	getAllPreferencesController,
	getPreferenceByIdController,
	getPreferenceByUserController,
	insertUserPreferenceController,
	updateUserPreferenceController,
	deleteUserPreferenceController,
} = require('../controllers/userpreferences.controllers')
const router = express.Router()

router.get('/userPreferences', getAllPreferencesController)
router.post(
	'/getPrefById',
	getPreferenceByIdValidator,
	getPreferenceByIdController
)
router.post(
	'/getPrefByUser',
	getPreferenceByUserValidator,
	getPreferenceByUserController
)
router.post(
	'/insertPref',
	insertUserPreferenceValidator,
	insertUserPreferenceController
)
router.put(
	'/updatePref',
	updateUserPreferenceValidator,
	updateUserPreferenceController
)
router.delete(
	'/deletePref',
	deleteUserPreferenceValidator,
	deleteUserPreferenceController
)

module.exports = router
