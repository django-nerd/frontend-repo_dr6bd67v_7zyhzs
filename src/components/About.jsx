import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.06),transparent_60%),radial-gradient(ellipse_at_top_left,rgba(255,0,160,0.1),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-6 text-white/80 leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          I build immersive, high-performance web experiences that blend technical precision with atmospheric design. My work focuses on React Three Fiber, shader-driven visuals, and delightful micro-interactions that feel effortless and human.
        </motion.p>
      </div>
    </section>
  );
}
