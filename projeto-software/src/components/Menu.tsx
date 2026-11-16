
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

function Menu() {
    const { realizarLogout } = useLogin();

    return (
        <nav className="menu">
            <Link to="/" className="botao-menu">Home</Link>
            <Link to="/contato" className="botao-menu">Contato</Link>
                        <Link to="/sobreOCurso" className="botao-menu">Sobre o Curso</Link>
            <Link to="/docentes" className="botao-menu">Corpo Docente</Link>
            <Link to="/modulos" className="botao-menu">Módulos e Disciplinas</Link>
            <Link to="/turmasAnteriores" className="botao-menu">Turmas anteriores</Link>
            <Link to="/login" className="botao-menu">Login</Link>
            <Link to="/login" className="botao-menu" onClick={realizarLogout}>Sair</Link>
        </nav>
    );
}

export default Menu;
