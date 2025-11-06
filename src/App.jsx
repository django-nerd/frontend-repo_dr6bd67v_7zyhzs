import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ProjectsConstellation from './components/ProjectsConstellation.jsx';
import CaseStudyModal from './components/CaseStudyModal.jsx';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <main>
        <section className="relative">
          <ProjectsConstellation onOpenProject={setActiveProject} />
        </section>
      </main>

      <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
