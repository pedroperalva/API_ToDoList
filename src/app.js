const express = require('express')

const app = express()
const port = 3031

//import controllers
const {getUsuarios,postUsuarios,newUser} = require('./controllers/usuarioscontroller')
const {getTarefas,postTarefas,newTask} = require('./controllers/tarefascontroller')
//import models
const Usuario = require('./models/usuariosmodel')
const Tarefa = require('./models/tarefasmodel')
const bd = require('./infra/bd')


app.use(express.json())

getUsuarios(app, bd)
postUsuarios(app)
getTarefas(app, bd)
postTarefas(app)
newUser(app, bd, Usuario)
newTask(app, bd, Tarefa)

console.log(new Usuario('Pedro', 'pedro@gmail.com', '1234'))
console.log(new Tarefa('Estudar', 'pomodoro', 'ativo', '12/12/2020'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


