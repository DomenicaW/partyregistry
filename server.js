const express = require('express')
const app = express()
const port = 3000


//middleware:
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//importing party object from models directory:
const party = require('./models/party.js')
console.log(party)

// app.get('/party', (req, res) => {
//   res.send(party)
// })


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


app.get('/party/:idOfPartyObject', (req, res) => {
  res.render('show.ejs', {
    // partyItems: party[req.params.idOfPartyObject]
    partyItem: party[req.params.idOfPartyObject]
  })
})

app.listen(port, () => {
  console.log('time to party 🥳')
})
