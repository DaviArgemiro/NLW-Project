const express = require('express')
const route = require('./route')
const path = require('path')

const serve = express()

serve.set('view engine', 'ejs')

serve.use(express.static('public'))

serve.set('views', path.join(__dirname, 'views'))

serve.use(express.urlencoded({extended: true}))

serve.use(route)

serve.listen(3000, () => console.log("RODANDO"))