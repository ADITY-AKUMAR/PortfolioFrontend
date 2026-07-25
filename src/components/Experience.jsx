import { motion } from "framer-motion";
import { experience } from "../data/siteData";

function CompanyLogo({ company }) {
  if (company === "Pine Labs") {
    return (
      <img
        src="https://imgs.search.brave.com/n-SVzTkLCoW7UaZ2Vb_Gpp3IjzSx64lgKbTqDZz-jH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZHcxS1B4cnha/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTcwMDUwOTg1NDU4/Mw"
        alt="Pine Labs logo"
        className="h-full w-full object-contain object-center p-2"
      />
    );
  }

  return (
    <span className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-900 dark:text-white">
      {company
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)}
    </span>
  );
}

/**
 * Experience section - premium vertical timeline layout
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-14 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute left-8 top-20 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700"
          />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/70 dark:border-zinc-700/70 bg-white/95 dark:bg-zinc-900/80 shadow-xl shadow-zinc-900/5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center gap-3 border-b border-zinc-200/60 dark:border-zinc-700/60 bg-zinc-50/80 dark:bg-zinc-950/70 px-6 py-5 sm:px-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100/70 dark:bg-zinc-950/70 overflow-hidden">
                    <CompanyLogo company={item.company} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.32em] text-emerald-600">
                          {item.company}
                        </p>
                        <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <div className="mt-3 sm:mt-0 text-right">
                        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                          {item.duration}
                        </p>
                        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 p-6 sm:p-8 md:pl-24">
                  <p className="max-w-3xl text-zinc-600 dark:text-zinc-300 leading-7">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <div
                        key={responsibility}
                        className="flex items-start gap-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                          <svg
                            viewBox="0 0 20 20"
                            className="h-3.5 w-3.5 fill-current"
                            aria-hidden="true"
                          >
                            <path d="M7.629 13.805L4.2 10.242l1.4-1.4 2.029 2.028 4.9-4.9 1.4 1.4-6.3 6.335z" />
                          </svg>
                        </span>
                        <span>{responsibility}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-200/70 dark:border-zinc-700/70 bg-zinc-100/80 dark:bg-zinc-950/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-700 dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
