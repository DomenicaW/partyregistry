require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3001


//importing method override

const methodOverride = require('method-override')
const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://admin:1105@cluster0.9fovyam.mongodb.net/domenica-database?retryWrites=true&w=majority'
const db = mongoose.connection

mongoose.connect(mongoURI, () =>{
  console.log('im connected :)')
})






mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('mongodb connected')
})

.catch((err) => console.log(err))

//middleware:
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//static
app.use(express.static('public'))
//use method override
app.use(methodOverride('_method'))

//importing party object from models directory:
const party = require('./models/party.js')
// console.log(party)

// app.get('/party', (req, res) => {
//   res.send(party)
// })

app.get('/', (req, res) => {
  res.redirect('/party')
})
//adding fluff


app.get('/party', (req, res) => {
  res.render('index.ejs', {
    partyItems: party
  })
})

//CREATE/ POST
app.post('/party', (req,res) => {
  console.log(req.body)
  party.push(req.body)
  res.redirect('/party')
})

app.get('/party/new' , (req,res) => {
  res.render('new.ejs')
})

//delete route
app.delete('/party/:idOfPartyObject' , (req,res) => {
  party.splice(req.params.idOfPartyObject, 1)
  res.redirect('/party')
})
//edit route
app.get('/party/:idOfPartyObject/edit' , (req, res) => {
  res.render(
    'edit.ejs' , {
      partyItems: party[req.params.idOfPartyObject],
      idOfPartyObject: req.params.idOfPartyObject
    }
  )
})
app.put('/party/:idOfPartyObject' , (req,res) => {
  partyItems: party[req.params.idOfPartyObject] = req.body
  res.redirect('/party');
})

app.get('/party/:idOfPartyObject', (req, res) => {
  res.render('show.ejs', {
    // partyItems: party[req.params.idOfPartyObject]
    partyItem: party[req.params.idOfPartyObject]
  })
})

app.listen(port, () => {
  console.log('time to party 🥳')
})
