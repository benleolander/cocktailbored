require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const cocktailsController = require('./controllers/cocktails')

const app = express()
mongoose.connect('mongodb://localhost/cocktailbored')

app.use(bodyParser.json())

app.get('/cocktails', cocktailsController.index)
app.post('/cocktails', cocktailsController.create)

app.listen(process.env.PORT, () => console.log(`Express is listening on Port ${process.env.PORT}`))
