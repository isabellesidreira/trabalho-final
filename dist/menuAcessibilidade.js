export const carregarMenuAcessibilidade = async () => {
    const menuAcessibilidade = document.getElementById("divMenuAcessibilidade");
    const conteudo = await fetch("menuAcessibilidade.html");
    const html = await conteudo.text();
    menuAcessibilidade.innerHTML = html;
    const btnAcessibilidade = document.getElementById("btnAcessibilidade");
    btnAcessibilidade.addEventListener("click", () => {
        const menuAcessibilidade = document.getElementById("menuAcessibilidade");
        menuAcessibilidade.hidden = !menuAcessibilidade.hidden;
        btnAcessibilidade.setAttribute("aria-expanded", String(!menuAcessibilidade.hidden));
    });
    const btnAumentarFonte = document.getElementById("btnAumentarFonte");
    btnAumentarFonte.addEventListener("click", () => {
        let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    });
    const btnDiminuirFonte = document.getElementById("btnDiminuirFonte");
    btnDiminuirFonte.addEventListener("click", () => {
        let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    });
    const btnAlterarContraste = document.getElementById("btnAlterarContraste");
    btnAlterarContraste.addEventListener("click", () => {
        document.body.classList.toggle("contraste");
    });
};
carregarMenuAcessibilidade();
//# sourceMappingURL=menuAcessibilidade.js.map