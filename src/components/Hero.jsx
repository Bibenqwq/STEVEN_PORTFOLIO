import { useState } from 'react'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-content">

        <h1 className="hero-title">
          <span className="hero-title-line reveal-line">Steven</span>
          <span className="hero-title-sub reveal-line">
            <em>Developer</em> &amp; Video Editor
          </span>
        </h1>
        <p className="hero-desc reveal-line">
          Crafting seamless digital experiences through code and cinematic
          storytelling. BSIT student at <strong>Batangas State University</strong>

        </p>
        <div className="hero-cta reveal-line">
          <a href="#projects" className="btn btn-primary" id="heroProjectsBtn">View Projects</a>
          <a href="#resume" className="btn btn-ghost" id="heroContactBtn">Get in Touch</a>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-wrap">
          {!imgError ? (
            <img
              src="/img/Avatar.jpg"
              alt="Steven"
              className="hero-photo"
              id="profileImg"
              onError={() => setImgError(true)}
            />
          ) : null}
          <div className="floating-tag tag-1"><i className="fa-brands fa-react"></i> React</div>
          <div className="floating-tag tag-2"><i className="fa-solid fa-film"></i> Premiere Pro</div>
          <div className="floating-tag tag-3"><i className="fa-brands fa-php"></i> PHP</div>
          <div className="floating-tag tag-4"><i className="fa-solid fa-code"></i> Full Stack</div>
        </div>
      </div>
    </section>
  )
}
