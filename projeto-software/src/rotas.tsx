
import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/home";
import { sobreOcurso } from "./pages/sobreOCurso";
import Modulos from "./pages/modolos";
import Docentes from "./pages/docentes";


const rotas = createBrowserRouter(
    [
        {
            path: "/",
            Component: App,
            children: [
                {
                    index: true,
                    Component: Home
                },
                {
                    path: "/sobreOCurso",
                    Component: sobreOcurso
                },
                {
                    path: "modulos",
                    Component: Modulos
                },
                {
path: "docentes",
Component: Docentes                
},
            ]
       }
    ]
);

export default rotas;
