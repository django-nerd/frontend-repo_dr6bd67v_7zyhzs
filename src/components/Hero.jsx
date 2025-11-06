import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft neon gradient overlay to blend with brand palette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.15),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(255,0,160,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="w-full max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="text-cyan-400">Vibe</span>
            <span className="text-fuchsia-500"> Coder</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Cyberpunk Lounge meets Zen Garden. Clean, efficient code wrapped in immersive, atmospheric design.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-cyan-400/90 hover:bg-cyan-400 text-black font-semibold px-5 py-2.5 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/40 text-white font-medium px-5 py-2.5 backdrop-blur-md/30 bg-white/5 transition-colors"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-3 text-sm text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>React • Three.js • WebGL • Framer Motion</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade for smooth section transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
