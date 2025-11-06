import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-600 grid place-items-center shadow-[0_0_20px_#06b6d4]">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-wide">Vibe Coder</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            cyberpunk x zen
          </span>
        </nav>
      </div>
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </header>
  );
}
