import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import Button from './Button.jsx';
import { withBase } from '../utils/assetPaths.js';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/awards', label: 'Awards' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const location = useLocation();

  useEffect(() => {
    const activeLink = navRef.current?.querySelector('.nav-link.active');
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicator({ left: offsetLeft, width: offsetWidth });
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      const activeLink = navRef.current?.querySelector('.nav-link.active');
      if (activeLink) {
        setIndicator({ left: activeLink.offsetLeft, width: activeLink.offsetWidth });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (to) => {
    const ref = linkRefs.current[to];
    if (ref) {
      setIndicator({ left: ref.offsetLeft, width: ref.offsetWidth });
    }
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="brand" onClick={() => handleNavClick('/')}
        >
          <span className="brand__glow">AE</span>
          <span className="brand__text">Ayoub</span>
        </NavLink>
        <nav className={`nav ${open ? 'nav--open' : ''}`} ref={navRef}>
          <span className="nav-indicator" style={{ left: indicator.left, width: indicator.width }} />
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              ref={(el) => {
                linkRefs.current[link.to] = el;
              }}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => handleNavClick(link.to)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <Button as="a" href={withBase('assets/Ayoub-ELMORTAJI-CV.pdf')} className="btn-ghost">
            Resume
          </Button>
          <button className="nav-toggle" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
