import { Link } from "react-router-dom";

export function Skills() {
  return (
    <div className="relative w-full max-lg:h-screen lg:min-h-[40rem] lg:max-h-[96rem] lg:rounded-2xl border-1 border-zinc-700 bg-zinc-800">
      <nav className="absolute flex w-full justify-end">
        <ul className="flex justify-center items-center w-2/4 h-10 bg-zinc-800 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
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
      </nav>
      <div className="w-full max-h-[92%] mt-10  overflow-y-auto scroll-bar">
        <div className="flex flex-col w-full gap-3 px-5">
          <h1 className="text-white text-3xl font-semibold">Projetos</h1>
          <span className="w-10 h-1 bg-purple-500"></span>
        </div>
        <div className="w-full p-5"></div>
      </div>
    </div>
  );
}
