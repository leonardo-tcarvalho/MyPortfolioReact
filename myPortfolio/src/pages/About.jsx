import { Link } from "react-router-dom"
import IconTS from "../images/IconTS.png"
import IconJS from "../images/IconJS.png"
import IconTailWind from "../images/IconTailWind.png"
import IconSQL from "../images/IconSQL.png"
import IconReactJS from "../images/IconReactJS.png"
import "../index.css"

export function About() {
    return (
        <div className="relative w-full min-h-[40rem] max-h-[40rem] rounded-2xl border-1 border-zinc-700 bg-zinc-800">
            <nav className="absolute flex w-full justify-end">
                <ul className="flex justify-center items-center w-2/4 h-10 bg-zinc-800 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
                    <Link className="w-1/3 h-full" to="/">
                        <span className="flex h-full items-center justify-center rounded-bl-2xl shadow-inner shadow-zinc-900 hover:shadow-inner hover:shadow-zinc-900">
                                <p className="text-xl text-zinc-300">Sobre</p>
                        </span>
                    </Link>
                    <Link className="w-1/3 h-full" to="/skills">
                        <span className="flex h-full items-center justify-center hover:shadow-inner hover:shadow-zinc-900 hover:duration-150 group">
                                <p className="text-xl text-purple-500 group-hover:text-zinc-300">Projetos</p>
                        </span>
                    </Link>
                    <Link className="w-1/3 h-full" to="/contacts">
                        <span className="flex h-full items-center justify-center rounded-tr-2xl hover:shadow-inner hover:shadow-zinc-900 hover:duration-150 group">
                                <p className="text-xl text-purple-500 group-hover:text-zinc-300">Contatos</p>
                        </span>
                    </Link>
                </ul>
            </nav>
            
            <div className="w-full max-h-[92%] mt-10  overflow-y-auto scroll-bar">
                <div className="flex flex-col w-full gap-3 px-5">
                    <h1 className="text-white text-3xl font-semibold">Sobre</h1>
                    <span className="w-10 h-1 bg-purple-500"></span>
                </div>
                <div className="w-full h-[90rem] p-5">
                    <p className="text-white text-[1.2em]">Olá, meu nome é Leonardo e sou Desenvolvedor Web. Atualmente estou trabalhando com desenvolvimento de websites e interfaces responsivas. <br/> <br/> Meu trabalho é garantir que nossos sites e plataformas tenham a melhor otimização e design de qualidade, estou sempre em busca de aprimorar meus conhecimentos. Atualmente estou cursando bacharelado em Ciência da Computação e estou em busca de novas oportunidades que me permitam aprimorar meu inglês.</p>
                    <div className="flex flex-col w-full gap-3 mt-5">
                        <h1 className="text-white text-2xl font-semibold">Principais Stacks</h1>
                        <span className="w-14 h-1 bg-purple-500"></span>
                        <div className="flex justify-start gap-10">
                            <img src={IconTS} alt="TypeScript" className="w-16 h-16 hover:scale-125 duration-300 hover:duration-300"/>
                            <img src={IconJS} alt="" className="w-16 h-16"/>
                            <img src={IconTailWind} alt="" className="w-20 h-16"/>
                            <img src={IconReactJS} alt="" className="w-18 h-16"/>
                            <img src={IconSQL} alt="" className="w-16 h-16"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}