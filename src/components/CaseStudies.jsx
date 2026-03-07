import { motion } from 'framer-motion';
import { caseStudies } from '../data/siteData';

/**
 * Case Studies section - UI/UX cards with Problem, Research, Wireframe, Solution, Result + Figma link
 */
export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center"
        >
          Case Studies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6 hover:shadow-lg hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">{study.title}</h3>

              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-zinc-500 dark:text-zinc-400">Problem</dt>
                  <dd className="text-zinc-700 dark:text-zinc-300">{study.problem}</dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-500 dark:text-zinc-400">Research</dt>
                  <dd className="text-zinc-700 dark:text-zinc-300">{study.research}</dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-500 dark:text-zinc-400">Wireframe</dt>
                  <dd className="text-zinc-700 dark:text-zinc-300">{study.wireframe}</dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-500 dark:text-zinc-400">Solution</dt>
                  <dd className="text-zinc-700 dark:text-zinc-300">{study.solution}</dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-500 dark:text-zinc-400">Result</dt>
                  <dd className="text-zinc-700 dark:text-zinc-300">{study.result}</dd>
                </div>
              </dl>

              <a
                href={study.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-zinc-800 dark:bg-zinc-700 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors"
              >
                <FigmaIcon className="w-4 h-4" />
                Figma Prototype
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FigmaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 1-3.019-3.019c0-1.665 1.355-3.019 3.019-3.019h3.117v3.019H8.148zm7.704 3.019c0 1.665-1.355 3.019-3.019 3.019h-3.117v-6.038h3.117c1.665 0 3.019 1.355 3.019 3.019zm-3.019-1.47a1.55 1.55 0 0 0 1.548-1.549 1.55 1.55 0 0 0-1.548-1.548h-1.569v3.097h1.569z" />
    </svg>
  );
}
