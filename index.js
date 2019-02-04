require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const cocktailsController = require('./controllers/cocktails')

const app = express()

app.use(express.static(`${__dirname}/dist`))

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.get('/api/cocktails', cocktailsController.index)
app.post('/api/cocktails', cocktailsController.create)
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () => console.log(`Express is listening on Port ${process.env.PORT}`))
