const videos = [
  { id: 'PN81f5S-IiY', title: 'PROJECT 1', tool: 'Premiere Pro', featured: true },
  { id: '6aK6lKZcqlY', title: 'PROJECT 2', tool: 'After Effects' },
  { id: '02Vb20SgBy4', title: 'PROJECT 3', tool: 'Premiere Pro' },
  { id: 'UPjlnkvm2kw', title: 'PROJECT 4', tool: 'After Effects' },
  { id: 'OKgUehAryG0', title: 'PROJECT 5', tool: 'Premiere Pro' },
]

function VideoCard({ video, onOpenModal }) {
  return (
    <div className={`video-card${video.featured ? ' featured-video' : ''}`}>
      <div className="video-thumb">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          onError={e => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
          alt={video.title}
          className="video-thumb-img"
        />
        <div className="video-play-overlay" onClick={() => onOpenModal(video.id, video.title)}>
          <div className="play-btn-large"><i className="fa-solid fa-play"></i></div>
        </div>
        {video.featured && <span className="video-badge">Featured</span>}
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <div className="video-meta">
          <span><i className="fa-brands fa-youtube"></i> YouTube</span>
          <span><i className="fa-solid fa-video"></i> {video.tool}</span>
        </div>
      </div>
    </div>
  )
}

export default function Videos({ onOpenModal }) {
  return (
    <section className="section videos-section" id="videos">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>Video Editing</span>
        </div>
        <h2 className="section-title">Cinematic <em>Works</em></h2>
        <p className="videos-subtitle">
          Each frame crafted with intention &mdash; from concept to color grade.
        </p>

        <div className="videos-grid">
          {videos.map(v => (
            <VideoCard key={v.id} video={v} onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  )
}
