import { useContent } from '../utils/useContent.js';

const Footer = () => {
  const { personal } = useContent();

  return (
    <footer className="footer">
      <div>
        <strong>{personal.name}</strong>
        <p>{personal.title}</p>
      </div>
      <div className="footer__links">
        <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${personal.email}`}>Email</a>
      </div>
      <p className="footer__note">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
