function entrar() {
    aguardar();


    var emailVar = in_email.value;
    var senhaVar = in_senha.value;
    var nulo = emailVar == "" || senhaVar == ""
    res_ap_s.innerHTML = ``
    res_ap_e.innerHTML = ``
    div_erros_login.innerHTML = ``


    if (emailVar == ``) {
        res_ap_e.innerHTML = `Digite seu e-mail`
        finalizarAguardar();
    }

    if (senhaVar == ``) {
        res_ap_s.innerHTML = `Digite a sua senha`
        finalizarAguardar();
        return false;
    } else {
        setInterval(sumirMensagem, 5000)
    }



    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    window.location = "./herois.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}