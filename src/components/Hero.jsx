import { motion } from 'framer-motion';
import { developer } from '../data/siteData';

/**
 * Hero section with intro, CTA buttons, and Framer Motion animations
 */
export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 pt-20 pb-16">
      <div className="mx-auto max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Profile photo - left on desktop, top on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-4 ring-emerald-500/20 dark:ring-emerald-500/30 shadow-xl">
            <img
              src="/aditya-photo.png"
              alt={developer.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl mb-2"
          >
            Hi, I'm Aditya 👋
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            {developer.role}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 md:mx-0 mx-auto"
          >
            {developer.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
          <button
            onClick={() => scrollTo('#projects')}
            className="rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
          >
            View Projects
          </button>
          <a
            href={developer.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-emerald-500 dark:hover:border-emerald-500 text-zinc-800 dark:text-zinc-200 font-medium px-6 py-3 transition-all hover:scale-105"
          >
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="rounded-xl text-emerald-600 dark:text-emerald-400 font-medium px-6 py-3 hover:bg-emerald-500/10 transition-all"
          >
            Contact Me
          </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
