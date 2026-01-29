const Card = ({ className = '', ...props }) => (
  <div className={`card ${className}`} {...props} />
);

export default Card;
