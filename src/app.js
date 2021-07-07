const express = require('express')
const app = express()
const port = 3031
const controllerUsuarios = require('./controllers/usuarios')
const controllerTarefas = require('./controllers/tarefas')

controllerUsuarios(app)
controllerTarefas(app)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


