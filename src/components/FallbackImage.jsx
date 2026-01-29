import { useState } from 'react';

const FallbackImage = ({ sources, alt, className = '', onClick, role }) => {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (index < sources.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div className={`image-placeholder ${className}`} role={role} onClick={onClick}>
        <div className="image-placeholder__glow" />
        <div className="image-placeholder__text">Image unavailable</div>
      </div>
    );
  }

  return (
    <img
      src={sources[index]}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
      onClick={onClick}
      role={role}
    />
  );
};

export default FallbackImage;
