class UserDAO{
    constructor(bd){
        this.bd = bd
    }

    getAllUsers(){

        return new Promise((resolve, reject)=>{

            this.bd.all('select * from usuarios', (err, rows)=>{
      
                if(err){
                   reject(err)
                }
                else{
                   resolve(rows)
                }
        
            })
        })
    }

    insertUsers(createUser){
        return new Promise((resolve, reject)=>{

            this.bd.run('insert into usuarios (nome, email, senha) values (?,?,?)', createUser.nome, createUser.email, createUser.senha, (err)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }}
            
            )
        })
        
    }

    getUsersFromMail(email){
        return new Promise((resolve, reject)=>{

            this.bd.all('select * from usuarios where email = (?)', email, (err, rows)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            })
        })
    }

    deleteUsersFromMail(email){
        return new Promise((resolve, reject)=>{

            this.bd.all('delete from usuarios where email = (?)', email, (err)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            })
        })
    }

    updateUsersFromMail(emailParam, body){
        return new Promise((resolve, reject)=>{

            this.bd.all('update usuarios set nome = ?,email = ?,senha = ? where email = ?', body.nome, body.email, body.senha, emailParam, (err)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            })
        })
    }
}


module.exports = UserDAO