const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const fs = require('fs')

const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n")

const app = express()

app.use(
  expressSession({
    secret: "kinky wizards",
    resave: false,
    saveUninitialized: true
  }))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// random number
let randomWord = words[Math.floor(Math.random() * words.length)]



//for loop for generating individual letters of the randomWord
for (var i = 0; i < randomWord.length; i++) {
  randomWord[i]
  let mysteryWord = randomWord[i]
  console.log(mysteryWord);
}
// Seems like another challenge is express sessions. Ive been  reading up on it, but
// not very comfortable with it right now.  Think it is integral in storing a user's
// "guessed letters "

app.get('/', (request, response) =>{

  response.render('index')
})
app.post('/guess', (request, response)=>{
  console.log(request.body)
  response.send('marking something complete')
})

// also going to need an if statement that prints out if the player wins/loses.
// Furthermore a count function that lets the player (user) know
// how many guesses they have left


app.listen(7777, ()=> {
    console.log('Feeling good on highway 7777')
})
