import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/30 bg-black/30 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold tracking-widest uppercase"
          style={{ letterSpacing: '0.2em' }}
        >
          <span className="text-cyan-400">Vibe</span>
          <span className="text-fuchsia-500">Coder</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { href: '#projects', label: 'Projects' },
            { href: '#skills', label: 'Skills' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2, color: '#00F0FF' }}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  );
}
