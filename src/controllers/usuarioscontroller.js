const UserDAO = require('../DAO/UsuariosDAO')

module.exports = (app, bd, Usuario) => {

    let userBanco = new UserDAO(bd)

    app.get('/usuarios', function (req, res) {
        userBanco.getAllUsers()
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


    app.post('/usuarios', (req, res) => {
        const {nome, email, senha} = req.body
        const createUser = new Usuario(nome, email, senha)
        userBanco.insertUsers(createUser)
        .then(()=>{
            res.json({message:'Usuario criado com sucesso'})
        })
        .catch((err)=>{
            res.json({err, message:'Erro ao criar Usuario'})
        })
    })


    app.get('/usuarios/:email', (req, res) => {
        const email = req.params.email
        userBanco.getUsersFromMail(email)
        .then((linhas)=>{
            res.json({
                result:linhas,
                count:linhas.length
            })
        })
        .catch((err)=>{
            res.json({err, message:'Usuario não encontrado'})
        })
    }) 



    app.delete('/usuarios/:email', (req, res) => {
        const email = req.params.email
        userBanco.deleteUsersFromMail(email)
        .then(()=>{
            res.json({message:'Usuario deletado com sucesso'})
        })
        .catch((err)=>{
            res.json({err, message:'Erro ao tentar deletar Usuario'})
        })
    })

    app.put('/usuarios/:email', (req, res)=>{

        const emailParam = req.params.email
        const body = req.body
        userBanco.updateUsersFromMail(emailParam, body)
        .then(()=>{
            res.json({message:'Usuario modificado com sucesso'})
        })
        .catch((err)=>{
            res.json({err, message:'Erro ao tentar modificar Usuario'})
        })  
    })

}
