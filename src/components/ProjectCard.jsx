import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Chip from './Chip.jsx';
import Card from './Card.jsx';

const ProjectCard = ({ project }) => (
  <motion.div
    className="project-card"
    whileHover={{ y: -6 }}
    transition={{ duration: 0.3 }}
  >
    <Card>
      <div className="project-card__header">
        <h3>{project.title}</h3>
        <span>{project.timeline}</span>
      </div>
      <p>{project.overview}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
      </div>
      <Link className="project-card__link" to={`/projects/${project.slug}`}>
        Explore project
      </Link>
    </Card>
  </motion.div>
);

export default ProjectCard;
