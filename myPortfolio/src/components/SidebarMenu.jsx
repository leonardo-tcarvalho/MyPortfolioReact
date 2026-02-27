import { Link, useLocation } from "react-router-dom";
import { Avatar } from "./Avatar";
import { ThemeToggle } from "./ThemeToggle";
import { Instagram } from "../images/Instagram";
import { Linkedin } from "../images/Linkedin";
import { Github } from "../images/Github";

const navLinks = [
  { path: "/", label: "Sobre Mim", icon: "01" },
  { path: "/skills", label: "Projetos", icon: "02" },
];

export function SidebarMenu({ onClose }) {
  const location = useLocation();

  return (
    <aside className="flex flex-col h-full p-6 gap-6 overflow-y-auto">
      {/* Close button */}
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center gap-4">
        <Avatar />
        <h2 className="text-2xl font-bold font-mono gradient-text">
          Leonardo Carvalho
        </h2>
        <div className="badge-accent px-4 py-2 rounded-full text-center">
          <span className="text-sm font-medium text-accent font-mono">
            Full-Stack | IA & Automação
          </span>
        </div>
      </div>

      <div className="h-px gradient-accent opacity-20" />

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive
                  ? "nav-active-bg text-accent"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
            >
              <span
                className={`font-mono text-xs ${isActive ? "text-accent" : "text-slate-400 dark:text-slate-600"}`}
              >
                {link.icon}
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="h-px bg-slate-200 dark:bg-slate-800" />

      {/* Social Links */}
      <div className="flex justify-center gap-3">
        <a
          href="https://www.instagram.com/cabelozl/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-accent transition-colors"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-r-carvalho/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-accent transition-colors"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/leonardo-tcarvalho"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-400 hover:text-accent transition-colors"
        >
          <Github />
        </a>
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-center mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  );
}
