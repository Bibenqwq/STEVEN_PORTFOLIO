export default function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="container">
        <div className="resume-center">
          <p className="resume-eyebrow">Want to know more?</p>
          <h2 className="resume-title">Download my <em>Resume</em></h2>
          <p className="resume-sub">A full overview of my experience, skills, and education.</p>
          <a
            href="/file/Resume.pdf"
            target="_blank"
            rel="noopener"
            className="btn btn-primary resume-btn"
            id="resumeDownloadBtn"
          >
            <i className="fa-solid fa-file-arrow-down"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
