import { Link } from "react-router";

function Rodape(){
return(
<footer className="rodape">
    <p>
        Desenvolvido por: 
    </p>
    <Link to="/sobre">
    Isabelle Sidreira, Luiz Jefferson e Osvaldo Caldeira
    </Link>
</footer>
);
}

export default Rodape;