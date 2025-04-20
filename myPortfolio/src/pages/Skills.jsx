import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "../images/MenuIcon";
import { CloseMenu } from "../images/CloseMenu";
import { SidebarMenu } from "../components/SidebarMenu";
import { CardProject, projects } from "../components/CardProject";
import PropTypes from "prop-types";

export function Skills() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="relative w-full lg:min-h-[35rem] lg:max-h-[42rem] lg:rounded-2xl max-lg:border-none border-1 border-zinc-700 bg-zinc-900">
      <nav className="flex w-full max-lg:h-full max-lg:justify-between justify-end">
        <span onClick={toggleSidebar} className="lg:hidden p-4 h-20">
          <MenuIcon />
        </span>
        <ul className="max-lg:hidden flex justify-center items-center w-2/4 h-10 bg-zinc-900 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
          <Link className="w-2/4 h-full" to="/">
            <span className="flex h-full items-center justify-center rounded-bl-2xl hover:shadow-inner hover:shadow-black hover:duration-150 group">
              <p className="text-xl text-zinc-300 group-hover:text-white">
                Sobre Mim
              </p>
            </span>
          </Link>
          <Link className="w-2/4 h-full" to="/skills">
            <span className="flex h-full items-center justify-center shadow-inner shadow-black hover:shadow-inner hover:shadow-black">
              <p className="text-xl text-white">Projetos</p>
            </span>
          </Link>
        </ul>

        <div
          className={`lg:hidden z-50 absolute top-0 ${sidebarVisible ? "translate-x-0" : "-translate-x-[101%]"} duration-300 flex w-full h-full`}
        >
          <div className="flex flex-col w-5/6 h-full bg-zinc-900">
            <div className="absolute flex w-full max-lg:justify-start">
              <span onClick={toggleSidebar} className="p-4">
                <CloseMenu />
              </span>
            </div>
            <SidebarMenu />
          </div>
        </div>
        <div
          className={`absolute w-screen h-full duration-300 bg-zinc-950 opacity-50 ${sidebarVisible ? "" : "hidden"}`}
        ></div>
      </nav>
      <div className="w-full max-lg:max-h-[91%] max-h-[93%] overflow-y-auto scroll-bar">
        <div className="flex flex-col w-full gap-3 px-5">
          <h1 className="text-white text-3xl font-semibold">Projetos</h1>
          <span className="w-10 h-1 bg-rose-600"></span>
        </div>
        <div className="flex justify-center w-full p-5">
          <div className="grid grid-cols-1 items-center gap-10 max-lg:w-full w-4/5">
            {projects.map((project, index) => (
              <CardProject key={index} numberProject={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

CardProject.propTypes = {
  numberProject: PropTypes.number.isRequired,
};
