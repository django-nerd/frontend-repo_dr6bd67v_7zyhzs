import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 95 },
  { name: 'Three.js', level: 90 },
  { name: 'WebGL/GLSL', level: 85 },
  { name: 'TypeScript', level: 88 },
  { name: 'Framer Motion', level: 92 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.08),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,0,160,0.12),transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Skills & Tech Stack
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{s.name}</span>
                <span className="text-white/60">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
