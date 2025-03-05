import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing'
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactMePage from './Pages/ContactMePage/ContactMePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactMePage />} />
    </Routes>
  );
}

export default App;