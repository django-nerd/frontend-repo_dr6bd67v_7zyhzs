import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('bg-black');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Vibe Coder</span>
          <span>Built with React • Three.js • Framer Motion</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
