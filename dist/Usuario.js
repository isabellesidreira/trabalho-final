export class Usuario {
    constructor(nome, email, senha, telefone) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
    } // constructor
    cadastrar() {
        let listaUsuario;
        listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");
        listaUsuario.push(this);
        localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));
    } // cadastrar
    static listar() {
        let listaUsuario;
        listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");
        return listaUsuario;
    } // método listar
    static buscarUsuario(id) {
        let listaUsuario;
        listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");
        return listaUsuario.find((usuario) => usuario.id == id);
    } // método buscarUsuario
    static excluir(id) {
        let listaUsuario;
        listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");
        listaUsuario = listaUsuario.filter((usuario) => usuario.id != id);
        localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));
    } // método excluir
    static alterar(usuarioAlterado) {
        let listaUsuario;
        listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]");
        listaUsuario = listaUsuario.map((usuario) => {
            if (usuario.id == usuarioAlterado.id) {
                return usuarioAlterado;
            } // if
            else {
                return usuario;
            } // else
        }); // map
        localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario));
    } // método alterar
} // class Usuario
//# sourceMappingURL=Usuario.js.map