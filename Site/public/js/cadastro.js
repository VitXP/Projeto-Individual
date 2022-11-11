function exibir() {
    var classe = caixa_classe.value

    if (classe == '0') {
        resultado_imagem.innerHTML = ``
    } else if (classe == '1') {
        res_ap_c.innerHTML = ``
        resultado_imagem.innerHTML = `<div><img src="./Img/SupportIcon.webp" alt="suporte"></div>`
    } else if (classe == '2') {
        res_ap_c.innerHTML = ``
        resultado_imagem.innerHTML = `<div><img src="./Img/OffenseIcon.png" alt="dano"></div>`
    } else {
        res_ap_c.innerHTML = ``
        resultado_imagem.innerHTML = `<div><img src="./Img/TankIcon.webp" alt="tanque"></div>`
    }

}


function cadastrar() {
    // aguardar();
    res_ap_a.innerHTML = ``
    res_ap_e.innerHTML = ``
    res_ap_s.innerHTML = ``
    res_ap_ss.innerHTML = ``
    res_ap_c.innerHTML = ``



    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = in_apelido.value;
    var emailVar = in_email.value;
    var senhaVar = in_senha.value;
    var confirmacaoSenhaVar = in_confirmar.value;
    var classeVar = Number(caixa_classe.value);
    var nulo = (nomeVar == "" && emailVar == "" && senhaVar == "" && confirmacaoSenhaVar == "" && classeVar == 0)
    var diferente = senhaVar != confirmacaoSenhaVar
    var senha_oito = senhaVar.length > 0 && senhaVar.length < 8
    var arroba = emailVar.indexOf('@') == -1 && emailVar.length > 0
    var bloquear = nulo || diferente || arroba || senha_oito || apelido_Conter || senha_conter
    var apelido_Conter = nomeVar.length > 10
    var senha_conter = senhaVar.length > 12


    if (nulo) {
        cardErro.style.display = "block"


        res_ap_a.innerHTML = `Digite seu apelido`
        res_ap_e.innerHTML = `Digite seu e-mail`
        res_ap_s.innerHTML = `Digite a sua senha`
        res_ap_ss.innerHTML = `Digite a confirmação da senha`
        res_ap_c.innerHTML = `Escolha a sua classe favorita`

        finalizarAguardar();
        return false;
    }


    if (nomeVar == "") {
        cardErro.style.display = "block"
        res_ap_a.innerHTML = `Digite seu apelido`
    }

    if (apelido_Conter) {
        cardErro.style.display = "block"
        res_ap_a.innerHTML = `Seu apelido deve conter até 10 caracteres`
    }

    if (emailVar == "") {
        cardErro.style.display = "block"
        res_ap_e.innerHTML = `Digite seu e-mail`
        finalizarAguardar();
    }

    if (arroba) {
        cardErro.style.display = "block"
        res_ap_e.innerHTML = `Seu e-mail deve conter @`
        finalizarAguardar();
    }

    if (senhaVar == "") {
        cardErro.style.display = "block"
        res_ap_s.innerHTML = `Digite a sua senha`
        finalizarAguardar();
    }

    if (senha_oito || senha_conter) {
        cardErro.style.display = "block"
        res_ap_s.innerHTML = `Sua senha deve conter entre 8 a 12 caracteres`
        finalizarAguardar();
    }

    if (confirmacaoSenhaVar == "") {
        cardErro.style.display = "block"
        res_ap_ss.innerHTML = `Digite a confirmação da senha`
        finalizarAguardar();
    }



    if (diferente) {
        cardErro.style.display = "block"
        res_ap_ss.innerHTML = `As senhas não são iguais. Tente novamente.`
        finalizarAguardar();
    }

    if (classeVar == 0) {
        cardErro.style.display = "block"
        res_ap_c.innerHTML = `Escolha a sua classe favorita`
        finalizarAguardar();
    }

    if (bloquear) {
        cardErro.style.display = "block"
        finalizarAguardar();
        return false;

    }



    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            classeServer: classeVar

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";

            mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")

            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}

