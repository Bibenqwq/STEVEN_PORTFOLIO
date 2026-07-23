import { useState } from 'react'

const devSkills = [
  { icon: 'fa-brands fa-react', name: 'React.js', bg: 'rgba(97,218,251,.12)', color: '#61DAFB' },
  { icon: 'fa-brands fa-js', name: 'JavaScript', bg: 'rgba(240,219,79,.12)', color: '#F0DB4F' },
  { icon: 'fa-brands fa-php', name: 'PHP', bg: 'rgba(119,123,237,.12)', color: '#777BED' },
  { icon: 'fa-brands fa-html5', name: 'HTML / CSS', bg: 'rgba(228,77,38,.12)', color: '#E84D38' },
  { icon: 'fa-solid fa-database', name: 'MySQL', bg: 'rgba(247,120,107,.12)', color: '#F7786B' },
  { icon: 'fa-brands fa-node-js', name: 'Node.js', bg: 'rgba(104,159,56,.12)', color: '#689F38' },
  { icon: 'fa-brands fa-python', name: 'Python', bg: 'rgba(79,140,201,.12)', color: '#4F8CC9' },
  { icon: 'fa-brands fa-git-alt', name: 'Git', bg: 'rgba(247,197,101,.12)', color: '#F7C565' },
]

const videoSkills = [
  { icon: 'fa-solid fa-film', name: 'Premiere Pro', bg: 'rgba(154,108,255,.12)', color: '#9A6CFF' },
  { icon: 'fa-solid fa-wand-magic-sparkles', name: 'Capcut', bg: 'rgba(0,181,226,.12)', color: '#00B5E2' },
  { icon: 'fa-solid fa-sliders', name: 'Color Grading', bg: 'rgba(0,128,255,.12)', color: '#0080FF' },
  { icon: 'fa-solid fa-scissors', name: 'Video Editing', bg: 'rgba(255,80,80,.12)', color: '#FF5050' },
  { icon: 'fa-solid fa-music', name: 'Audio Mixing', bg: 'rgba(100,200,150,.12)', color: '#64C896' },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('dev')

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>Skills</span>
        </div>
        <h2 className="section-title">My <em>Toolkit</em></h2>

        <div className="skills-tabs">
          <button
            className={`skills-tab${activeTab === 'dev' ? ' active' : ''}`}
            data-tab="dev" id="tabDev"
            onClick={() => setActiveTab('dev')}
          >
            Development
          </button>
          <button
            className={`skills-tab${activeTab === 'video' ? ' active' : ''}`}
            data-tab="video" id="tabVideo"
            onClick={() => setActiveTab('video')}
          >
            Video Editing
          </button>
        </div>

        <div className={`skills-panel${activeTab === 'dev' ? ' active' : ''}`} id="panelDev">
          <div className="skills-grid">
            {devSkills.map((s) => (
              <div className="skill-card" key={s.name}>
                <div className="skill-icon" style={{ background: s.bg, color: s.color }}>
                  <i className={s.icon}></i>
                </div>
                <span className="skill-name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`skills-panel${activeTab === 'video' ? ' active' : ''}`} id="panelVideo">
          <div className="skills-grid">
            {videoSkills.map((s) => (
              <div className="skill-card" key={s.name}>
                <div className="skill-icon" style={{ background: s.bg, color: s.color }}>
                  <i className={s.icon}></i>
                </div>
                <span className="skill-name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
