import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={onClose} />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="pointer-events-auto absolute inset-x-0 top-10 mx-auto w-[min(1100px,92vw)] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-black to-zinc-950 shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70">{project.tech}</p>
              </div>
              <button onClick={onClose} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full">
              {/* Placeholder interactive area - could mount dedicated R3F or Spline scene per project */}
              <div className="absolute inset-0 grid place-items-center text-white/70">
                Full-screen interactive case study area for {project.title}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08),transparent_60%)]" />
            </div>

            <div className="px-6 py-6 grid gap-4 md:grid-cols-2 text-sm text-white/80">
              <p>
                This case study showcases the problem, approach, and outcomes with rich 3D visuals. It can embed live prototypes, interactive scenes, and annotated breakdowns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center justify-between"><span>Role</span><span className="text-white/60">Design & Dev</span></li>
                <li className="flex items-center justify-between"><span>Stack</span><span className="text-white/60">{project.tech}</span></li>
                <li className="flex items-center justify-between"><span>Year</span><span className="text-white/60">2025</span></li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
