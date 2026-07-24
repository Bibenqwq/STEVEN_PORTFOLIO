const projects = [
  {
    id: 'projPlugNPlay',
    featured: true,
    gradient: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
    screenUrl: 'plugnplaypc.vercel.app',
    screenTag: 'PC Builder',
    screenIcon: 'fa-desktop',
    screenType: 'card-row',
    previewImg: 'https://image.thum.io/get/width/800/crop/500/noanimate/https://plugnplaypc.vercel.app/Main.html',
    tags: ['React', 'Vercel', 'E-Commerce'],
    title: 'PlugNPlayPC',
    desc: 'A modern PC builder and e-commerce platform for custom computer components. Built with React, featuring component compatibility checks and a seamless checkout experience.',
    links: [{ href: 'https://plugnplaypc.vercel.app/Main.html#', label: 'Live Demo', id: 'linkPlugNPlay', icon: 'fa-arrow-up-right-from-square', primary: true }],
  },
  {
    id: 'projResort',
    featured: false,
    gradient: 'linear-gradient(135deg,#0d4027 0%,#1a6b3a 50%,#2d9e5f 100%)',
    screenUrl: 'test123-one-beige.vercel.app',
    screenTag: 'Resort Booking',
    screenIcon: 'fa-umbrella-beach',
    screenType: 'hero',
    previewImg: 'https://image.thum.io/get/width/800/crop/500/noanimate/https://test123-one-beige.vercel.app/',
    tags: ['PHP', 'MySQL', 'System'],
    title: 'Resort Website System',
    desc: 'Full-stack resort management system with booking, reservation tracking, admin dashboard, and customer management built with PHP and MySQL.',
    links: [{ href: 'https://test123-one-beige.vercel.app/', label: 'Live Demo', id: 'linkResort', icon: 'fa-arrow-up-right-from-square', primary: true }],
  },
  {
    id: 'projPeakSociety',
    featured: false,
    gradient: 'linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 50%,#2a1a0a 100%)',
    screenUrl: 'peaksociety.vercel.app',
    screenTag: 'Streetwear Brand',
    screenIcon: 'fa-shirt',
    screenType: 'hero',
    previewImg: '/img/peak.png',
    tags: ['HTML/CSS', 'JavaScript', 'Vercel'],
    title: 'Peak Society',
    desc: 'A sleek streetwear brand website with a modern dark aesthetic. Features product showcases, brand storytelling, and a premium e-commerce-ready layout.',
    links: [{ href: 'https://peaksociety.vercel.app/', label: 'Live Demo', id: 'linkPeakSociety', icon: 'fa-arrow-up-right-from-square', primary: true }],
  },
]

function ScreenContent({ type, tag, icon }) {
  return (
    <div className="screen-content">
      {type === 'card-row' && (
        <div className="screen-card-row">
          <div className="screen-mini-card pc-card"></div>
          <div className="screen-mini-card pc-card"></div>
          <div className="screen-mini-card pc-card"></div>
        </div>
      )}
      {type === 'hero' && <div className="screen-hero-block"></div>}
      {type === 'form' && <div className="screen-form-block"></div>}
      <div className="screen-tag">
        <i className={`fa-solid ${icon}`} style={{ marginRight: '6px' }}></i>{tag}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>Programming</span>
        </div>
        <h2 className="section-title">Featured <em>Projects</em></h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className={`project-card${p.featured ? ' featured' : ''}`} id={p.id}>
              <div className="project-img-wrap">
                <div className="project-img" style={{ background: p.gradient }}>
                  {p.previewImg ? (
                    <div className="project-preview-screen">
                      <div className="screen-bar">
                        <span className="dot r"></span>
                        <span className="dot y"></span>
                        <span className="dot g"></span>
                        <span className="screen-url">{p.screenUrl}</span>
                      </div>
                      <img
                        src={p.previewImg}
                        alt={p.title}
                        style={{ width: '100%', height: 'calc(100% - 32px)', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                      />
                    </div>
                  ) : (
                    <div className="project-preview-screen">
                      <div className="screen-bar">
                        <span className="dot r"></span>
                        <span className="dot y"></span>
                        <span className="dot g"></span>
                        <span className="screen-url">{p.screenUrl}</span>
                      </div>
                      <ScreenContent type={p.screenType} tag={p.screenTag} icon={p.screenIcon} />
                    </div>
                  )}
                </div>
              </div>
              <div className="project-info">
                <div className="project-tag-row">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-links">
                  {p.links.map((l, i) =>
                    l.primary ? (
                      <a key={i} href={l.href} target="_blank" rel="noopener"
                        className="project-link primary" id={l.id}>
                        <i className={`fa-solid ${l.icon}`}></i> {l.label}
                      </a>
                    ) : (
                      <span key={i} className="project-link ghost">
                        <i className={`fa-solid ${l.icon}`}></i> {l.label}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
