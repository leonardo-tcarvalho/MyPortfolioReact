import { Link } from "react-router-dom"

export function Home() {
    return (
        <div className="w-full min-h-[40rem] max-h-[40rem] overflow-y-auto rounded-2xl border-1 border-zinc-700 bg-zinc-800">
            <nav className="flex w-full justify-end">
                <ul className="flex justify-center items-center w-2/4 h-10 bg-zinc-800 border-zinc-700 border-1 rounded-tr-2xl rounded-bl-2xl shadow-5">
                    <Link className="w-1/3 h-full" to="/">
                        <span className="flex h-full items-center justify-center rounded-bl-2xl shadow-inner shadow-zinc-900 hover:shadow-inner hover:shadow-zinc-900">
                                <p className="text-xl text-fuchsia-600">Home</p>
                        </span>
                    </Link>
                    <Link className="w-1/3 h-full" to="/about">
                        <span className="flex h-full items-center justify-center hover:shadow-inner hover:shadow-zinc-900">
                                <p className="text-xl text-fuchsia-600">About</p>
                        </span>
                    </Link>
                    <Link className="w-1/3 h-full" to="/contacts">
                        <span className="flex h-full items-center justify-center rounded-tr-2xl hover:shadow-inner hover:shadow-zinc-900">
                                <p className="text-xl text-fuchsia-600">Contacts</p>
                        </span>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}