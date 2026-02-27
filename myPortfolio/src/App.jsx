import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Sidebar } from "./components/Sidebar";
import { SidebarMenu } from "./components/SidebarMenu";
import { ThemeToggle } from "./components/ThemeToggle";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1e] transition-colors duration-300 bg-grid-pattern relative">
          {/* Decorative background orbs */}
          <div className="orb-1" />
          <div className="orb-2" />

          {/* Top gradient accent line */}
          <div className="h-[3px] gradient-accent" />

          <div className="relative z-10 max-w-7xl mx-auto lg:grid lg:grid-cols-layout lg:gap-6 lg:py-8 lg:px-6 min-h-[calc(100vh-3px)]">
            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex flex-col min-h-full">
              {/* Mobile Header */}
              <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-30">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Abrir menu"
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
                <span className="font-mono font-bold text-lg gradient-text">
                  LC
                </span>
                <ThemeToggle />
              </div>

              {/* Content Card */}
              <div className="flex-1 lg:bg-white lg:dark:bg-slate-900/60 lg:backdrop-blur-sm lg:border lg:border-slate-200 lg:dark:border-slate-800/50 lg:rounded-2xl lg:overflow-hidden">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                </Routes>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${mobileMenuOpen ? "visible" : "invisible"}`}
          >
            <div
              className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
              onClick={() => setMobileMenuOpen(false)}
            />
            <div
              className={`absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
              <SidebarMenu onClose={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
