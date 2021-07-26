const UserDAO = require('../DAO/UsuariosDAO')

module.exports = (app, bd, Usuario) => {

    let userBanco = new UserDAO(bd)

    app.get('/usuarios', async function (req, res) {      
        try{
            let resposta = await userBanco.getAllUsers()
            res.json({
                resultado:resposta,
                message:"Usuarios encontrados com sucesso"
            })
        }
        catch(err){
            res.json({
                erro:err, 
                message:'Erro ao acessar o banco de dados'
            })
        }
    })


    app.post('/usuarios', async (req, res) => {
        const {nome, email, senha} = req.body
        const createUser = new Usuario(nome, email, senha)
        try{
            let resposta = await userBanco.insertUsers(createUser)
            res.json({
                resultado:resposta,
                message:"Usuario criado com sucesso"
            })
        }
        catch(err){
            res.json({
                erro:err, 
                message:'Erro ao criar o usuário'
            })
        }
    })


    app.get('/usuarios/:email', async (req, res) => {
        const email = req.params.email
        try{
            let resposta = await userBanco.getUsersFromMail(email)
            res.json({
                resultado:resposta,
                message:"Usuario encontrado com sucesso"
            })
        }
        catch(err){
            res.json({
                erro:err, 
                message:'Erro ao acessar o banco de dados'
            })
        }
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
