function confirmacaoNome() {
  email = document.getElementById("email").value;
  console.log(email);
  if (email == "") {
    alert("Digite um email valido. ");
  } else {
    alert("E-mail válido !");
    redirecionar();
  }
}

function redirecionar() {
  console.log("Redirecionando para a nova página...");
  window.location.href = "home_paciente.html";
}
