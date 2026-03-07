import { motion } from 'framer-motion';
import { projects } from '../data/siteData';
import ProjectCard from './ProjectCard';

/**
 * Projects section - grid of ProjectCards
 */
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
