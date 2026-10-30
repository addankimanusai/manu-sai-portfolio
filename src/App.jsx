import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GithubSection from './sections/GithubSection';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-background-main text-text-main flex flex-col relative selection:bg-accent-purple/30 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Home />
        <About />
        <Skills />
        <Projects />
        <GithubSection />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
