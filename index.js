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
const songs = require('./routes/songs.routes')
const artists = require('./routes/artists.routes')
const playlists = require('./routes/playlists.routes')
const userPrefs = require('./routes/userpreferences.routes')
const friendships = require('./routes/friendship.routes')
const ratingsandreviews = require('./routes/ratingsandreviews.routes')

app.get('/', (req, res) => {
	res.status(200).json({ message: 'This is the index page.' })
})

app.use('/api/users/', users)
app.use('/api/songs/', songs)
app.use('/api/artists/', artists)
app.use('/api/playlists/', playlists)
app.use('/api/userPrefs/', userPrefs)
app.use('/api/friendships/', friendships)
app.use('/api/ratingsnreviews', ratingsandreviews)

app.listen(port, () => {
	console.log(`My app is listening on port ${port}.`)
})
