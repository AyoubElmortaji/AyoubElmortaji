import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AmbientBackground from './components/AmbientBackground.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';
import ToastProvider from './components/ToastProvider.jsx';
import ScrollTopButton from './components/ScrollTopButton.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import Certifications from './pages/Certifications.jsx';
import Awards from './pages/Awards.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  const location = useLocation();

  return (
    <ToastProvider>
      <AmbientBackground />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <ScrollTopButton />
      <Footer />
    </ToastProvider>
  );
};

export default App;
