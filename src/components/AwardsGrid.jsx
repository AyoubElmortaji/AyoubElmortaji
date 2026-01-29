import { motion } from 'framer-motion';
import Card from './Card.jsx';

const AwardsGrid = ({ awards }) => (
  <div className="awards-grid">
    {awards.map((award) => (
      <motion.div
        key={award.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <h3>{award.title}</h3>
          <p>{award.issuer}</p>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default AwardsGrid;
