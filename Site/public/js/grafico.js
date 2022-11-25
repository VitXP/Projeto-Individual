
let proximaAtualizacao;

window.onload = obterDadosGrafico();


function alterarTitulo(fkClasse) {
    var tituloclasse = document.getElementById("tituloclasse")
}

// O gráfico é construído com três funções:
// 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gráfico da primeira vez
// 2. plotarGrafico -> Monta o gráfico com os dados trazidos e exibe em tela
// 3. atualizarGrafico -> Atualiza o gráfico, trazendo novamente dados do Banco

// Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
// para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
// A função *obterDadosGrafico* também invoca a função *plotarGrafico*

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function obterDadosGrafico(fkClasse) {
    alterarTitulo(fkClasse)

    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimas/${fkClasse}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, fkClasse);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    // setup 
    const dados = {
        labels: ['TANQUE', 'DANO', 'SUPORTE'],
        datasets: [{
            label: 'Votos',
            data: [],
            backgroundColor: [
                'rgba(58, 204, 186, 3)',

                'rgba(67, 108, 106, 3)',

                'rgba(35, 67, 51, 3)',

            ],
            borderColor: [
                'rgba(58, 204, 186, 1)',
                'rgba(67, 108, 106, 1)',
                'rgba(35, 67, 51, 1)',

            ],


            borderWidth: 1
        }]


    };


    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.classe);
        dados.datasets[0].data.push(registro.votos);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    // config 
    const config = {
        type: 'bar',
        data: dados,
        options: {

            scales: {
                y: {
                    beginAtZero: true
                }
            }

        }
    };

    // Adicionando gráfico criado em div na tela
    // render init block
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}

