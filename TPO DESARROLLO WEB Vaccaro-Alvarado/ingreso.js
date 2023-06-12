var ingreso = document.querySelector("#ingreso");
ingreso.addEventListener("click", function(event) {
  if (document.querySelector("#coordinador").checked){
    window.location.href = "COORDINADOR.html";
  }
  else {
    window.location.href = "ENCUESTAS.html";
  }
});