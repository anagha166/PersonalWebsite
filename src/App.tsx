import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactMePage from "./Pages/ContactMePage/ContactMePage";
import ScrollToTop from "./Components/ScrollToTop";
import ResumePage from "./Pages/ResumePage/ResumePage";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactMePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
