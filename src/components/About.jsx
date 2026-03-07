import { motion } from 'framer-motion';
import { developer, stats, achievements } from '../data/siteData';

/**
 * About section - short bio, stats cards, and achievements from resume
 */
export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-emerald-500/30 dark:ring-emerald-500/40 shadow-lg border-2 border-white dark:border-zinc-700">
            <img src="/aditya-photo.png" alt={developer.name} className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6"
        >
          I'm a Computer Science student at <strong className="text-zinc-800 dark:text-zinc-200">{developer.college}</strong> (2022 – 2026), passionate about
          full-stack development and UI/UX design. I build scalable web applications with clean interfaces and real-world impact—from
          e-commerce platforms with payments and admin panels to real-time chat apps and analytics dashboards. I'm focused on placements and SDE/UI-UX roles where I can ship quality products and grow as an engineer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
              <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievements from resume */}
        {achievements && achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Achievements</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              {achievements.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-500 mt-1 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
