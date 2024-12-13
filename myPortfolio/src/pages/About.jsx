import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconTS from "../images/IconTS.png";
import IconJS from "../images/IconJS.png";
import IconPHP from "../images/IconPHP.png";
import IconSQL from "../images/IconSQL.png";
import IconReactJS from "../images/IconReactJS.png";
import IconMongoDB from "../images/IconMongoDB.png";
import { MenuIcon } from "../images/MenuIcon";
import { CloseMenu } from "../images/CloseMenu";
import { SidebarMenu } from "../components/SidebarMenu";

export function About() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative w-full max-lg:h-full min-h-screen lg:min-h-[40rem] lg:max-h-[96rem] lg:rounded-2xl max-xl:border-none border-1 border-zinc-700 bg-zinc-800">
      <nav className="absolute flex w-full max-lg:h-full  max-lg:justify-between justify-end">
        <span onClick={toggleSidebar} className="lg:hidden p-4">
          <MenuIcon />
        </span>
        <ul className="max-lg:hidden flex justify-center items-center w-2/4 h-10 bg-zinc-800 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
          <Link className="w-2/4 h-full" to="/">
            <span className="flex h-full items-center justify-center rounded-bl-2xl shadow-inner shadow-zinc-900 hover:shadow-inner hover:shadow-zinc-900">
              <p className="text-xl text-purple-500">Sobre</p>
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
          <h1 className="text-white text-3xl font-semibold">Sobre</h1>
          <span className="w-10 h-1 bg-purple-500"></span>
        </div>
        <div className="flex flex-col w-full gap-10 p-5">
          <p className="text-white text-[1.2em]">
            Olá, meu nome é Leonardo e sou Desenvolvedor Web há 2 Anos.
            Atualmente estou trabalhando com desenvolvimento de websites e
            interfaces responsivas. Meu trabalho é garantir que nossos sites e
            plataformas tenham a melhor otimização e design de qualidade, estou
            sempre em busca de aprimorar meus conhecimentos. <br /> <br /> Estou
            cursando bacharelado em Ciência da Computação e estou em busca de
            novas oportunidades que me permitam aprimorar minhas habilidades e
            meu nivel de inglês.
          </p>
          <div className="flex flex-col w-full gap-3 mt-5">
            <h1 className="text-white text-2xl font-semibold">
              Principais Stacks
            </h1>
            <span className="w-14 h-1 bg-purple-500"></span>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
              <div className="flex flex-col items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-125 hover:shadow-10">
                <img src={IconTS} alt="TypeScript" className="w-16 h-16" />
                <p className="text-white">TypeScript</p>
              </div>
              <div className="flex flex-col items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-125 hover:shadow-10">
                <img src={IconJS} alt="" className="w-16 h-16" />
                <p className="text-white">JavaScript</p>
              </div>
              <div className="flex flex-col items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-125 hover:shadow-10">
                <img src={IconReactJS} alt="" className="w-18 h-16" />
                <p className="text-white">React JS</p>
              </div>
              <div className="flex flex-col items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-125 hover:shadow-10">
                <img src={IconPHP} alt="" className="w-20 h-16" />
                <p className="text-white">PHP</p>
              </div>
              <div className="flex flex-col items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-125 hover:shadow-10">
                <img src={IconSQL} alt="" className="w-16 h-16" />
                <p className="text-white">SQL Server</p>
              </div>
              <div className="flex flex-col items-center border-2 rounded-xl p-3 duration-300 shadow-5 gap-2 hover:duration-300 hover:scale-125 hover:shadow-10">
                <img src={IconMongoDB} alt="" className="w-16 h-16" />
                <p className="text-white">Mongo DB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
