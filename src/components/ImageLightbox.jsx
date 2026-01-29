import { AnimatePresence, motion } from 'framer-motion';
import FallbackImage from './FallbackImage.jsx';

const ImageLightbox = ({ isOpen, onClose, images, currentIndex, onSelect }) => {
  if (!images?.length) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="lightbox__close" onClick={onClose} aria-label="Close gallery">
            ✕
          </button>
          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <FallbackImage sources={[images[currentIndex]]} alt="Project gallery" className="lightbox__image" />
          </motion.div>
          <div className="lightbox__thumbs">
            {images.map((image, index) => (
              <button
                key={image}
                className={`lightbox__thumb ${index === currentIndex ? 'active' : ''}`}
                onClick={() => onSelect(index)}
              >
                <FallbackImage sources={[image]} alt="thumbnail" className="lightbox__thumb-image" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
