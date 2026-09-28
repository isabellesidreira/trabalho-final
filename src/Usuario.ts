export class Usuario {

public id: string;

constructor(
public nome: string,
public email: string,
public senha: string,
public telefone: string
){

this.id = crypto.randomUUID();

this.nome = nome;
this.email = email;
this.senha = senha;
this.telefone = telefone;

} // constructor


cadastrar(): void{

let listaUsuario: Usuario[];

listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");

listaUsuario.push(this);

localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));

} // cadastrar


static listar(): Usuario[] {

let listaUsuario: Usuario[];

listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");

return listaUsuario;

} // método listar


static buscarUsuario(id: string): Usuario | undefined {

let listaUsuario: Usuario[];

listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");

return listaUsuario.find((usuario: Usuario) => usuario.id == id);

} // método buscarUsuario


static excluir(id: string): void {

let listaUsuario: Usuario[];

listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");

listaUsuario = listaUsuario.filter((usuario: Usuario) => usuario.id != id);

localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));

} // método excluir


static alterar(usuarioAlterado: Usuario): void {

let listaUsuario: Usuario[];

listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");

listaUsuario = listaUsuario.map((usuario: Usuario) => {

if(usuario.id == usuarioAlterado.id){

return usuarioAlterado;

} // if

else{

return usuario;

} // else

}); // map

localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));

} // método alterar


} // class Usuario