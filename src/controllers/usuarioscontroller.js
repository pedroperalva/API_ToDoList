
const getUsuarios = (app, bd) =>{
    app.get('/usuarios', (req, res) => {
        res.send(bd.users)
    }) 
}
const postUsuarios = app =>{   
    app.post('/usuarios', (req, res) => {
        res.send('Rota POST de usuarios ativada: usuarios adicionado ao banco de dados')
    })   
}

const newUser = (app, bd, Usuario) => {
    app.post('/usuarios/new', (req, res) => {
        const createUser = new Usuario(req.body.nome, req.body.email, req.body.senha)
        bd.users.push(createUser)
        res.send('Usuario Criado')
    })
}

module.exports = {
    getUsuarios:getUsuarios,
    postUsuarios:postUsuarios,
    newUser:newUser
}