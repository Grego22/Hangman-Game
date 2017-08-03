const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require('fs')

const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n")

const app = express()

// app.use(
//   expressSession({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true
//   })

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// random number
let rando = Math.floor(Math.random() * words.length)


/* Seems the main challenge in this assignment is how to generate a random word
A for loop would most likely be the best way of going about this.
after getting the random word, have to figure out a method to break the word down into letters.
*/
for (var i = 0; i < words.length; i++) {
  words[i]

let wordlength = words[i]
console.log(wordlength);
}

// Seems like another challenge is express sessions. Ive been  reading up on it, but
// not very comfortable with it right now.  Think it is integral in storing a user's
// "guessed letters "

// app.get('/', (request, response) =>{
//
//   response.render('homepage', {todoListForTheBrowser: taskList, completedTasksForTheBrowser: completedTasks})
//   // this is confusing, have to revisit
// })
// app.post('/markComplete', (request, response)=>{
//   console.log(request.body)
//   response.send('marking something complete')



// also going to need an if statement that prints out if the player wins/loses.
// Furthermore a count function that lets the player (user) know
// how many guesses they have left


app.listen(7777, ()=> {
    console.log('Feeling good on highway 7777')
})
