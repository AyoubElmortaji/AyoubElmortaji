import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import Chip from './Chip.jsx';

const ProjectsGrid = ({ projects }) => {
  const tags = useMemo(() => {
    const all = new Set();
    projects.forEach((project) => project.tags.forEach((tag) => all.add(tag)));
    return ['All', ...Array.from(all)];
  }, [projects]);

  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((project) => project.tags.includes(active));
  }, [active, projects]);

  return (
    <div>
      <div className="filters">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter ${active === tag ? 'active' : ''}`}
            onClick={() => setActive(tag)}
          >
            <Chip label={tag} />
          </button>
        ))}
      </div>
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsGrid;
