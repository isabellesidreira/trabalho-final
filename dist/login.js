"use strict";
const formLogin = document.getElementById("formLogin");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const divMensagem = document.getElementById("divMensagem");
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = txtEmail.value;
    const senha = txtSenha.value;
    if (!email) {
        divMensagem.style.color = "red";
        divMensagem.textContent = "Preencha seu e-mail!";
        return;
    } // if
    if (!senha) {
        divMensagem.style.color = "red";
        divMensagem.textContent = "Preencha sua senha!";
        return;
    } // if
    if (email == "adm@gmail.com" && senha == "123456") {
        divMensagem.style.color = "green";
        divMensagem.textContent = "Login feito com sucesso";
        setTimeout(() => {
            window.location.href = "./administrador.html";
        }, 1000);
    } // if
    else {
        divMensagem.style.color = "red";
        divMensagem.textContent = "e-mail ou senha incorretos!";
    } // else                           
});
//# sourceMappingURL=login.js.map