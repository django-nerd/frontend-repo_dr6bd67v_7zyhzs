import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Wave Renderer',
    description: 'Procedural WebGL shader playground with audio-reactive ribbons and SSR bloom.',
    tags: ['Three.js', 'GLSL', 'Postprocessing'],
  },
  {
    title: 'Zen Garden UI Kit',
    description: 'Minimalist component library with micro-interactions powered by Framer Motion.',
    tags: ['React', 'Framer Motion', 'Design'],
  },
  {
    title: 'Hologram Portfolio',
    description: '3D-first personal site with parallax depth and touch-friendly interactions.',
    tags: ['R3F', 'UX', 'Performance'],
  },
];

export default function Projects() {
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
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
