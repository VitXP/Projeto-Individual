
var historico = []


function somar() {
    resultado.innerHTML = ``
    var numero_um = Number(in_numero_um.value)
    var numero_dois = Number(in_numero_dois.value)
    var soma = numero_um + numero_dois

    historico.push(soma);
    console.log(`historico: ${soma}`)
    for (repetir = 1; repetir <= soma; repetir++) {
        var aleatorio = parseInt(1 + Math.random() * 2)

        if (aleatorio == 1) {
            resultado.innerHTML += `<img src="./Img/fox.png" alt="fox">`
        } else if (aleatorio == 2) {
            resultado.innerHTML += `<img src="./Img/fox-1.png" alt="fox">`
        }

    }

    if () {
        placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Soma = ${historico[0]}</h3>
            <h3> 3º Soma = Aguardando calculo
            </h3>
            <h3> Soma Atual = ${historico[historico.length - 1]}
            </h3>`
    } else {
        placar.innerHTML = `
            <div class="texto"><h3>Histórico</h3></div>
            <div class="placa">
            <div class="centralizar">
            <h3>1º Soma = ${historico[0]}</h3>
            <h3> 3º Soma = ${historico[2]}</h3>
            <h3> Soma Atual = ${historico[historico.length - 1]}
            </h3>`
    }


}


