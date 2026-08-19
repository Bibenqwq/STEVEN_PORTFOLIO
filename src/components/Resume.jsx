export default function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="container">
        <div className="resume-cta reveal-up">
          <p className="resume-eyebrow">Want to work together?</p>

          <h2 className="resume-heading">
            Let's build<br />something great.
          </h2>

          <p className="resume-sub">
            A full overview of my skills, projects, and education.
            Open for freelance and part-time opportunities.
          </p>

          <a
            href="/file/Resume.pdf"
            target="_blank"
            rel="noopener"
            className="resume-btn"
            id="resumeDownloadBtn"
          >
            <i className="fa-solid fa-file-arrow-down" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
