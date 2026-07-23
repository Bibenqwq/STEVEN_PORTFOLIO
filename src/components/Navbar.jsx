export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const toggle = () => setMobileMenuOpen(o => !o)
  const close = () => setMobileMenuOpen(false)

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-logo">
          <span className="nav-logo-text">S<span className="dot">.</span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link" onClick={close}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={close}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={close}>Projects</a></li>
          <li><a href="#videos" className="nav-link" onClick={close}>Videos</a></li>
          <li>
            <a href="/file/Resume.pdf" target="_blank" rel="noopener" className="nav-link" >
              Resume
            </a>
          </li>
        </ul>
        <button
          className={`nav-menu-btn${mobileMenuOpen ? ' open' : ''}`}
          id="menuBtn"
          aria-label="Toggle menu"
          onClick={toggle}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`} id="mobileMenu">
        <ul>
          <li><a href="#about" className="mobile-link" onClick={close}>About</a></li>
          <li><a href="#skills" className="mobile-link" onClick={close}>Skills</a></li>
          <li><a href="#projects" className="mobile-link" onClick={close}>Projects</a></li>
          <li><a href="#videos" className="mobile-link" onClick={close}>Videos</a></li>
          <li><a href="/file/Resume.pdf" target="_blank" rel="noopener" className="mobile-link" onClick={close}>Resume</a></li>
        </ul>
      </div>
    </>
  )
}
