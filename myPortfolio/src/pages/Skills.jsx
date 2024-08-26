import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "../images/MenuIcon";
import { CloseMenu } from "../images/CloseMenu";
import { SidebarMenu } from "../components/SidebarMenu";
import { CardProject } from "../components/CardProject";
import image1 from "/src/images/projects/appChamadaAlunos/img1.png";
import image2 from "/src/images/projects/appChamadaAlunos/img2.png";
import image3 from "/src/images/projects/appChamadaAlunos/img3.png";
import image4 from "/src/images/projects/appChamadaAlunos/img4.png";

import image5 from "/src/images/projects/listaDeTarefas/img1.png";
import image6 from "/src/images/projects/listaDeTarefas/img2.png";
import image7 from "/src/images/projects/listaDeTarefas/img3.png";
import image8 from "/src/images/projects/listaDeTarefas/img4.png";

import image9 from "/src/images/projects/myFirstPortfolio/img1.png";
import image10 from "/src/images/projects/myFirstPortfolio/img2.png";
import image11 from "/src/images/projects/myFirstPortfolio/img3.png";
import image12 from "/src/images/projects/myFirstPortfolio/img4.png";
import image13 from "/src/images/projects/myFirstPortfolio/img5.png";

export function Skills() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const data = [
    {
      imageUrls: [image1, image2, image3, image4],
      siteUrl: "https://app-chamada-alunos.vercel.app/",
      description:
        "Desenvolvi um site para controle de chamadas utilizando React, SQL, PHP e Tailwind. O aplicativo permite o cadastro de alunos, docentes e turmas. Fui responsável por criar as relações entre as tabelas, implementar um design responsivo e desenvolver o back-end para realizar operações CRUD.",
    },
    {
      imageUrls: [image5, image6, image7, image8],
      siteUrl: "https://lista-de-tarefas-five-zeta.vercel.app/",
      description:
        "Criei uma Lista de Tarefas responsiva e funcional usando HTML, CSS e JavaScript. O projeto permite adicionar, editar e remover tarefas, oferecendo uma experiência intuitiva em diversos dispositivos.",
    },
    {
      imageUrls: [image9, image10, image11, image12, image13],
      siteUrl: "https://my-portfolio-azure-sigma.vercel.app/",
      description:
        "Este foi meu primeiro portfólio pessoal, desenvolvido para aprimorar minhas habilidades e conhecimentos. Utilizei Bootstrap para um design responsivo e estilizado, e combinei JavaScript, HTML e CSS para criar uma interface intuitiva. Esse projeto foi fundamental para melhorar meu conhecimento e experiência no desenvolvimento web.",
    },
    {
      imageUrls: [],
      siteUrl: "undefined",
      description:
        "Este projeto é um site desenvolvido para um corretor de imóveis, utilizando React e Tailwind. A aplicação oferece uma plataforma intuitiva e eficiente para o gerenciamento de propriedades. O corretor pode adicionar, editar e remover imóveis, cada um com detalhes como fotos, preços e descrições. O design responsivo garante que o site seja visualmente atraente e funcional em qualquer dispositivo. O deploy e gerenciamento da aplicação são realizados no Google Cloud, assegurando alta disponibilidade e desempenho confiável.",
    },
  ];

  return (
    <div className="relative w-full max-lg:h-screen lg:min-h-[40rem] lg:max-h-[50rem] lg:rounded-2xl max-lg:border-none border-1 border-zinc-700 bg-zinc-800">
      <nav className="absolute flex w-full max-lg:justify-between justify-end">
        <span onClick={toggleSidebar} className="lg:hidden p-4">
          <MenuIcon />
        </span>
        <ul className="max-lg:hidden flex justify-center items-center w-2/4 h-10 bg-zinc-800 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
          <Link className="w-2/4 h-full" to="/">
            <span className="flex h-full items-center justify-center rounded-bl-2xl hover:shadow-inner hover:shadow-zinc-900 hover:duration-150 group">
              <p className="text-xl text-purple-500 group-hover:text-zinc-300">
                Sobre
              </p>
            </span>
          </Link>
          <Link className="w-2/4 h-full" to="/skills">
            <span className="flex h-full items-center justify-center shadow-inner shadow-zinc-900 hover:shadow-inner hover:shadow-zinc-900">
              <p className="text-xl text-zinc-300">Projetos</p>
            </span>
          </Link>
        </ul>

        <div
          className={`lg:hidden z-50 absolute top-0 ${sidebarVisible ? "translate-x-0" : "-translate-x-[101%]"} duration-300 flex w-full h-screen`}
        >
          <div className="flex flex-col w-5/6 h-screen bg-zinc-800">
            <div className="absolute flex w-full max-lg:justify-start ">
              <span onClick={toggleSidebar} className="p-4">
                <CloseMenu />
              </span>
            </div>
            <SidebarMenu />
          </div>
          <div
            onClick={toggleSidebar}
            className="w-1/6 h-screen bg-zinc-950 duration-1000 bg-opacity-50"
          ></div>
        </div>
      </nav>
      <div className="w-full max-lg:max-h-[91%] max-h-[92%] max-lg:mt-20 mt-10 overflow-y-auto scroll-bar">
        <div className="flex flex-col w-full gap-3 px-5">
          <h1 className="text-white text-3xl font-semibold">Projetos</h1>
          <span className="w-10 h-1 bg-purple-500"></span>
        </div>
        <div className="flex justify-center w-full p-5">
          <div className="grid grid-cols-1 items-center gap-10 max-lg:w-full w-4/5">
            {data.map((project, index) => (
              <CardProject key={index} numberProject={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
