const request = require('supertest')
const User = require('../models/usuariosmodel')
const app = require('../testeapp')

describe('Testando rotas de usuarios',()=>{
    it('POST /usuarios certo',async ()=>{
        const response = await request(app)
        .post('/usuarios')
        .send({
            nome:'Emily',
            email:"email@email.com",
            senha:"*****"
        })
        expect(response.body.error).toBe(false)
    })
})