import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black overflow-hidden">
      {/* Neon gradients (non-blocking) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_0%_0%,rgba(0,240,255,0.12),transparent),radial-gradient(800px_400px_at_100%_100%,rgba(255,0,160,0.12),transparent)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6g8QsS3jO5m-hero-scene/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Vibe Coder
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-white/70 max-w-2xl"
        >
          Cyberpunk Lounge meets Zen Garden — crafting immersive 3D experiences with React Three Fiber, Three.js, and motion design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <a href="#projects" className="px-4 py-2 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-300 transition-colors">
            Explore Work
          </a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
