var idTask = 0;

class Tarefas {
    constructor(titulo,descricao,status,datadecriacao){
        this.id = idTask++;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.datadecriacao = datadecriacao;
    }
}

module.exports = Tarefas