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
    siteUrl: "https://my-first-portfolio.leonardotc.me/",
    description:
      "Este foi meu primeiro portfólio pessoal, desenvolvido para aprimorar minhas habilidades e conhecimentos. Utilizei Bootstrap para um design responsivo e estilizado, e combinei JavaScript, HTML e CSS para criar uma interface intuitiva. Esse projeto foi fundamental para melhorar meu conhecimento e experiência no desenvolvimento web.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/MyPortfolio",
  },
  {
    imageUrls: [listaTarefas1, listaTarefas2, listaTarefas3, listaTarefas4],
    siteUrl: "https://to-do-list.leonardotc.me/",
    description:
      "Criei uma Lista de Tarefas responsiva e funcional usando HTML, CSS e JavaScript. O projeto permite adicionar, editar e remover tarefas, oferecendo uma experiência intuitiva em diversos dispositivos.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/ListaDeTarefas",
  },
  {
    imageUrls: [appMarketplaceNFT1, appMarketplaceNFT2, appMarketplaceNFT3],
    siteUrl: "https://starsoft-frontend-challenge-nine.vercel.app/",
    description:
      "Desenvolvi a interface de um marketplace de vendas de NFTs utilizando React, Redux e SASS. O projeto incluiu a criação de páginas responsivas, estilização personalizada e uma arquitetura bem estruturada para gerenciamento de estado global com Redux. Fui responsável por implementar componentes reutilizáveis, garantir a consistência visual e proporcionar uma experiência fluida e intuitiva para os usuários.",
    repositoryUrl:
      "https://github.com/leonardo-tcarvalho/starsoft-frontend-challenge",
  },
  {
    imageUrls: [contractCalculator1, contractCalculator2, contractCalculator3],
    siteUrl: "https://contract-calculator.leonardotc.me/",
    description:
      "Desenvolvi um site web para cálculo de contratos de funcionários do Quinto Andar, conforme solicitado por um cliente. O projeto foi construído utilizando HTML, CSS e JavaScript puro, sem o uso de frameworks ou APIs. Fui responsável pela criação de uma interface simples e responsiva, que permite aos usuários calcular os contratos de forma rápida e precisa. O foco foi garantir uma experiência de uso intuitiva, com um layout claro e otimizado para diversos dispositivos.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/calculadoraContratos",
  },
  {
    imageUrls: [],
    siteUrl: "undefined",
    description:
      "Estou desenvolvendo um app mobile usando React Native, TypeScript, SQL Server, PHP para APIs e Styled Components. No projeto, estou cuidando da criação da interface, deixando-a moderna e fácil de usar, além de integrar o app com uma API que fiz para gerenciar os dados no banco. Também estou organizando as rotas e conectando o front-end com o back-end de forma prática e eficiente.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho",
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
    <div className="w-full h-auto bg-zinc-950 border-1 border-zinc-600 p-4 rounded-lg shadow-lg">
      <div className="relative">
        {project.siteUrl === "undefined" ? (
          <div className="inset-0 flex items-center justify-center p-10 rounded-lg">
            <div className="w-40 h-40 border-t-4 border-purple-600 border-solid rounded-full animate-spin"></div>
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
              <p className="text-center bg-red-600 px-10 py-2">
                SITE EM DESENVOLVIMENTO
              </p>
              <p className="text-justify m-auto mt-2 text-gray-300">
                {project.description}
              </p>
              <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-purple-600 cursor-not-allowed">
                Visitar o site
              </div>
              <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-zinc-600 cursor-not-allowed">
                Ver Repositório
              </div>
            </>
          ) : (
            <>
              <p className="text-justify m-auto mt-2 text-gray-300">
                {project.description}
              </p>
              <Link to={project.siteUrl} target="_blank">
                <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-purple-600">
                  Visitar o site
                </div>
              </Link>
              <Link to={project.repositoryUrl} target="_blank">
                <div className="min-w-48 mx-auto mt-2 py-1 px-10 rounded-md text-center text-white bg-zinc-600">
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
