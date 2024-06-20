let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');

let nomeValido = false;
let emailValido = false;
let assuntoValido = false;

let mapa = document.querySelector('#mapa')

nome.style.width = '100%';
email.style.width = '100%';


function validarNome() {
    let alerta = document.querySelector('.alertaNome');
    if (nome.value.length < 3) {
        alerta.innerHTML = "Digite um nome válido."
        nome.style.backgroundColor = 'gray';
    } else {
        alerta.innerHTML = '';
        nome.style.backgroundColor = '';
        nomeValido = true;
    }
}

function validarEmail() {
    let alerta = document.querySelector('.alertaEmail');
    if ((email.value.indexOf('@') == -1) || (email.value.indexOf('.com') == -1)) {
        alerta.innerHTML = "Digite um e-mail válido."
        email.style.backgroundColor = 'gray';
    } else {
        alerta.innerHTML = '';
        email.style.backgroundColor = '';
        emailValido = true;
    }
}

function validarAssunto() {
    let alerta = document.querySelector('.alertaAssunto');
    if (assunto.value.length > 240) {
        alerta.innerHTML = "O texto é muito grande, por favor digite no máximo 100 caracteres."
        assunto.style.backgroundColor = 'gray';
    } else {
        alerta.innerHTML = '';
        assunto.style.backgroundColor = '';
        assuntoValido = true;
    }
}

function enviar() {
    if (nomeValido && emailValido && assuntoValido) {
        alert("Mensagem enviada, obrigada!");
    } else {
        alert("Preencha os campos corretamente antes de enviar.");
    }
}

function mapaZoom(){
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal(){
    mapa.style.width = '';
    mapa.style.height = '';
}


