import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Projects3D from './Projects3D';

const projectData = [
  {
    title: 'Neon Wave Renderer',
    description: 'Procedural WebGL shader playground with audio-reactive ribbons and SSR bloom.',
    tags: ['Three.js', 'GLSL', 'Postprocessing'],
    link: '#',
  },
  {
    title: 'Zen Garden UI Kit',
    description: 'Minimalist component library with micro-interactions powered by Framer Motion.',
    tags: ['React', 'Framer Motion', 'Design'],
    link: '#',
  },
  {
    title: 'Hologram Portfolio',
    description: '3D-first personal site with parallax depth and touch-friendly interactions.',
    tags: ['R3F', 'UX', 'Performance'],
    link: '#',
  },
];

export default function Projects() {
  const projects = useMemo(() => projectData, []);
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(0,240,255,0.08),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(255,0,160,0.12),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Featured Projects
        </motion.h2>

        {/* 3D carousel on md+ screens */}
        <div className="mt-10 hidden md:block">
          <Projects3D
            projects={projects}
            onSelect={(idx) => setActive(idx)}
          />
          <AnimatePresence>
            {active !== null && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{projects[active].title}</h3>
                    <p className="mt-1 text-white/70 text-sm">{projects[active].description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {projects[active].tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded border border-white/10 text-white/80">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={projects[active].link}
                      className="px-4 py-2 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-300 transition-colors"
                    >
                      Open Project
                    </a>
                    <button
                      onClick={() => setActive(null)}
                      className="px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2D fallback / mobile view */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-white/10 text-white/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
