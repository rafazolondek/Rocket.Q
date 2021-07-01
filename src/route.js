const express = require("express")
const QuestionController = require("./controllers/questionController")
const RoomController = require("./controllers/RoomController")

const route = express.Router()

route.get("/", (req, res) => res.render("index", {page: 'enter-room'}))
route.get("/create-pass", (req, res) => res.render("index", {page: 'create-pass'}))

route.get("/room/:room", RoomController.open)
route.post("/create-room", RoomController.create)

route.post('/question/create/:room', QuestionController.create)
//Formato que o formulário de dentro da modal tem que passar as informações
route.post("/question/:room/:question/:action", QuestionController.index)

module.exports = route