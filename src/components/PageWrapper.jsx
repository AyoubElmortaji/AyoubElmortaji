import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => (
  <motion.main
    className="page"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.main>
);

export default PageWrapper;
