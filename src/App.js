import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </>
  );
}

export default App;