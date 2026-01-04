import { Link } from "react-router-dom";
import Slider from "react-slick";
import PropTypes from "prop-types";
import appMarketplaceNFT1 from "../images/projects/appMarketplaceNFT/img1.png";
import appMarketplaceNFT2 from "../images/projects/appMarketplaceNFT/img2.png";
import appMarketplaceNFT3 from "../images/projects/appMarketplaceNFT/img3.png";
import listaTarefas1 from "../images/projects/listaDeTarefas/img1.png";
import listaTarefas2 from "../images/projects/listaDeTarefas/img2.png";
import listaTarefas3 from "../images/projects/listaDeTarefas/img3.png";
import listaTarefas4 from "../images/projects/listaDeTarefas/img4.png";
import myFirstPortfolio1 from "../images/projects/myFirstPortfolio/img1.png";
import myFirstPortfolio2 from "../images/projects/myFirstPortfolio/img2.png";
import myFirstPortfolio3 from "../images/projects/myFirstPortfolio/img3.png";
import myFirstPortfolio4 from "../images/projects/myFirstPortfolio/img4.png";
import myFirstPortfolio5 from "../images/projects/myFirstPortfolio/img5.png";
import myFirstPortfolio6 from "../images/projects/myFirstPortfolio/img6.png";
import myFirstPortfolio7 from "../images/projects/myFirstPortfolio/img7.png";
import contractCalculator1 from "../images/projects/contractCalculator/img1.png";
import contractCalculator2 from "../images/projects/contractCalculator/img2.png";
import contractCalculator3 from "../images/projects/contractCalculator/img3.png";
import dockerDeploy1 from "../images/projects/dockerDeploy/img1.png";
import dockerDeploy2 from "../images/projects/dockerDeploy/img2.png";
import dockerDeploy3 from "../images/projects/dockerDeploy/img3.png";
import dockerDeploy4 from "../images/projects/dockerDeploy/img4.png";
import gitlabCICD1 from "../images/projects/gitlabCICD/img1.png";
import gitlabCICD2 from "../images/projects/gitlabCICD/img2.png";

const BASE_DOMAIN = "leonardotc.me";

const projects = [
  {
    imageUrls: [
      myFirstPortfolio1,
      myFirstPortfolio2,
      myFirstPortfolio3,
      myFirstPortfolio4,
      myFirstPortfolio5,
      myFirstPortfolio6,
      myFirstPortfolio7,
    ],
    siteUrl: `http://my-first-portfolio.${BASE_DOMAIN}/`,
    description:
      "Este foi meu primeiro portfólio pessoal, desenvolvido para aprimorar minhas habilidades e conhecimentos. Utilizei Bootstrap para um design responsivo e estilizado, e combinei JavaScript, HTML e CSS para criar uma interface intuitiva. Esse projeto foi fundamental para melhorar meu conhecimento e experiência no desenvolvimento web.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/MyPortfolio",
  },
  {
    imageUrls: [listaTarefas1, listaTarefas2, listaTarefas3, listaTarefas4],
    siteUrl: `http://to-do-list.${BASE_DOMAIN}/`,
    description:
      "Criei uma Lista de Tarefas responsiva e funcional usando HTML, CSS e JavaScript. O projeto permite adicionar, editar e remover tarefas, oferecendo uma experiência intuitiva em diversos dispositivos.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/ListaDeTarefas",
  },
  {
    imageUrls: [appMarketplaceNFT1, appMarketplaceNFT2, appMarketplaceNFT3],
    siteUrl: "withoutdeploy",
    description:
      "Desenvolvi a interface de um marketplace de vendas de NFTs utilizando React, Redux e SASS. O projeto incluiu a criação de páginas responsivas, estilização personalizada e uma arquitetura bem estruturada para gerenciamento de estado global com Redux. Fui responsável por implementar componentes reutilizáveis, garantir a consistência visual e proporcionar uma experiência fluida e intuitiva para os usuários.",
    repositoryUrl:
      "https://github.com/leonardo-tcarvalho/starsoft-frontend-challenge",
  },
  {
    imageUrls: [contractCalculator1, contractCalculator2, contractCalculator3],
    siteUrl: `http://contract-calculator.${BASE_DOMAIN}/`,
    description:
      "Desenvolvi um site web para cálculo de contratos de funcionários do Quinto Andar, conforme solicitado por um cliente. O projeto foi construído utilizando HTML, CSS e JavaScript puro, sem o uso de frameworks ou APIs. Fui responsável pela criação de uma interface simples e responsiva, que permite aos usuários calcular os contratos de forma rápida e precisa. O foco foi garantir uma experiência de uso intuitiva, com um layout claro e otimizado para diversos dispositivos.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/calculadoraContratos",
  },
  {
    imageUrls: [dockerDeploy1, dockerDeploy2, dockerDeploy3, dockerDeploy4],
    siteUrl: "withoutdeploy",
    description:
      "Implementei um processo completo de automação de deploy utilizando GitLab CI/CD em ambiente local, com o WSL2 simulando múltiplas máquinas virtuais Linux. A escolha pelo WSL2 permitiu emular uma infraestrutura de servidores sem recorrer a provedores de nuvem como AWS, Azure ou Google Cloud. Durante a configuração, enfrentei conflitos de rede devido ao compartilhamento de IP entre instâncias, o que impedia a comunicação via SSH. Para resolver, alterei as portas internas do serviço SSH e utilizei o PowerShell para redirecionar corretamente as conexões entre as VMs. O resultado foi uma infraestrutura funcional de CI/CD totalmente local, capaz de realizar deploys automatizados sem dependências externas.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/GitlabCI-CD",
  },
  {
    imageUrls: [gitlabCICD1, gitlabCICD2],
    siteUrl: "withoutdeploy",
    description:
      "Desenvolvi uma pipeline de deploy contínuo utilizando GitHub Actions e Docker, com integração automatizada em dois ambientes distintos hospedados na Azure: teste e produção. A cada aprovação de pull request, a imagem da aplicação é reconstruída e o container do ambiente de produção é atualizado automaticamente, assegurando a entrega contínua da versão mais recente sem intervenção manual. Para garantir a segurança, utilizei GitHub Secrets no gerenciamento de credenciais. Também integrei um sistema baseado em inteligência artificial para geração automática de páginas HTML, otimizando os testes visuais durante o processo de deploy.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/DockerDeploy",
  },
];

export { projects };

export function CardProject({ numberProject }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const project = projects[numberProject];

  return (
    <div className="w-full h-auto bg-zinc-950 border-1 border-zinc-700 p-4 rounded-lg shadow-lg">
      <div className="relative">
        {project.siteUrl === "undefined" ? (
          <div className="inset-0 flex items-center justify-center p-10 rounded-lg">
            <div className="w-40 h-40 border-t-4 border-rose-600 border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <Slider {...settings} className="custom-slider">
            {project.imageUrls.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-full relative"
              >
                <img
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div className="flex flex-col items-center gap-5 w-full mx-auto mt-10">
        <div>
          {project.siteUrl === "undefined" ? (
            <>
              <p className="text-center bg-rose-600 px-10 py-2">
                Projeto em Desenvolvimento
              </p>
              <p className="text-justify m-auto mt-2 text-gray-300">
                {project.description}
              </p>
              <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-gray-700 cursor-not-allowed">
                Visitar o site
              </div>
              <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-zinc-700 cursor-not-allowed">
                Ver Repositório
              </div>
            </>
          ) : project.siteUrl === "withoutdeploy" ? (
            <>
              <p className="text-justify m-auto mt-2 text-gray-300">
                {project.description}
              </p>
              <Link to={project.repositoryUrl} target="_blank">
                <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-zinc-700 hover:bg-zinc-600 transition-colors">
                  Ver Repositório
                </div>
              </Link>
            </>
          ) : (
            <>
              <p className="text-justify m-auto mt-2 text-gray-300">
                {project.description}
              </p>
              <Link to={project.siteUrl} target="_blank">
                <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-rose-600 hover:bg-rose-700 transition-colors">
                  Visitar o site
                </div>
              </Link>
              <Link to={project.repositoryUrl} target="_blank">
                <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-zinc-700 hover:bg-zinc-600 transition-colors">
                  Ver Repositório
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

CardProject.propTypes = {
  numberProject: PropTypes.number.isRequired,
};
