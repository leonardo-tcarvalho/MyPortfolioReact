import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";

export function App() {
  return (
    <div className="w-full min-h-screen py-10 bg-zinc-950">
      <div className="max-w-[90rem] grid grid-cols-1/4 w-10/12 gap-4 mx-auto">
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
