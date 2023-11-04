const jwt = require('jsonwebtoken')

// Middleware function
const authenticateToken = (req, res, next) => {
	const autHeader = req.headers('authorization')
	const token = autHeader && autHeader.split(' ')[1]
	if (token === null) {
		return res.sendStatus(401) // Unauthorized
	}

	jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
		// Authorization -> Database :: Authentication -> JWT
		if (err) {
			return res.sendStatus(403) // Forbidden
		}
		req.user = user
		next() // Continue to controllers/services
	})
}

module.exports = authenticateToken
