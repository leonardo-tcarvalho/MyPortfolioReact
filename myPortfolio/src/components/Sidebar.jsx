import { Avatar } from "./Avatar";
import { Info } from "./Info";

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center w-[17rem] min-h-[30rem] max-h-[30rem] border-1 border-zinc-500 rounded-xl p-4 bg-zinc-800">
      <Avatar />
      <p className="text-center text-zinc-300 text-2xl font-bold">Leonardo Carvalho</p>
      <div className="mt-4 bg-zinc-700 px-4 py-1 rounded-md shadow-md">
        <p className="text-zinc-200 font-bold">Web Developer</p>
      </div>
      <Info />
    </aside>
  )
}