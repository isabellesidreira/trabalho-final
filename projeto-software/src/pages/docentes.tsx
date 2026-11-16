
function Docentes() {
    return (
        <>
            <header>
                <h1 className="destaque">
                    Corpo Docente
                </h1>
            </header>
            <main className="conteudoprincipal">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Foto</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Titulação</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src="/imagens/Joyce.jpeg"
                                    alt="Foto de uma mulher negra sorrindo, cabelos cacheados castanhos presos no alto, usando uma jaqueta cinza escura. Ela está ao ar livre diante de uma paisagem montanhosa, com formações rochosas, vegetação e céu azul ao fundo."
                                    width="40%"
                                    height="40%"
                                />
                            </td>
                            <td>Joyce Miranda do Santos</td>
                            <td>
                                Doutorado em Informática, Mestrado em Informática,
                                Especialização em Software para Web, Graduação em
                                Sistemas de Informação, Graduação em Tecnologia em
                                Desenvolvimento de Software.
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img
                                    src="/imagens/Guidson.jpeg"
                                    alt="Homem branco, sorrindo, com cabelo curto escuro e barba bem aparada, usando uma camisa social azul clara. Ele está de frente para a câmera, em um fundo em tom de cinza claro."
                                    width="40%"
                                    height="40%"
                                />
                            </td>
                            <td>Guidson Coelho de Andrade</td>
                            <td>
                                Mestrado em Ciência da Computação, Especialização em
                                Liderança e Gestão Escolar, Graduação em Licenciatura
                                em Computação, Graduação em Bacharelado em Sistemas
                                de Informação.
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img
                                    src="/imagens/Anderson.jpeg"
                                    alt="Fotografia de Anderson Vallejo."
                                    width="40%"
                                    height="40%"
                                />
                            </td>
                            <td>Anderson Vallejo</td>
                            <td>
                                Mestrado em Educação, Especialização em Engenharia
                                de Sistemas de Computação, Graduação em Tecnologia
                                em Processamento de Dados.
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img
                                    src="/imagens/Edilson.jpeg"
                                    alt="Homem de pele parda, cabelo curto, usando camisa polo verde escura, de frente para a câmera, com expressão neutra e em fundo claro."
                                    width="40%"
                                    height="40%"
                                />
                            </td>
                            <td>Edilson da Silva</td>
                            <td>
                                Mestrado em Telecomunicações, Especialização em
                                Análise de Sistemas, com ênfase em Gerência de
                                Projetos, e Tecnólogo em Processamento de Dados.
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img
                                    src="/imagens/Daniel.jpeg"
                                    alt="Fotografia de um homem adulto, de pele clara, usando óculos de armação escura, cabelos curtos e ralos, camisa social rosa-clara e paletó preto. Ele está sorrindo discretamente e olhando em direção à câmera. Ao fundo, há uma parede de pedras em tons de bege e marrom."
                                    width="40%"
                                    height="40%"
                                />
                            </td>
                            <td>Daniel Ribeiro Pires</td>
                            <td>
                                Mestrado em Computação, Graduação em Licenciatura
                                em Informática, Graduação em Ciência da Computação.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <a href="/" target="_self">
                    Voltar
                </a>

            </main>
        </>
    );
}

export default Docentes;
