const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const caminhoArq = path.resolve(__dirname,'../','../','database.db')
const bdados = new sqlite3.Database(caminhoArq);


//Processamento de sinal
process.on('SIGINT', () =>
    bdados.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bdados;