import { Route, Routes } from "react-router-dom";

const Projects = () => {
  return (
    <>
    <div className="options-container"> 
    <div>
        CGI
    </div>
    <div>
        VIDEOS
    </div>
    <div>
        UI DESIGN
    </div>
    </div>
    <Routes basename="/projects">
      <Route path="*" element={<h1>cgi</h1>} />
      <Route path="/video" element={<h1> video</h1>} />
      <Route path="/design" element={<h1>design</h1>} />
    </Routes>
    </>
  );
};

export default Projects;
