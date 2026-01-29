const Button = ({ as: Component = 'button', className = '', variant = 'primary', ...props }) => (
  <Component className={`btn btn-${variant} ${className}`} {...props} />
);

export default Button;
