class Tarefas {
    constructor(titulo,descricao,status,userId){
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.datadecriacao = Date.now();
        this.criador = userId;
    }
}

module.exports = Tarefas