const express = require('express')
const route = require('./route')
const path = require('path')

const server = express() //() inicia o express

server.set('view engine','ejs')

server.use(express.static("public"))

//__dirname é uma variável global
server.set('views', path.join(__dirname, 'views')) //.../rocketq/src/views

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))

