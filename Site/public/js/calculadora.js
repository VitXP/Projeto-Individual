// Funções

var historicoSoma = []

var historicoMenos = []

var historicoMultiplicacao = []

var historicoDivisao = []

function somar() {

    resultado.innerHTML = ``
    var numero_um = Number(in_numero_um.value)
    var numero_dois = Number(in_numero_dois.value)
    var soma = numero_um + numero_dois



    if (numero_um > 100 || numero_dois > 100) {
        alert(`Digite um número de 0 - 100`)
    } else {
        historicoSoma.push(soma);
        console.log(`historico: ${soma}`)
        for (repetir = 1; repetir <= soma; repetir++) {
            var aleatorio = parseInt(1 + Math.random() * 2)

            if (aleatorio == 1) {
                resultado.innerHTML += `<img src="./Img/fox.png" alt="fox">`
            } else if (aleatorio == 2) {
                resultado.innerHTML += `<img src="./Img/fox-1.png" alt="fox">`
            }

        }

        if (historicoSoma.length < 3) {
            placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Resultado = ${historicoSoma[0]}</h3>
            <h3> 3º Resultado = Aguardando calculo
            </h3>
            <h3> Resultado Atual = ${historicoSoma[historicoSoma.length - 1]}
            </h3>`
        } else {
            placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Resultado = ${historicoSoma[0]}</h3>
            <h3> 3º Resultado = ${historicoSoma[2]}</h3>
            <h3> Resultado Atual = ${historicoSoma[historicoSoma.length - 1]}
            </h3>`
        }


    }
}

function subtrair() {

    resultado.innerHTML = ``
    var numero_um = Number(in_numero_um.value)
    var numero_dois = Number(in_numero_dois.value)
    var menos = numero_um - numero_dois



    if (numero_um > 100 || numero_dois > 100) {
        alert(`Digite um número de 0 - 100`)
    } else {
        historicoMenos.push(menos);
        console.log(`historico: ${menos}`)
        for (repetir = 1; repetir <= menos; repetir++) {
            var aleatorio = parseInt(1 + Math.random() * 2)

            if (aleatorio == 1) {
                resultado.innerHTML += `<img src="./Img/fox.png" alt="fox">`
            } else if (aleatorio == 2) {
                resultado.innerHTML += `<img src="./Img/fox-1.png" alt="fox">`
            }

        }

        if (historicoMenos.length < 3) {
            placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Resultado = ${historicoMenos[0]}</h3>
            <h3> 3º Resultado = Aguardando calculo
            </h3>
            <h3> Resultado Atual = ${historicoMenos[historicoMenos.length - 1]}
            </h3>`
        } else {
            placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Resultado = ${historicoMenos[0]}</h3>
            <h3> 3º Resultado = ${historicoMenos[2]}</h3>
            <h3> Resultado Atual = ${historicoMenos[historicoMenos.length - 1]}
            </h3>`
        }


    }
}

function vezes() {

    resultado.innerHTML = ``
    var numero_um = Number(in_numero_um.value)
    var numero_dois = Number(in_numero_dois.value)
    var multiplicar = numero_um * numero_dois



    if (numero_um > 100 || numero_dois > 100) {
        alert(`Digite um número de 0 - 100`)
    } else {
        historicoMultiplicacao.push(multiplicar);
        console.log(`historico: ${multiplicar}`)
        for (repetir = 1; repetir <= multiplicar; repetir++) {
            var aleatorio = parseInt(1 + Math.random() * 2)

            if (aleatorio == 1) {
                resultado.innerHTML += `<img src="./Img/fox.png" alt="fox">`
            } else if (aleatorio == 2) {
                resultado.innerHTML += `<img src="./Img/fox-1.png" alt="fox">`
            }

        }

        if (historicoMultiplicacao.length < 3) {
            placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Resultado = ${historicoMultiplicacao[0]}</h3>
            <h3> 3º Resultado = Aguardando calculo
            </h3>
            <h3> Resultado Atual = ${historicoMultiplicacao[historicoMultiplicacao.length - 1]}
            </h3>`
        } else {
            placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Resultado = ${historicoMultiplicacao[0]}</h3>
            <h3> 3º Resultado = ${historicoMultiplicacao[2]}</h3>
            <h3> Resultado Atual = ${historicoMultiplicacao[historicoMultiplicacao.length - 1]}
            </h3>`
        }


    }
}

function dividir() {
    resultado.innerHTML = ``
    var numero_um = Number(in_numero_um.value)
    var numero_dois = Number(in_numero_dois.value)
    var dividir = numero_um / numero_dois



    if (numero_um > 100 || numero_dois > 100) {
        alert(`Digite um número de 0 - 100`)
    } else {
        historicoDivisao.push(dividir);
        console.log(`historico: ${dividir}`)
        for (repetir = 1; repetir <= dividir; repetir++) {
            var aleatorio = parseInt(1 + Math.random() * 2)

            if (aleatorio == 1) {
                resultado.innerHTML += `<img src="./Img/fox.png" alt="fox">`
            } else if (aleatorio == 2) {
                resultado.innerHTML += `<img src="./Img/fox-1.png" alt="fox">`
            }

        }

        if (historicoDivisao.length < 3) {
            placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Resultado = ${historicoDivisao[0]}</h3>
            <h3> 3º Resultado = Aguardando calculo
            </h3>
            <h3> Resultado Atual = ${historicoDivisao[historicoDivisao.length - 1]}
            </h3>`
        } else {
            placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Resultado = ${historicoDivisao[0]}</h3>
            <h3> 3º Resultado = ${historicoDivisao[2]}</h3>
            <h3> Resultado Atual = ${historicoDivisao[historicoDivisao.length - 1]}
            </h3>`
        }


    }

}


// Exibir na tela

function soma() {
    mostrar_resultado.innerHTML = ` <div class="formulario-center">
    <div class="caixa-formulario-input">
        <div class="campo">
            <label for="lab_numero">Insira um número
                <input type="number" placeholder="Ex: 10" id="in_numero_um">
            </label>
        </div>
    </div>
    <h2>+</h2>
    <div class="caixa-formulario-input">
        <div class="campo">
            <label for="lab_numero">Insira um número
                <input type="number" placeholder="Ex: 7" id="in_numero_dois">
            </label>
        </div>
    </div>
    <div class="centralizar-botao">
        <BUtton onclick="somar()" class="calcular">SOMAR</BUtton>
    </div>
</div>
<div id="resultado" class="resultado"></div>
<div class="container-placar">
    <div class="centralizar-caixa">
        <div id="placar">
            <div class="texto">
                <h3>Histórico</h3>
            </div>
            <div class="placa">
                <div class="centralizar">
                    <h3>1º Resultado = Aguardando calculo</h3>
                    <h3> 3º Resultado = Aguardando calculo</h3>
                    <h3> Resultado Atual = Aguardando calculo
                    </h3>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
`
}

function menos() {
    mostrar_resultado.innerHTML = ` <div class="formulario-center">
    <div class="caixa-formulario-input">
        <div class="campo">
            <label for="lab_numero">Insira um número
                <input type="number" placeholder="Ex: 10" id="in_numero_um">
            </label>
        </div>
    </div>
    <h2>-</h2>
    <div class="caixa-formulario-input">
        <div class="campo">
            <label for="lab_numero">Insira um número
                <input type="number" placeholder="Ex: 7" id="in_numero_dois">
            </label>
        </div>
    </div>
    <div class="centralizar-botao">
        <BUtton onclick="subtrair()" class="calcular">SUBTRAIR</BUtton>
    </div>
</div>
<div id="resultado" class="resultado"></div>
<div class="container-placar">
    <div class="centralizar-caixa">
        <div id="placar">
            <div class="texto">
                <h3>Histórico</h3>
            </div>
            <div class="placa">
                <div class="centralizar">
                    <h3>1º Resultado = Aguardando calculo</h3>
                    <h3> 3º Resultado = Aguardando calculo</h3>
                    <h3> Resultado Atual = Aguardando calculo
                    </h3>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
`
}

function multiplicar() {
    mostrar_resultado.innerHTML = ` <div class="formulario-center">
    <div class="caixa-formulario-input">
        <div class="campo">
            <label for="lab_numero">Insira um número
                <input type="number" placeholder="Ex: 10" id="in_numero_um">
            </label>
        </div>
    </div>
    <h2> <img src="Img/multiplicacao.png" alt="dividir" width="35px" height="35px"></h2>
    <div class="caixa-formulario-input">
        <div class="campo">
            <label for="lab_numero">Insira um número
                <input type="number" placeholder="Ex: 7" id="in_numero_dois">
            </label>
        </div>
    </div>
    <div class="centralizar-botao">
        <BUtton onclick="vezes()" class="calcular">MULTIPLICAR</BUtton>
    </div>
</div>
<div id="resultado" class="resultado"></div>
<div class="container-placar">
    <div class="centralizar-caixa">
        <div id="placar">
            <div class="texto">
                <h3>Histórico</h3>
            </div>
            <div class="placa">
                <div class="centralizar">
                    <h3>1º Resultado = Aguardando calculo</h3>
                    <h3> 3º Resultado = Aguardando calculo</h3>
                    <h3> Resultado Atual = Aguardando calculo
                    </h3>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
`
}

function divisao() {
    mostrar_resultado.innerHTML = ` <div class="formulario-center">
    <div class="caixa-formulario-input">
        <div class="campo">
            <label for="lab_numero">Insira um número
                <input type="number" placeholder="Ex: 10" id="in_numero_um">
            </label>
        </div>
    </div>
    <h2> <img src="Img/dividir.png" alt="dividir" width="40px" height="40px"></h2>
    <div class="caixa-formulario-input">
        <div class="campo">
            <label for="lab_numero">Insira um número
                <input type="number" placeholder="Ex: 7" id="in_numero_dois">
            </label>
        </div>
    </div>
    <div class="centralizar-botao">
        <BUtton onclick="dividir()" class="calcular">DIVIDIR</BUtton>
    </div>
</div>
<div id="resultado" class="resultado"></div>
<div class="container-placar">
    <div class="centralizar-caixa">
        <div id="placar">
            <div class="texto">
                <h3>Histórico</h3>
            </div>
            <div class="placa">
                <div class="centralizar">
                    <h3>1º Resultado = Aguardando calculo</h3>
                    <h3> 3º Resultado = Aguardando calculo</h3>
                    <h3> Resultado Atual = Aguardando calculo
                    </h3>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
`
}

function borracha() {
    mostrar_resultado.innerHTML = ``

    historicoSoma.length = 0;
    historicoMenos.length = 0;
    historicoMultiplicacao.length = 0;
    historicoDivisao.length = 0;
}