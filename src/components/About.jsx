export default function About() {
  const education = [
    {
      icon: 'fa-solid fa-school',
      name: 'Pangao Integrated School',
      sub: 'Junior High School',
      year: 'JHS',
      highlight: false,
    },
    {
      icon: 'fa-solid fa-laptop-code',
      name: 'AICS Lipa — ICT Strand',
      sub: 'Senior High School',
      year: 'SHS',
      highlight: false,
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      name: 'Batangas State University',
      sub: 'BSIT — Current',
      year: 'NOW',
      highlight: false,
    },
    {
      icon: 'fa-solid fa-trophy',
      name: 'Best Programmer Award',
      sub: 'AICS Lipa — Top recognition in SHS programming',
      year: '★',
      highlight: true,
    },
  ]

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span>About Me</span>
        </div>

        <div className="about-grid">

          {/* ── LEFT — Bio + Stats ── */}
          <div className="about-left reveal-up">
            <p className="about-body">
              I'm a <strong style={{ color: '#fff', fontWeight: 700 }}>full-stack developer</strong> and <strong style={{ color: '#fff', fontWeight: 700 }}>video editor</strong> based in <strong style={{ color: '#fff', fontWeight: 700 }}>Batangas, Philippines</strong>.
              I build modern web products from concept to deployment — clean interfaces,
              solid backends, and systems that scale. Outside of code, I tell stories
              through <strong style={{ color: '#fff', fontWeight: 700 }}>cinematic video editing</strong> and motion work.
            </p>

            <p className="about-body" style={{ marginTop: '-12px' }}>
              Currently studying <strong style={{ color: '#fff', fontWeight: 700 }}>
              Bachelor of Science in Information Technology</strong> at <strong style={{ color: '#fff', fontWeight: 700 }}>Batangas State University</strong>.
              Proud recipient of the <strong style={{ color: '#fff', fontWeight: 700 }}>Best Programmer Award</strong> at <strong style={{ color: '#fff', fontWeight: 700 }}>AICS Lipa</strong>.
            </p>


          </div>

          {/* ── RIGHT — Availability + Education ── */}
          <div className="about-right reveal-up">

            <p className="about-edu-label">Education Path</p>
            <div className="about-edu-list">
              {education.map((item, i) => (
                <div
                  key={i}
                  className={`about-edu-item${item.highlight ? ' highlight' : ''}`}
                >
                  <div className="about-edu-icon">
                    <i className={item.icon} />
                  </div>
                  <div className="about-edu-body">
                    <p className="about-edu-name">{item.name}</p>
                    <p className="about-edu-sub">{item.sub}</p>
                  </div>
                  <span className="about-edu-year">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
