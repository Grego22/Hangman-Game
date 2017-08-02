const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const sessions = require('express-sessions')
const fs = require('fs')

const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n")

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

/* Seems the main challenge in this assignment is how to generate a random word
A for loop would most likely be the best way of going about this.

after getting the random word, have to figure out a method to break the word down into letters.
