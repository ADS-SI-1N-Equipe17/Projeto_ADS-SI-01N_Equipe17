//Js Materialize
M.AutoInit();

//Compartilhar pagina no WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  var conteudo = encodeURIComponent(document.title + " " + window.location.href);
  document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);

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


let nome = document.getElementById("nome")
let labelNome = document.getElementById("labelNome")
let validNome = false

let senha = document.getElementById("senha")
let labelSenha = document.getElementById("labelSenha")
let validSenha = false

let confirmarSenha = document.querySelector('#confirmar-senha')
let labelConfirmarsenha = document.querySelector('#labelConfirmar-senha')
let validConfirmarsenha = false

//outros campos cadastrados

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
    alert(`Usuário cadastrado com sucesso!`)
    //criando o JSON após o cadastro para armazenar no localStorage
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

// Função para entrar
function entrar(){
  let usuario = document.querySelector('#emaillogin')
  let userLabel = document.querySelector('#emailloginLabel')
  
  let senha = document.querySelector('#senhalogin')
  let senhaLabel = document.querySelector('#senhaloginLabel')
  
  let listaUser = []
  
  let userValid = {
    nome: '',
    email: '',
    senha: ''
  }
  //chamar o JSON UsuariosCad
  listaUser = JSON.parse(localStorage.getItem('UsuariosCad'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.emailCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         email: item.emailCad,
         senha: item.senhaCad
       }
      
    }
  })

  //testa se o usuário está cadastrado no localStorage
  if(usuario.value == userValid.email && senha.value == userValid.senha){
    window.location.href = 'index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
    alert(`Bem vindo ${userValid.nome}`)
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
}
