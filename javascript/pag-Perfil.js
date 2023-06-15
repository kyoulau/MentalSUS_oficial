function numeroTelefone(){
    email= document.getElementById("emeil").value;
    telefone=document.getElementById("tel"). value;

  if (email == "") {
    alert("Digite as informações a serem salvas");
  } else {
    console.log("E-mail salvo ="+ email);
    console.log("Telefone salvo ="+ telefone)
  }
}