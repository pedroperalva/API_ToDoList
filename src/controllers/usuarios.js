module.exports = app =>{
    app.get('/usuarios', (req, res) => {
        res.send('Rota ativada com GET e recurso usuarios: valores de usuarios devem ser retornados')
    }) 
    
    app.post('/usuarios', (req, res) => {
        res.send('Rota POST de usuarios ativada: usuarios adicionado ao banco de dados')
    })   
}
