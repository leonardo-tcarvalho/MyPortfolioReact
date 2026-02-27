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

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:sticky lg:top-8 z-20 h-fit bg-white dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800/50 rounded-2xl p-6 gap-5">
      {/* Profile */}
      <div className="flex flex-col items-center gap-4">
        <Avatar />
        <div className="text-center">
          <h1 className="text-2xl font-bold font-mono gradient-text">
            Leonardo Carvalho
          </h1>
        </div>
        <div className="badge-accent px-4 py-2 rounded-full text-center">
          <span className="text-sm font-medium text-accent font-mono">
            Full-Stack | IA & Automação
          </span>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="h-px gradient-accent opacity-20 rounded-full" />

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "nav-active-bg text-accent nav-active"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
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

      {/* Divider */}
      <div className="h-px bg-slate-200 dark:bg-slate-800/50" />

      {/* Social Links */}
      <div className="flex justify-center gap-2">
        <a
          href="https://www.instagram.com/cabelozl/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-r-carvalho/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/leonardo-tcarvalho"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200"
        >
          <Github />
        </a>
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-center">
        <ThemeToggle />
      </div>
    </aside>
  );
}
