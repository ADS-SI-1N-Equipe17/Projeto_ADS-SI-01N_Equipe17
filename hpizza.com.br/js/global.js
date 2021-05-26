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
    localStorage.setItem(acesso, true)
    windows.location.href = "index.html";
  } else {
    alert("Usuário ou senha invalidos!")
  }
}
// API Geolocation
if ('geolocation' in navigator) {
  const watcher =  navigator.geolocation.watchPosition(function(position){
      console.log(position)
       }, function(error){
          console.log(error)
       }, { enableHighAccuracy: true, maximumAge: 100000, timeout: 1000000})
} else {
  alert("Navegador não suporta o geolocation!")
}

