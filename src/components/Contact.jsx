import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sent! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(255,0,160,0.12),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contact
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              placeholder="Email"
              required
            />
          </div>
          <textarea
            rows={5}
            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            placeholder="Your message"
            required
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 text-black font-semibold px-5 py-2.5 transition-colors"
            >
              Send Message
            </button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
