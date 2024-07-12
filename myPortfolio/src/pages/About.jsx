import { Link } from "react-router-dom"
import "../index.css"

export function About() {
    return (
        <div className="relative w-full min-h-[40rem] max-h-[40rem] rounded-2xl border-1 border-zinc-700 bg-zinc-800">
            <nav className="absolute flex w-full justify-end">
                <ul className="flex justify-center items-center w-2/4 h-10 bg-zinc-800 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
                    <Link className="w-1/3 h-full" to="/">
                        <span className="flex h-full items-center justify-center rounded-bl-2xl shadow-inner shadow-zinc-900 hover:shadow-inner hover:shadow-zinc-900">
                                <p className="text-xl text-purple-500">About</p>
                        </span>
                    </Link>
                    <Link className="w-1/3 h-full" to="/skills">
                        <span className="flex h-full items-center justify-center hover:shadow-inner hover:shadow-zinc-900">
                                <p className="text-xl text-purple-500">Skills</p>
                        </span>
                    </Link>
                    <Link className="w-1/3 h-full" to="/contacts">
                        <span className="flex h-full items-center justify-center rounded-tr-2xl hover:shadow-inner hover:shadow-zinc-900">
                                <p className="text-xl text-purple-500">Contacts</p>
                        </span>
                    </Link>
                </ul>
            </nav>
            
            <div className="w-full max-h-[92%] mt-10  overflow-y-auto scroll-bar">
                <div className="flex flex-col w-full gap-3 px-5">
                    <h1 className="text-white text-3xl font-semibold">About</h1>
                    <span className="w-10 h-1 bg-purple-500"></span>
                </div>
                <div className="w-full h-[90rem] p-5">
                    <p className="text-white">Hello, my name is Leonardo and I'm a Web Developer at Grupo Anchieta. I currently work with website development and responsive interfaces, mobile applications and user support. <br/> <br/> My job is to ensure that our websites and platforms have the best optimization and quality design, I am always looking to improve my knowledge. I am currently studying a Bachelor's degree in Computer Science, and I am looking for new opportunities that will allow me to improve my English.</p>
                </div>
            </div>
        </div>
    )
}