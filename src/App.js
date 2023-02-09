import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;