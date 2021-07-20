class TaskDAO{
    constructor(bd){
        this.bd = bd
    }

    getAllTasks(){

        return new Promise((resolve, reject)=>{

            this.bd.all('select * from tarefas', (err, rows)=>{
      
                if(err){
                   reject(err)
                }
                else{
                   resolve(rows)
                }
        
            })
        })
    }

    getTasksFromStatus(status){
        return new Promise((resolve, reject)=>{

            this.bd.all('select * from tarefas where status = ?', status, (err, rows)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            })
        })
    }
}

module.exports = TaskDAO