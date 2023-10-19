const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors({ origin: '*' }))

const users = require('./routes/users.routes')

app.get('/', (req, res) => {
	res.status(200).json({ message: 'This is the index page.' })
})

app.use('/api/users/', users)

app.listen(port, () => {
	console.log(`My app is listening on port ${port}.`)
})