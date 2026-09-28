export declare class Usuario {
    nome: string;
    email: string;
    senha: string;
    id: string;
    constructor(nome: string, email: string, senha: string);
    cadastrar(): void;
    static listar(): Usuario[];
    static excluir(id: string): void;
    static alterar(usuarioAlterado: Usuario): void;
}
//# sourceMappingURL=Usuario.d.ts.map