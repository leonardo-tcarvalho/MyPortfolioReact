import { Avatar } from "./Avatar";
import { Info } from "./Info";
import { Email } from "../images/Email"
import { Phone } from "../images/Phone"
import { Calendary } from "../images/Calendary";

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center w-[17rem] min-h-[30rem] max-h-[33rem] border-1 border-zinc-700 rounded-xl p-4 bg-zinc-800">
      <Avatar />
      <p className="text-center text-zinc-300 text-2xl font-bold">Leonardo Carvalho</p>
      <div className="mt-4 bg-zinc-700 px-4 py-1 rounded-md shadow-md">
        <p className="text-zinc-200 font-bold">Web Developer</p>
      </div>
      <span className="w-full h-1 my-5 border-b-1 border-zinc-700"></span>
      <div className="flex flex-col w-full gap-5">
        <Info type="EMAIL" content="Leonardotadeu.carvalho@gmail.com" image={<Email />}/>
        <Info type="PHONE" content="+55 (11)93014-3972" image={<Phone />}/>
        <Info type="BIRTHDAY" content="May 21, 2001" image={<Calendary />}/>
      </div>
    </aside>
  )
}