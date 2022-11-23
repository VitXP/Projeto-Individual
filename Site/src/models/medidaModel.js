var database = require("../database/config");

function buscarUltimasMedidas(fkClasse) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select c.nomeClasse as 'Classe', count(*) as votos from usuario u join classe c on u.fkClasse = c.idClasse group by c.fkfuncao order by c.idclasse;
        `
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select c.nomeClasse as 'Classe', count(*) as votos from usuario u join classe c on u.fkClasse = c.idClasse group by c.fkfuncao order by c.idclasse;
        `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkClasse) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select c.nomeClasse as 'Classe', count(*) as votos from usuario u join classe c on u.fkClasse = c.idClasse group by c.fkfuncao order by c.idclasse;
        `
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select c.nomeClasse as 'Classe', count(*) as votos from usuario u join classe c on u.fkClasse = c.idClasse group by c.fkfuncao order by c.idclasse;
        `
        
        } 
        else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
