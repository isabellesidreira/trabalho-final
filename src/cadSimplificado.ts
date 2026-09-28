import { Usuario } from "./Usuario.js";

const formCadSimplificado = document.getElementById("formCadSimplificado") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtTelefone = document.getElementById("txtTelefone") as HTMLInputElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const txtConfirmaSenha = document.getElementById("txtConfirmaSenha") as HTMLInputElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;
const btnEnviar = document.getElementById("btnEnviar") as HTMLInputElement;

let parametro = new URLSearchParams(window.location.search);

let id = parametro.get("id");

window.onload = () => {

if(id){

carregarDadosUsuario(id);

btnEnviar.textContent = "Alterar";

} // if

} // arrow function


formCadSimplificado.addEventListener("submit", (event) => {

event.preventDefault();

if(validarSenha()){

if(!id){

const usuario = new Usuario(
txtNome.value,
txtEmail.value,
txtSenha.value,
txtTelefone.value
);

usuario.cadastrar();

formCadSimplificado.reset();

exebirMensagem("green", "Cadastro efetuado com sucesso.");

} // if

else{

let usuarioAlterado = new Usuario(
txtNome.value,
txtEmail.value,
txtSenha.value,
txtTelefone.value
);

usuarioAlterado.id = id;

Usuario.alterar(usuarioAlterado);

exebirMensagem("green", "Alteração realizada com sucesso!");

} // else


setTimeout(() => {

window.location.reload();

}, 2000);

} // if validarSenha

}); // submit


function validarSenha(){

const senha = txtSenha.value;

const confiSenha = txtConfirmaSenha.value;

if(senha != confiSenha){

exebirMensagem("red", "As senhas são diferentes, digite senhas iguais.");

return false;

} // if


if(senha.length < 6){

exebirMensagem("red", "A senha deve ter 6 ou mais caracteres.");

return false;

} // if


return true;

} // função


function exebirMensagem(color: string, msg: string){

divMensagem.style.color = color;

divMensagem.textContent = msg;

} // função


function carregarDadosUsuario(id: string): void {

let usuario = Usuario.buscarUsuario(id);

if(usuario){

txtNome.value = usuario.nome;
txtEmail.value = usuario.email;
txtTelefone.value = usuario.telefone;
txtSenha.value = usuario.senha;
txtConfirmaSenha.value = usuario.senha;

} // if

} // função carregarDadosUsuario