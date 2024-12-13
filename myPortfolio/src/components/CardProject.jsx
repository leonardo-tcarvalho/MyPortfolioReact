import { Link } from "react-router-dom";
import Slider from "react-slick";

const projects = [
  {
    imageUrls: [
      "../images/projects/appMarketplaceNFT/img1.png",
      "../images/projects/appMarketplaceNFT/img2.png",
      "../images/projects/appMarketplaceNFT/img3.png",
      "../images/projects/appMarketplaceNFT/img4.png",
    ],
    siteUrl: "https://starsoft-frontend-challenge-nine.vercel.app/",
    description:
      "Desenvolvi a interface de um marketplace de vendas de NFTs utilizando React, Redux e SASS. O projeto incluiu a criação de páginas responsivas, estilização personalizada e uma arquitetura bem estruturada para gerenciamento de estado global com Redux. Fui responsável por implementar componentes reutilizáveis, garantir a consistência visual e proporcionar uma experiência fluida e intuitiva para os usuários.",
    repositoryUrl:
      "https://github.com/leonardo-tcarvalho/starsoft-frontend-challenge",
  },
  {
    imageUrls: [
      "../images/projects/listaDeTarefas/img1.png",
      "../images/projects/listaDeTarefas/img2.png",
      "../images/projects/listaDeTarefas/img3.png",
      "../images/projects/listaDeTarefas/img4.png",
    ],
    siteUrl: "https://lista-de-tarefas-five-zeta.vercel.app/",
    description:
      "Criei uma Lista de Tarefas responsiva e funcional usando HTML, CSS e JavaScript. O projeto permite adicionar, editar e remover tarefas, oferecendo uma experiência intuitiva em diversos dispositivos.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/ListaDeTarefas",
  },
  {
    imageUrls: [
      "../images/projects/myFirstPortfolio/img1.png",
      "../images/projects/myFirstPortfolio/img2.png",
      "../images/projects/myFirstPortfolio/img3.png",
      "../images/projects/myFirstPortfolio/img4.png",
      "../images/projects/myFirstPortfolio/img5.png",
    ],
    siteUrl: "https://my-portfolio-azure-sigma.vercel.app/",
    description:
      "Este foi meu primeiro portfólio pessoal, desenvolvido para aprimorar minhas habilidades e conhecimentos. Utilizei Bootstrap para um design responsivo e estilizado, e combinei JavaScript, HTML e CSS para criar uma interface intuitiva. Esse projeto foi fundamental para melhorar meu conhecimento e experiência no desenvolvimento web.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho/MyPortfolio",
  },
  {
    imageUrls: [],
    siteUrl: "undefined",
    description:
      "Este projeto é um site desenvolvido para um corretor de imóveis, utilizando React e Tailwind. A aplicação oferece uma plataforma intuitiva e eficiente para o gerenciamento de propriedades. O corretor pode adicionar, editar e remover imóveis, cada um com detalhes como fotos, preços e descrições. O design responsivo garante que o site seja visualmente atraente e funcional em qualquer dispositivo. O deploy e gerenciamento da aplicação são realizados no Google Cloud, assegurando alta disponibilidade e desempenho confiável.",
    repositoryUrl: "https://github.com/leonardo-tcarvalho",
  },
];

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
            </>
          ) : (
            <p className="text-justify m-auto mt-2 text-gray-300">
              {project.description}
            </p>
          )}
        </div>
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
      </div>
    </div>
  );
}
