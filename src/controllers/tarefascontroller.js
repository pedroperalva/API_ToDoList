const TaskDAO = require('../DAO/TarefasDAO')

module.exports = (app, bd, Tarefa) => {

    let TaskBanco = new TaskDAO(bd)

    app.get('/tarefas', function (req, res) {
        TaskBanco.getAllTasks()
        .then((linhas)=>{
            res.json({
                result:linhas,
                count:linhas.length
            })
        })
        .catch((err)=>{
            res.json({err, message:'Erro ao acessar o banco de dados'})
        })      
    }) 

    app.get('/tarefas/:status', (req, res) => {
        const status = req.params.status
        TaskBanco.getTasksFromStatus(status)
        .then((linhas)=>{
            res.json({
                result:linhas,
                count:linhas.length
            })
        })
        .catch((err)=>{
            res.json({err, message:'Tarefas não encontradas'})
        })
    }) 


}