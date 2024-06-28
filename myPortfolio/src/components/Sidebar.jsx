import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center w-full min-h-[30rem] max-h-[30rem] border-1 border-zinc-500 rounded-xl bg-zinc-800">
      <Avatar />
      <p className="text-center mt-2 text-zinc-300 text-2xl font-bold">Leonardo Carvalho</p>
      <div className="mt-4 bg-zinc-600 px-4 py-1 rounded-md shadow-md">
        <p className="text-zinc-200 font-bold">Web Developer</p>
      </div>
    </aside>
  )
}