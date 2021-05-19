//Js Materialize
M.AutoInit();

//Compartilhar pagina no WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  var conteudo = encodeURIComponent(document.title + " " + window.location.href);
  document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);