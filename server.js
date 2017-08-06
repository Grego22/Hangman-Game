const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const fs = require('fs')
const expressValidator = require('express-validator')

const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n")

const app = express()

// app.use(
//   expressSession({
//     secret: "kinky wizards",
//     resave: false,
//     saveUninitialized: true
//   }))

app.use(expressValidator())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

//declare a variable for letters guessed
let lettersGuessed = []
// random number
let randomWord = words[Math.floor(Math.random() * words.length)]
console.log(randomWord);


// let gameData = {
//   progress: [],
//   guess: [],
//   numberGuesses: 8,
//   messageToUser: "Take your best shot and pick a letter!"
// }
//for loop for generating individual letters of the randomWord
app.get('/', (request, response) =>{
    let correctGuess = []

    for (var i = 0; i < randomWord.length; i++) {
      let mysteryLetter  = randomWord[i]

      if (lettersGuessed.includes(mysteryLetter)){
        correctGuess.push(mysteryLetter)
      } else{
        correctGuess.push('_')
      }
    }
  //console.log(mysteryLetter);
  const lettersFound = correctGuess.join("")
  response.render('index', {lettersFound, lettersGuessed})
})

  app.post("/", (request, response)=>{
    const storeLetter = request.body.letter

    const guessedLetter = false
    if (!guessedLetter){
      lettersGuessed.push(storeLetter)
    }
    response.redirect('/')
  })
// Seems like another challenge is express sessions. Ive been  reading up on it, but
// not very comfortable with it right now.  Think it is integral in storing a user's
// "guessed letters "

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
