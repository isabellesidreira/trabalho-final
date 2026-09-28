const formLogin = document.getElementById("formLogin") as HTMLFormElement;

const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;

const txtSenha=  document.getElementById("txtSenha")as HTMLInputElement;

const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

formLogin.addEventListener("submit", (event) => {
event.preventDefault();

const email = txtEmail.value;

const senha = txtSenha.value;

if(!email){
    divMensagem.style.color="red";
    divMensagem.textContent="Preencha seu e-mail!";
    return;
} // if
  if(!senha){
    divMensagem.style.color="red";
divMensagem.textContent="Preencha sua senha!"    
return;
} // if

if(email == "adm@gmail.com" && senha == "123456" ){
divMensagem.style.color="green"
divMensagem.textContent="Login feito com sucesso"
setTimeout(() => {
    window.location.href = "./administrador.html";
}, 1000);
} // if
else{
divMensagem.style.color="red"
divMensagem.textContent="e-mail ou senha incorretos!"
} // else                           
})