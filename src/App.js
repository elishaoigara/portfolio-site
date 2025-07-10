import React, { useEffect } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services'; // ✅ Added
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Services /> {/* ✅ New Services section */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
