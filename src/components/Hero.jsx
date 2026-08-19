import { useState } from 'react'

const meta = [
  { label: 'Currently', value: 'Open to Work', link: null },
  { label: 'Featured Work', value: 'PlugNPlayPC ↗', link: 'https://plugnplaypc.vercel.app/Main.html#' },
]

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="hero" id="hero">
      <div className="hero-split">

        {/* ── LEFT PANEL ── */}
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="hero-heading">Hello! I'm Steven</h1>
            <p className="hero-subtitle">
              Building digital experiences from the shores of Batangas.
            </p>
          </div>

          {/* 3-column meta row */}
          <div className="hero-meta-row">
            {meta.map(m => (
              <div className="hero-meta-col" key={m.label}>
                <span className="hero-meta-label">{m.label}</span>
                {m.link ? (
                  <a href={m.link} target="_blank" rel="noopener" className="hero-meta-value hero-meta-link">
                    {m.value}
                  </a>
                ) : (
                  <span className="hero-meta-value">{m.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="hero-divider" />

        {/* ── RIGHT PANEL ── */}
        <div className="hero-right">
          {/* Badge avatar */}
          <div className="hero-badge-wrap">
            {!imgError ? (
              <img
                src="/img/Avatar.png"
                alt="Steven"
                className="hero-badge-img"
                id="profileImg"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="hero-badge-fallback">
                <i className="fa-solid fa-user" />
              </div>
            )}
          </div>

          <p className="hero-card-greeting">Nice to meet you!</p>

          <p className="hero-card-bio">
            Crafting seamless digital experiences through <strong style={{ color: '#fff', fontWeight: 700 }}>code</strong> and <strong style={{ color: '#fff', fontWeight: 700 }}>cinematic storytelling</strong>. <strong style={{ color: '#fff', fontWeight: 700 }}>BSIT</strong> student at <strong style={{ color: '#fff', fontWeight: 700 }}>Batangas State University</strong>.
          </p>

          {/* Socials */}
          <div className="hero-card-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="hero-social-btn" id="heroLinkedin" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="mailto:bibenesguerra25@gmail.com" className="hero-social-btn" id="heroEmail" aria-label="Email">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
