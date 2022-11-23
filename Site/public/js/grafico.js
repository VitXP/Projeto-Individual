 
    let proximaAtualizacao;
        
    window.onload = obterDadosGrafico(1);


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
                    'rgba(54, 162, 235, 0.2)',

                    'rgba(255, 26, 104, 0.2)',

                    'rgba(255, 206, 86, 0.2)',

                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 26, 104, 1)',
                    'rgba(255, 206, 86, 1)',

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

        // setTimeout(() => atualizarGrafico(fkClasse, dados, myChart), 2000);
    }


    // Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
    // buscando a última medida inserida em tabela contendo as capturas, 

    //     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
    //     Para ajustar o "select", ajuste o comando sql em src/models
    // function atualizarGrafico(fkClasse, dados, myChart) {

    //     fetch(`/medidas/tempo-real/${fkClasse}`, { cache: 'no-store' }).then(function (response) {
    //         if (response.ok) {
    //             response.json().then(function (novoRegistro) {

    //                 console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
    //                 console.log(`Dados atuais do gráfico:`);
    //                 console.log(dados);


    //                 if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
    //                     console.log("---------------------------------------------------------------")
    //                     console.log("Como não há dados novos para captura, o gráfico não atualizará.")
    //                     document.getElementById("avisoCaptura").innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará."
    //                     console.log("Horário do novo dado capturado:")
    //                     console.log(novoRegistro[0].momento_grafico)
    //                     console.log("Horário do último dado capturado:")
    //                     console.log(dados.labels[dados.labels.length - 1])
    //                     console.log("---------------------------------------------------------------")
    //                 } else {
    //                     // tirando e colocando valores no gráfico
    //                     dados.labels.shift(); // apagar o primeiro
    //                     dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

    //                     dados.datasets[0].data.shift();  // apagar o primeiro de umidade
    //                     dados.datasets[0].data.push(novoRegistro[0].VOTOS); // incluir uma nova medida de umidade

    //                     myChart.update();
    //                 }

                //     // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                //     proximaAtualizacao = setTimeout(() => atualizarGrafico(fkClasse, dados, myChart), 2000);
                // });
            // } else {
            //     console.error('Nenhum dado encontrado ou erro na API');
            //     // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            //     proximaAtualizacao = setTimeout(() => atualizarGrafico(fkClasse, dados, myChart), 2000);
            // }
    // //   })
    //         .catch(function (error) {
    //             console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    //         });

    // }


