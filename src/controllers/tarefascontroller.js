
const getTarefas = (app, bd) =>{
    app.get('/tarefas', (req, res) => {
        res.send(bd.tasks)
    })
}

const postTarefas = app =>{   
    app.post('/tarefas', (req, res) => {
        res.send('Rota POST de tarefas ativada: tarefas adicionado ao banco de dados')
    })   
}

const newTask = (app, bd, Tarefa) => {
    app.post('/tarefas/new', (req, res) => {
        const createTask = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.datadecriacao)
        bd.tasks.push(createTask)
        res.send('Tarefa Criada')
    })
}

module.exports = {
    getTarefas:getTarefas,
    postTarefas:postTarefas,
    newTask:newTask
}