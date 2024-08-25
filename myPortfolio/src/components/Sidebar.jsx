import { Avatar } from "./Avatar";
import { Instagram } from "../images/Instagram";
import { Linkedin } from "../images/Linkedin";
import { Github } from "../images/Github";

export function Sidebar() {
  return (
    <aside className="max-lg:hidden flex flex-col items-center max-sm:w-full sm:w-[17rem] min-h-[23rem] sm:max-h-[20rem] border-1 border-zinc-700 rounded-xl p-4 bg-zinc-800">
      <Avatar />
      <p className="text-center text-zinc-300 text-2xl font-bold">
        Leonardo Carvalho
      </p>
      <div className="mt-4 bg-purple-600 px-4 py-1 rounded-md shadow-md">
        <p className="text-zinc-200 font-bold">Desenvolvedor Web</p>
      </div>
      <span className="w-full h-1 my-5 border-b-1 border-zinc-700"></span>
      <div className="flex flex-col w-full gap-5"></div>
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
    </aside>
  );
}
