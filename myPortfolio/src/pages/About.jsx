import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconTS from "../images/IconTS.png";
import IconJS from "../images/IconJS.png";
import IconPHP from "../images/IconPHP.png";
import IconSQL from "../images/IconSQL.png";
import IconReactJS from "../images/IconReactJS.png";
import IconRedux from "../images/IconRedux.png";
import IconJenkins from "../images/IconJenkins.png";
import IconGitlab from "../images/IconGitlab.png";
import IconMongoDB from "../images/IconMongoDB.png";
import IconAWS from "../images/IconAWS.png";
import IconDocker from "../images/IconDocker.png";
import { MenuIcon } from "../images/MenuIcon";
import { CloseMenu } from "../images/CloseMenu";
import { SidebarMenu } from "../components/SidebarMenu";

export function About() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative w-full max-lg:h-full min-h-screen lg:min-h-[35rem] lg:max-h-[42rem] lg:rounded-2xl max-xl:border-none border-1 border-zinc-700 bg-zinc-800">
      <nav className="absolute flex w-full max-lg:h-full  max-lg:justify-between justify-end">
        <span onClick={toggleSidebar} className="lg:hidden p-4">
          <MenuIcon />
        </span>
        <ul className="max-lg:hidden flex justify-center items-center w-2/4 h-10 bg-zinc-800 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
          <Link className="w-2/4 h-full" to="/">
            <span className="flex h-full items-center justify-center rounded-bl-2xl shadow-inner shadow-zinc-900 hover:shadow-inner hover:shadow-zinc-900">
              <p className="text-xl text-purple-500">Sobre Mim</p>
            </span>
          </Link>
          <Link className="w-2/4 h-full" to="/skills">
            <span className="flex h-full items-center justify-center hover:shadow-inner hover:shadow-zinc-900 hover:duration-150 group">
              <p className="text-xl text-zinc-300 group-hover:text-purple-500">
                Projetos
              </p>
            </span>
          </Link>
        </ul>
        <div
          className={`lg:hidden z-50 absolute top-0 ${sidebarVisible ? "translate-x-0" : "-translate-x-[101%]"} duration-300 flex w-full h-full`}
        >
          <div className="flex flex-col w-5/6 h-full bg-zinc-800">
            <div className="absolute flex w-full max-lg:justify-start ">
              <span onClick={toggleSidebar} className="p-4">
                <CloseMenu />
              </span>
            </div>
            <SidebarMenu />
          </div>
          <div
            onClick={toggleSidebar}
            className="w-1/6 h-full bg-zinc-950 duration-1000 bg-opacity-50"
          ></div>
        </div>
      </nav>
      <div className="w-full max-lg:h-[80%] max-h-[92%] max-lg:mt-20 mt-10 overflow-y-auto scroll-bar">
        <div className="flex flex-col w-full gap-3 px-5">
          <h1 className="text-white text-3xl font-semibold">Sobre Mim</h1>
          <span className="w-10 h-1 bg-purple-500"></span>
        </div>
        <div className="flex flex-col w-full gap-10 p-5">
          <p className="text-white text-[1.2em]">
            Sou Leonardo, tenho 23 anos e sou Desenvolvedor Fullstack,
            atualmente no último ano de Ciência da Computação. Tenho 1 ano de
            experiência como Desenvolvedor Fullstack, o que me permitiu
            aprimorar minhas habilidades e entender melhor as necessidades do
            mercado.
            <br />
            <br />
            Tenho experiência na criação de APIs, interfaces responsivas e
            interativas utilizando React, JavaScript, PHP, Tailwind e SASS.
            Também trabalho com bancos de dados como SQL Server e MongoDB. Estou
            sempre em busca de novos aprendizados, com foco em melhorar meu
            inglês e expandir meus conhecimentos em Cloud e DevOps.
            <br />
            <br />
            Estou aberto a oportunidades e desafios que me permitam crescer
            profissionalmente. Sinta-se à vontade para se conectar, ficarei
            feliz em compartilhar minhas experiências.
          </p>
          <div className="flex flex-col w-full gap-3 mt-5">
            <h1 className="text-white text-2xl font-semibold">
              Ferramentas Utilizadas
            </h1>
            <span className="w-14 h-1 bg-purple-500"></span>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-10 mt-5">
              <div className="flex flex-col items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110 hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconTS}
                  alt="TypeScript"
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  TypeScript
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconJS}
                  alt=""
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  JavaScript
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconReactJS}
                  alt=""
                  className="w-18 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  React JS
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconRedux}
                  alt=""
                  className="w-18 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">Redux</p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconPHP}
                  alt=""
                  className="w-20 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">PHP</p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconSQL}
                  alt=""
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  SQL Server
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconMongoDB}
                  alt=""
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  Mongo DB
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 mt-5">
            <h1 className="text-white text-2xl font-semibold">
              Estudando Atualmente
            </h1>
            <span className="w-14 h-1 bg-purple-500"></span>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-10 mt-5">
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconJenkins}
                  alt="Jenkins"
                  className="w-16 h-20 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">Jenkins</p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconGitlab}
                  alt="Gitlab"
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  Gitlab CI/CD
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconAWS}
                  alt="AWS Cloud"
                  className="w-24 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  AWS Cloud
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:cursor-pointer group">
                <img
                  src={IconDocker}
                  alt="Docker"
                  className="w-20 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
