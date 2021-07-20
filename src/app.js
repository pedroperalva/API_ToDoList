const express = require('express')
const app = express()
const port = 3031

//import bd e Model Usuario e Tarefa
const bd = require('./infra/sqlite-db')
const Usuario = require('./models/usuariosmodel')
const Tarefa = require('./models/tarefasmodel')
//import controllers
const controllerUsuarios = require('../src/controllers/usuarioscontroller')
const controllerTarefas = require('../src/controllers/tarefascontroller')

//middleware
app.use(express.json())

//passando parâmetros para os controllers
controllerUsuarios(app, bd, Usuario)
controllerTarefas(app, bd, Tarefa)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


