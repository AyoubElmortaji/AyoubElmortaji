import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    className="section-header"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
  >
    <p className="section-eyebrow">{subtitle}</p>
    <h2>{title}</h2>
  </motion.div>
);

export default SectionHeader;
