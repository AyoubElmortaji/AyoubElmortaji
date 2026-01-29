import { motion } from 'framer-motion';
import Card from './Card.jsx';

const CertificationsList = ({ certifications }) => (
  <div className="certifications">
    {certifications.map((cert, index) => (
      <motion.div
        key={cert}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <Card>
          <h3>{cert}</h3>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default CertificationsList;
