const categories = [
  {
    label: 'Frontend',
    icon: 'fa-solid fa-code',
    skills: [
      { icon: 'fa-brands fa-react',    name: 'React.js',    color: '#61DAFB' },
      { icon: 'fa-brands fa-js',       name: 'JavaScript',  color: '#F0DB4F' },
      { icon: 'fa-brands fa-html5',    name: 'HTML / CSS',  color: '#E84D38' },
    ],
  },
  {
    label: 'Backend & Data',
    icon: 'fa-solid fa-server',
    skills: [
      { icon: 'fa-brands fa-node-js',  name: 'Node.js',     color: '#689F38' },
      { icon: 'fa-brands fa-php',      name: 'PHP',         color: '#9B87CF' },
      { icon: 'fa-solid fa-database',  name: 'MySQL',       color: '#4EAADB' },
    ],
  },
  {
    label: 'Languages',
    icon: 'fa-solid fa-terminal',
    skills: [
      { icon: 'fa-brands fa-python',   name: 'Python',      color: '#4F8CC9' },
      { icon: 'fa-brands fa-js',       name: 'JavaScript',  color: '#F0DB4F' },
      { icon: 'fa-brands fa-php',      name: 'PHP',         color: '#9B87CF' },
    ],
  },
  {
    label: 'Tools & DevOps',
    icon: 'fa-solid fa-wrench',
    skills: [
      { icon: 'fa-brands fa-git-alt',  name: 'Git',         color: '#F1502F' },
      { icon: 'fa-brands fa-github',   name: 'GitHub',      color: '#f0f0f0' },
      { icon: 'fa-brands fa-figma',    name: 'Figma',       color: '#A259FF' },
    ],
  },
  {
    label: 'Video Editing',
    icon: 'fa-solid fa-film',
    skills: [
      { icon: 'fa-solid fa-film',                  name: 'Premiere Pro',  color: '#9A6CFF' },
      { icon: 'fa-solid fa-wand-magic-sparkles',   name: 'CapCut',        color: '#00B5E2' },
      { icon: 'fa-solid fa-sliders',               name: 'Color Grading', color: '#FF9800' },
    ],
  },
  {
    label: 'Creative',
    icon: 'fa-solid fa-palette',
    skills: [
      { icon: 'fa-solid fa-scissors',  name: 'Video Editing', color: '#FF5252' },
      { icon: 'fa-solid fa-music',     name: 'Audio Mixing',  color: '#4CAF50' },
      { icon: 'fa-solid fa-image',     name: 'Photo Edit',    color: '#F7971E' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        {/* Header */}
        <div className="skills-top">
          <div>
            <div className="section-label">
              <span className="label-line" />
              <span>Skills</span>
            </div>
            <h2 className="section-title">My <em>Toolkit</em></h2>
          </div>
          <p className="skills-intro">
            Technologies, tools, and creative software I use to design,
            build, and ship products.
          </p>
        </div>

        {/* Category grid */}
        <div className="skills-categories reveal-up">
          {categories.map(cat => (
            <div className="skills-cat" key={cat.label}>
              <p className="skills-cat-label">
                <i className={cat.icon} />
                {cat.label}
              </p>
              <div className="skills-pills">
                {cat.skills.map(s => (
                  <div className="skill-pill" key={s.name + cat.label}>
                    <i className={s.icon} style={{ color: s.color }} />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
