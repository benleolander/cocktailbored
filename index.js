require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const cocktailsController = require('./controllers/cocktails')

const app = express()

app.use(express.static(`${__dirname}/dist`))
// app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

mongoose.connect('mongodb://localhost/cocktailbored')

app.use(bodyParser.json())

app.get('/api/cocktails', cocktailsController.index)
app.post('/api/cocktails', cocktailsController.create)

app.listen(process.env.PORT, () => console.log(`Express is listening on Port ${process.env.PORT}`))
