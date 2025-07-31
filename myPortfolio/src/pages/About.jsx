import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconTS from "../images/IconTS.png";
import IconJS from "../images/IconJS.png";
import IconPHP from "../images/IconPHP.png";
import IconSQL from "../images/IconSQL.png";
import IconReactJS from "../images/IconReactJS.png";
import IconRedux from "../images/IconRedux.png";
import IconGitlab from "../images/IconGitlab.png";
import IconMongoDB from "../images/IconMongoDB.png";
import IconAWS from "../images/IconAWS.png";
import IconDocker from "../images/IconDocker.png";
import IconLinux from "../images/IconLinux.png";
import { MenuIcon } from "../images/MenuIcon";
import { CloseMenu } from "../images/CloseMenu";
import { SidebarMenu } from "../components/SidebarMenu";

export function About() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative w-full max-lg:h-full min-h-screen lg:min-h-[35rem] lg:max-h-[42rem] lg:rounded-2xl max-xl:border-none border-1 border-zinc-700 bg-zinc-900">
      <nav className="flex w-full max-lg:h-full max-lg:justify-between justify-end">
        <span onClick={toggleSidebar} className="lg:hidden p-4 h-20">
          <MenuIcon />
        </span>
        <ul className="max-lg:hidden flex justify-center items-center w-2/4 h-10 bg-zinc-900 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
          <Link className="w-2/4 h-full" to="/">
            <span className="flex h-full items-center justify-center rounded-bl-2xl shadow-inner shadow-black hover:shadow-inner hover:shadow-black">
              <p className="text-xl text-white">Sobre Mim</p>
            </span>
          </Link>
          <Link className="w-2/4 h-full" to="/skills">
            <span className="flex h-full items-center justify-center hover:shadow-inner hover:shadow-black hover:duration-150 group">
              <p className="text-xl text-zinc-300 group-hover:text-white">
                Projetos
              </p>
            </span>
          </Link>
        </ul>
        <div
          className={`lg:hidden z-50 absolute top-0 ${sidebarVisible ? "translate-x-0" : "-translate-x-[101%]"} duration-300 flex w-full h-full`}
        >
          <div className="flex flex-col w-5/6 h-full bg-zinc-900">
            <div className="absolute flex w-full max-lg:justify-start ">
              <span onClick={toggleSidebar} className="p-4">
                <CloseMenu />
              </span>
            </div>
            <SidebarMenu />
          </div>
        </div>
        <div
          className={`absolute w-full h-full duration-300 bg-zinc-950 opacity-50 ${sidebarVisible ? "" : "hidden"}`}
        ></div>
      </nav>
      <div className="w-full max-lg:h-[80%] max-h-[92%] overflow-y-auto scroll-bar">
        <div className="flex flex-col w-full gap-3 px-5">
          <h1 className="text-white text-3xl font-semibold">Sobre Mim</h1>
          <span className="w-10 h-1 bg-rose-600"></span>
        </div>
        <div className="flex flex-col w-full gap-10 p-5">
          <div className="text-white text-[1.2em] space-y-4">
            <p>
              Me chamo Leonardo, tenho 24 e sou Desenvolvedor Fullstack, atualmente no último semestre do curso de Ciência da Computação. Possuo 2 anos de experiência profissional atuando no desenvolvimento de sistemas e aplicações web e mobile, com foco em soluções performáticas e alinhadas às necessidades do negócio.
            </p>
            <p>
              Minha atual função tem sido o Desenvolvimento de APIs em PHP, com atenção à arquitetura, segurança e manutenção de código limpo. Desenvolvimento de aplicações Web com React e Mobile com React Native, priorizando interfaces responsivas, desempenho e experiência do usuário. Manipulação intensiva de dados com SQL Server, sendo responsável diariamente por gerar relatórios, criação de procedures, views, otimização de queries e manutenção de rotinas de extração de dados.
            </p>
            <p>
              Sou um profissional comunicativo, proativo e colaborativo, com forte orientação à entrega de valor e à melhoria contínua. Estou aberto a oportunidades e desafios que me permitam crescer profissionalmente. Sinta-se à vontade para se conectar, ficarei feliz em compartilhar minhas experiências.
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 mt-5">
            <h1 className="text-white text-2xl font-semibold">
              Ferramentas Utilizadas
            </h1>
            <span className="w-14 h-1 bg-rose-600"></span>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-10 mt-5">
            
              <div className="flex flex-col items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110 hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconTS}
                  alt="TypeScript"
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  TypeScript
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconJS}
                  alt="JavaScript"
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  JavaScript
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconReactJS}
                  alt="React JS"
                  className="w-18 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  React JS
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconRedux}
                  alt="Redux"
                  className="w-18 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">Redux</p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconPHP}
                  alt="PHP"
                  className="w-20 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">PHP</p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconSQL}
                  alt="SQL Server"
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  SQL Server
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110  hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconMongoDB}
                  alt="Mongo DB"
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  Mongo DB
                </p>
              </div>
                <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110 hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconDocker}
                  alt="Docker"
                  className="w-20 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">Docker</p>
              </div>
                <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110 hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconLinux}
                  alt="Linux"
                  className="w-20 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">Linux</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 mt-5">
            <h1 className="text-white text-2xl font-semibold">
              Estudando Atualmente
            </h1>
            <span className="w-14 h-1 bg-rose-600"></span>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-10 mt-5">
              <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110 hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconGitlab}
                  alt="Gitlab"
                  className="w-16 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  Gitlab CI/CD
                </p>
              </div>
              <div className="flex flex-col justify-center items-center border-2 border-zinc-700 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-110 hover:shadow-10 hover:border-rose-600 hover:cursor-pointer group">
                <img
                  src={IconAWS}
                  alt="AWS Cloud"
                  className="w-24 h-16 group-hover:cursor-pointer"
                />
                <p className="text-white group-hover:cursor-pointer">
                  AWS Cloud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
