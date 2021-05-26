//Js Materialize
M.AutoInit();

//Compartilhar pagina no WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  var conteudo = encodeURIComponent(document.title + " " + window.location.href);
  document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);


//função logar
function logar() {
  var email = document.getElementById("email-login")
  var senha = document.getElementById("senha-login")

  if (email.value == "admin@admin.com" && senha.value == "admin") {
    alert("deu certo")
  } else {
    alert("Usuário ou senha invalidos!")
  }
}
//API Geolocation
if ('geolocation' in navigator) {
  const watcher = navigator.geolocation.watchPosition(function (position) {
    console.log(position)
  }, function (error) {
    console.log(error)
  }, { enableHighAccuracy: true, maximumAge: 100000, timeout: 1000000 })
} else {
  alert("Navegador não suporta o geolocation!")
}

//Validação de cadastro


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#confirmar-senha')
let labelConfirmarsenha = document.querySelector('#labelConfirmar-senha')
let validConfirmarsenha = false

//variaveis dos campos cadastrados

let email = document.getElementById("email")

let cpf = document.getElementById("cpf")

let tel = document.getElementById("tel")

let nasc = document.getElementById("nasc")

//validando campos

nome.addEventListener('keyup', () => {

  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false

  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('Style', 'border-color: green')
    validNome = true
  }
})

senha.addEventListener('keyup', () => {

  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false

  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('Style', 'border-color: green')
    validSenha = true
  }
})

confirmarSenha.addEventListener('keyup', () => {

  if (senha.value != confirmarSenha.value) {
    labelConfirmarsenha.setAttribute('style', 'color: red')
    labelConfirmarsenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmarSenha.setAttribute('style', 'border-color: red')
    validConfirmarsenha = false

  } else {
    labelConfirmarsenha.setAttribute('style', 'color: green')
    labelConfirmarsenha.innerHTML = 'Senha'
    confirmarSenha.setAttribute('Style', 'border-color: green')
    validConfirmarsenha = true
  }
})

//função cadastrar
function cadastrar() {

  //validar cadastro
  if (validNome && validSenha && validConfirmarsenha) {
    alert(`Seja bem vindo ${nome.value} !`)
    //criando o JSON após o cadastro
    let UsuariosCad = JSON.parse(localStorage.getItem('UsuariosCad') || '[]')

    UsuariosCad.push(
      {
        nomeCad: nome.value,
        cpfCad: cpf.value,
        emailCad: email.value,
        senhaCad: senha.value,
        confirmarsenhaCad: confirmarSenha.value,
        telCad: tel.value,
        nascCad: nasc.value


      }
    )
    localStorage.setItem('UsuariosCad', JSON.stringify(UsuariosCad))
  } else {
    alert('Preencha os campos para prosseguir com o cadastro.')
  }

}