export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>About Me</span>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Where <em>Logic</em> Meets <em>Creativity</em></h2>
            <p className="about-desc">
              I'm a passionate full-stack developer and video editor based in Batangas.
              I believe the best digital work sits at the intersection of clean code and
              compelling storytelling &mdash; whether that's an elegant web system or a
              cinematic video production.
            </p>
            <p className="about-desc">
              Currently pursuing my <strong>BSIT at Batangas State University</strong>,
              building real-world projects and continuously leveling up my craft.
            </p>
          </div>
          <div className="about-timeline">
            {[
              { icon: 'fa-graduation-cap', title: 'Pangao Integrated School', sub: 'Junior High School' },
              { icon: 'fa-laptop-code', title: 'AICS Lipa — ICT Strand', sub: 'Senior High School' },
              { icon: 'fa-university', title: 'Batangas State University', sub: 'BSIT — Current' },
      { icon: 'fa-trophy', title: 'Best Programmer Award', sub: 'Top recognition in programming excellence', highlight: true },
            ].map((item, i) => (
              <div key={i} className={`timeline-item reveal-up${item.highlight ? ' highlight' : ''}`}>
                <div className="timeline-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
