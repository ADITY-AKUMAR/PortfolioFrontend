import { motion } from "framer-motion";
import { achievements } from "../data/siteData";

export default function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-zinc-950/90">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-emerald-500/10 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center gap-3 text-2xl mb-4">
                <span>{item.icon}</span>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.details}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
