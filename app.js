const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const informaion = {}

app.get('/information', (req, res, next) => {
  res.render('information', {pageTitle: 'Information Page', info: informaion})
})

app.post('/information', (req, res, next) => {
  informaion.name = req.body.name
  informaion.email = req.body.email
  informaion.phone = req.body.phone
  res.redirect('/information')
})

app.get('/', (req, res, next) => {
  res.render('form', {pageTitle: 'Form Page'})
})

app.listen('8080', () => {
  console.log('Server is running on port 8080')
})