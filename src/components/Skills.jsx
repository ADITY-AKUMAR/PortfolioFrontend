import { motion } from 'framer-motion';
import { skills } from '../data/siteData';

/**
 * Skills section - grouped cards (Frontend, Backend, Other, UI/UX)
 */
export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {groups.map(([groupName, items], groupIndex) => (
            <motion.div
              key={groupName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 p-6 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">{groupName}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
