import { useState, useEffect } from 'react'

// Functional UI SVG Icons
const Icons = {
  external: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  lock: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  chevronLeft: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  chevronRight: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
}

const projects = [
  {
    id: 'projPlugNPlay',
    num: '01',
    title: 'PlugNPlayPC',
    category: 'E-Commerce & PC Builder',
    tagline: 'Custom PC configuration & component compatibility platform',
    desc: 'An all-in-one custom PC building and e-commerce platform engineered for enthusiasts and first-time builders. Features automated hardware compatibility verification, wattage estimation, responsive part selection, and an optimized checkout experience.',
    tags: ['React', 'Vercel', 'Tailwind', 'E-Commerce', 'PC Builder'],
    features: [
      'Real-time hardware compatibility & wattage calculation engine',
      'Interactive component configurator with live dynamic pricing',
      'Streamlined cart and checkout flow with responsive filtering',
    ],
    iconType: 'desktop',
    url: 'plugnplaypc.vercel.app',
    link: 'https://plugnplaypc.vercel.app/Main.html#',
    linkId: 'linkPlugNPlay',
    previewImg: '/img/plugnplay.png',
    shipped: true,
  },
  {
    id: 'projKuyaLukes',
    num: '02',
    title: 'KuyaLukesPlace',
    category: 'Full-Stack Management System',
    tagline: 'Resort booking & reservation management platform',
    desc: 'A full-stack hospitality management system built to streamline resort bookings, room reservation schedules, customer records, and administrative reporting in real-time.',
    tags: ['PHP', 'MySQL', 'Full-Stack', 'Admin Dashboard', 'Management'],
    features: [
      'Interactive reservation calendar & automated booking workflow',
      'Role-based administrative control panel & guest database',
      'Automated rate calculation & schedule status monitoring',
    ],
    iconType: 'hotel',
    url: 'test123-one-beige.vercel.app',
    link: 'https://test123-one-beige.vercel.app/',
    linkId: 'linkKuyaLukes',
    previewImg: '/img/kuyalukesplace.png',
    shipped: false,
  },
  {
    id: 'projPeakSociety',
    num: '03',
    title: 'Peak Society',
    category: 'YouTube Automation Community',
    tagline: 'Interactive discussion & knowledge-sharing hub for YTA creators',
    desc: 'An online community platform built for YouTube Automation (YTA) creators and channel managers. Members can exchange insights, leave comments, ask questions, and share proven tips & tricks to scale automated YouTube channels.',
    tags: ['HTML/CSS', 'JavaScript', 'Vercel', 'YouTube Automation', 'Community Forum'],
    features: [
      'Interactive comment & discussion boards for YTA creators',
      'Curated repository of channel growth tips, tricks & workflows',
      'Sleek dark community interface tailored for creator collaboration',
    ],
    iconType: 'community',
    url: 'peaksociety.vercel.app',
    link: 'https://peaksociety.vercel.app/',
    linkId: 'linkPeakSociety',
    previewImg: '/img/peak.png',
    shipped: true,
  },
  {
    id: 'projIphone17',
    num: '04',
    title: 'iPhone 17 Pro Max',
    category: 'Interactive Concept Showcase',
    tagline: 'Apple-inspired immersive product launch & feature reveal',
    desc: 'A precision-crafted Apple concept showcase page demonstrating high-end animations, interactive colorway switching, responsive component breakdowns, and cinematic presentation.',
    tags: ['HTML/CSS', 'JavaScript', 'Vercel', 'Web Animation', 'Showcase'],
    features: [
      'Cinematic scroll-driven visual transitions & micro-interactions',
      'Dynamic device finish / color switcher with live preview',
      'Ultra-clean Apple-inspired typography & grid alignment',
    ],
    iconType: 'smartphone',
    url: 'iphone-17-pro-max-amber.vercel.app',
    link: 'https://iphone-17-pro-max-amber.vercel.app/',
    linkId: 'linkIphone17',
    previewImg: '/img/iphone17.png',
    shipped: true,
  },
]

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const activeProject = projects[activeIdx]

  const selectProject = (idx) => {
    if (idx === activeIdx) return
    setIsFading(true)
    setTimeout(() => {
      setActiveIdx(idx)
      setIsFading(false)
    }, 120)
  }

  const prevProject = () => {
    const next = (activeIdx - 1 + projects.length) % projects.length
    selectProject(next)
  }

  const nextProject = () => {
    const next = (activeIdx + 1) % projects.length
    selectProject(next)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight') {
        nextProject()
      } else if (e.key === 'ArrowLeft') {
        prevProject()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIdx])

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Header */}
        <div className="pj-header">
          <div>
            <div className="section-label">
              <span className="label-line" />
              <span>Programming & Design</span>
            </div>
            <h2 className="section-title">
              Featured <em>Projects</em>
            </h2>
          </div>
          <p className="pj-header-sub">
            A curated spotlight of deployed web applications, custom management platforms, and interactive digital experiences.
          </p>
        </div>

        {/* Top Segmented Selector Bar */}
        <div className="pj-selector-bar">
          <div className="pj-tabs-track">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                className={`pj-tab-btn ${idx === activeIdx ? 'pj-tab-btn--active' : ''}`}
                onClick={() => selectProject(idx)}
                aria-selected={idx === activeIdx}
              >
                <span className="pj-tab-num">{p.num}</span>
                <span className="pj-tab-title">{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Spotlight Showcase Box */}
        <div
          className="pj-showcase-box"
          id={activeProject.id}
          style={{
            opacity: isFading ? 0.75 : 1,
            transition: 'opacity 0.15s ease',
          }}
        >
          {/* Left Details Column */}
          <div className="pj-details-col">
            <div>
              {/* Meta Badges */}
              <div className="pj-meta-badges">
                <span className="pj-cat-badge">
                  {activeProject.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="pj-title-group" style={{ marginTop: '16px' }}>
                <span className="pj-spotlight-num">PROJECT {activeProject.num}</span>
                <h3 className="pj-showcase-title">{activeProject.title}</h3>
                <p className="pj-showcase-tagline">{activeProject.tagline}</p>
              </div>

              {/* Description */}
              <p className="pj-showcase-desc" style={{ marginTop: '14px' }}>
                {activeProject.desc}
              </p>

              {/* Highlights */}
              <div className="pj-features-list" style={{ marginTop: '20px' }}>
                <div className="pj-features-label">Key Highlights & Architecture</div>
                <div className="pj-features-grid">
                  {activeProject.features.map((feat, i) => (
                    <div key={i} className="pj-feature-item">
                      <span>• {feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Tech Stack Tags */}
              <div className="pj-showcase-tags" style={{ marginBottom: '18px' }}>
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="pj-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Row */}
              <div className="pj-action-row">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-primary-btn"
                  id={activeProject.linkId}
                >
                  <span>Visit Live Project</span>
                  {Icons.external}
                </a>

                <div className="pj-nav-controls">
                  <button
                    type="button"
                    className="pj-nav-arrow"
                    onClick={prevProject}
                    aria-label="Previous project"
                    title="Previous project"
                  >
                    {Icons.chevronLeft}
                  </button>
                  <span className="pj-nav-counter">
                    {activeProject.num} / 0{projects.length}
                  </span>
                  <button
                    type="button"
                    className="pj-nav-arrow"
                    onClick={nextProject}
                    aria-label="Next project"
                    title="Next project"
                  >
                    {Icons.chevronRight}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mockup Window Column */}
          <div className="pj-mockup-col">
            <div className="pj-browser-window">
              {/* Browser bar */}
              <div className="pj-browser-bar">
                <div className="pj-browser-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="pj-browser-url">
                  {Icons.lock}
                  <span>https://{activeProject.url}</span>
                </div>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-browser-external"
                  title="Open live link in new tab"
                >
                  {Icons.external}
                </a>
              </div>

              {/* Browser viewport image */}
              <div
                className="pj-browser-viewport"
                onClick={() => window.open(activeProject.link, '_blank', 'noopener,noreferrer')}
                title="Click to view live site"
              >
                <img
                  key={activeProject.previewImg}
                  src={activeProject.previewImg}
                  alt={`${activeProject.title} preview screenshot`}
                  className="pj-browser-img"
                  loading="lazy"
                />
                <div className="pj-viewport-overlay">
                  <span className="pj-overlay-launch-btn">
                    {Icons.external}
                    Open Live Project
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="pj-thumb-strip">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className={`pj-thumb-card ${idx === activeIdx ? 'pj-thumb-card--active' : ''}`}
              onClick={() => selectProject(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') selectProject(idx)
              }}
            >
              <div className="pj-thumb-img-wrap">
                <img src={p.previewImg} alt={p.title} className="pj-thumb-img" />
                <span className="pj-thumb-num">{p.num}</span>
              </div>
              <div className="pj-thumb-info">
                <span className="pj-thumb-title">{p.title}</span>
                <span className="pj-thumb-cat">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
