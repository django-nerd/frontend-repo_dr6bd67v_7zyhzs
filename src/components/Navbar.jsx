import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <Rocket className="w-5 h-5 text-cyan-400" />
          <span className="font-semibold">Vibe Coder</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
              {i.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden p-2 rounded-md border border-white/10 text-white/80" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur"
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            {items.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                {i.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
