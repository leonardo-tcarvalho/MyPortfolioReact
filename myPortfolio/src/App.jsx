import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";

export function App() {
  return (
    <div className="min-w-full min-h-screen py-10 bg-zinc-950">
      <div className="grid grid-cols-1/4 w-10/12 gap-4 mx-auto">
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts />}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}