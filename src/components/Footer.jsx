export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Logo */}
          <span className="footer-logo">S<span className="dot">.</span></span>

          {/* Social icons */}
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="footer-social" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" className="footer-social" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" className="footer-social" aria-label="YouTube">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="mailto:steven@email.com" className="footer-social" aria-label="Email">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © {year} Steven · Developer &amp; Video Editor
          </p>
        </div>
      </div>
    </footer>
  )
}
