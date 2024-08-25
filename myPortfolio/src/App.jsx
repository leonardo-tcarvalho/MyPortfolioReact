import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Sidebar } from "./components/Sidebar";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";

export function App() {
  return (
    <div className="w-full min-h-screen max-lg:py-0 lg:py-10 bg-zinc-950">
      <div className="max-lg:flex max-lg:items-center max-lg:flex-col sm:max-w-[90rem] max-lg:w-full lg:grid lg:grid-cols-1/4 lg:w-10/12 gap-4 mx-auto">
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
