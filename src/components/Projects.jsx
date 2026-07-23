const projects = [
  {
    id: 'projPlugNPlay',
    featured: true,
    gradient: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
    screenUrl: 'plugnplaypc.vercel.app',
    screenTag: 'PC Builder',
    screenIcon: 'fa-desktop',
    screenType: 'card-row',
    tags: ['React', 'Vercel', 'E-Commerce'],
    title: 'PlugNPlayPC',
    desc: 'A modern PC builder and e-commerce platform for custom computer components. Built with React, featuring component compatibility checks and a seamless checkout experience.',
    links: [{ href: 'https://plugnplaypc.vercel.app/Main.html#', label: 'Live Demo', id: 'linkPlugNPlay', icon: 'fa-arrow-up-right-from-square', primary: true }],
  },
  {
    id: 'projResort',
    featured: false,
    gradient: 'linear-gradient(135deg,#0d4027 0%,#1a6b3a 50%,#2d9e5f 100%)',
    screenUrl: 'Resort Website',
    screenTag: 'Resort Booking',
    screenIcon: 'fa-umbrella-beach',
    screenType: 'hero',
    tags: ['PHP', 'MySQL', 'System'],
    title: 'Resort Website System',
    desc: 'Full-stack resort management system with booking, reservation tracking, admin dashboard, and customer management built with PHP and MySQL.',
    links: [{ label: 'Private Repo', icon: 'fa-lock', ghost: true }],
  },
  {
    id: 'projComingSoon',
    featured: false,
    gradient: 'linear-gradient(135deg,#2d1b4e 0%,#4a2c7a 50%,#6a3d9a 100%)',
    screenUrl: 'Coming Soon',
    screenTag: 'In Progress',
    screenIcon: 'fa-clock',
    screenType: 'form',
    tags: ['HTML/CSS', 'JavaScript'],
    title: 'New Project',
    desc: 'Something exciting is brewing. A new project currently in active development — stay tuned for the reveal.',
    links: [{ label: 'In Progress', icon: 'fa-clock', ghost: true }],
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
        <i className={`fa-solid ${icon}`} style={{marginRight:'6px'}}></i>{tag}
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
                  <div className="project-preview-screen">
                    <div className="screen-bar">
                      <span className="dot r"></span>
                      <span className="dot y"></span>
                      <span className="dot g"></span>
                      <span className="screen-url">{p.screenUrl}</span>
                    </div>
                    <ScreenContent type={p.screenType} tag={p.screenTag} icon={p.screenIcon} />
                  </div>
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
