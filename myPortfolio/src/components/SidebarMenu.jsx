import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Instagram } from "../images/Instagram";
import { Linkedin } from "../images/Linkedin";
import { Github } from "../images/Github";

export function SidebarMenu() {
  return (
    <aside className="flex flex-col items-center w-full h-full p-4 mt-5 bg-zinc-800">
      <div className="flex flex-col items-center gap-5">
        <Avatar />
        <p className="text-center text-zinc-300 text-3xl font-bold">
          Leonardo Carvalho
        </p>
        <div className="bg-purple-600 px-4 py-1 rounded-md shadow-md">
          <p className="text-center text-zinc-200 ">Desenvolvedor FullStack</p>
        </div>
      </div>
      <span className="w-full h-1 my-5 border-b-1 border-zinc-700"></span>
      <div className="flex justify-center gap-4 w-full">
        <a href="https://www.instagram.com/cabelozl/" target="_blank">
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-r-carvalho/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a href="https://github.com/leonardo-tcarvalho" target="_blank">
          <Github />
        </a>
      </div>
      <div
        className="flex flex-col items-center gap-5 w-full pt-10
      "
      >
        <Link to="/">
          <p className="max-sm:w-52 w-96 text-center px-4 py-2 text-xl text-zinc-300 bg-purple-600 rounded-md duration-150 hover:bg-zinc-300 hover:text-purple-600 hover:duration-150">
            Sobre Mim
          </p>
        </Link>
        <Link to="/skills">
          <p className="max-sm:w-52 w-96 text-center px-4 py-2 text-xl text-zinc-300 bg-purple-600 rounded-md duration-150 hover:bg-zinc-300 hover:text-purple-600 hover:duration-150">
            Projetos
          </p>
        </Link>
      </div>
    </aside>
  );
}
