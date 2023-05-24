import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Homepage/Home";
import About from "./Containers/AboutPage/About";
import Projects from "./Containers/ProjectsPage/Projects";
import "./App.scss";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="app-background">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
