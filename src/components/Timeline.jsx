import { motion } from 'framer-motion';
import Card from './Card.jsx';

const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map((item, index) => (
      <motion.div
        className="timeline__item"
        key={`${item.institution || item.company}-${index}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card>
          <div className="timeline__header">
            <h3>{item.institution || item.company}</h3>
            <span>{item.period}</span>
          </div>
          <p className="timeline__role">{item.program || item.role}</p>
          <ul>
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default Timeline;
