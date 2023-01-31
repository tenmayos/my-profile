import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </>
  );
}

export default App;