import { Usuario } from "./Usuario.js";
const divMensagem = document.getElementById("divMensagem");
window.onload = () => {
    carregarTabela();
}; // window.onload
function carregarTabela() {
    const listaUsuario = Usuario.listar();
    const tabela = document.getElementById("tabelaUsuario");
    const tbody = tabela.querySelector("tbody");
    tbody.innerHTML = "";
    listaUsuario.forEach((usuario) => {
        let linha = tbody.insertRow();
        linha.insertCell().textContent = usuario.id;
        linha.insertCell().textContent = usuario.nome;
        linha.insertCell().textContent = usuario.email;
        linha.insertCell().textContent = usuario.telefone;
        // botão detalhes
        let btnDetalhes = document.createElement("button");
        btnDetalhes.textContent = "Detalhes";
        btnDetalhes.addEventListener("click", () => {
            window.location.href = `cadSimplificado.html?id=${usuario.id}`;
        }); // click detalhes
        linha.insertCell().appendChild(btnDetalhes);
        // botão excluir
        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => {
            if (confirm("Deseja realmente excluir o administrador " + usuario.nome + "?")) {
                Usuario.excluir(usuario.id);
                exebirMensagem("green", "Administrador excluído com sucesso!");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } // if
        }); // click excluir
        linha.insertCell().appendChild(btnExcluir);
    }); // forEach
} // função carregarTabela
function exebirMensagem(color, msg) {
    divMensagem.style.color = color;
    divMensagem.textContent = msg;
} // função
//# sourceMappingURL=listaUsuario.js.map