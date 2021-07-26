const express = require('express')
const app = express()
const cors = require('cors')

//import bd e Model Usuario e Tarefa
const bd = require('./infra/sqlite-db')
const Usuario = require('./models/usuariosmodel')
const Tarefa = require('./models/tarefasmodel')
//import controllers
const controllerUsuarios = require('../src/controllers/usuarioscontroller')
const controllerTarefas = require('../src/controllers/tarefascontroller')

//middleware
app.use(express.json())
app.use(cors())

//passando parâmetros para os controllers
controllerUsuarios(app, bd, Usuario)
controllerTarefas(app, bd, Tarefa)

module.exports = app