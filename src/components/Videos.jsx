import { useRef, useEffect } from 'react'

const videos = [
  { id: 'PN81f5S-IiY', title: 'PROJECT 1', tool: 'CapCut', featured: true },
  { id: '6aK6lKZcqlY', title: 'PROJECT 2', tool: 'CapCut' },
  { id: '02Vb20SgBy4', title: 'PROJECT 3', tool: 'CapCut' },
  { id: 'UPjlnkvm2kw', title: 'PROJECT 4', tool: 'Premiere Pro' },
  { id: 'OKgUehAryG0', title: 'PROJECT 5', tool: 'CapCut' },
]

function VideoCard({ video, onOpenModal }) {
  return (
    <div
      className={`vid-card${video.featured ? ' vid-featured' : ''}`}
      onClick={() => onOpenModal(video.id, video.title)}
    >
      <div className="vid-thumb">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          onError={e => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
          alt={video.title}
          className="vid-img"
          draggable={false}
        />
        <div className="vid-overlay">
          <div className="vid-play">
            <i className="fa-solid fa-play" />
          </div>
        </div>
        {video.featured && <span className="vid-badge">Featured</span>}
      </div>

      <div className="vid-meta">
        <span className="vid-tool">
          <i className="fa-solid fa-video" />
          {video.tool}
        </span>
        <span className="vid-name">{video.title}</span>
      </div>
    </div>
  )
}

export default function Videos({ onOpenModal }) {
  const stripRef = useRef(null)

  useEffect(() => {
    const el = stripRef.current
    if (!el) return
    let isDown = false, startX, scrollLeft

    const onDown = (e) => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft }
    const onLeave = () => { isDown = false }
    const onUp = () => { isDown = false }
    const onMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.5
    }

    el.addEventListener('mousedown', onDown)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseup', onUp)
    el.addEventListener('mousemove', onMove)
    return () => {
      el.removeEventListener('mousedown', onDown)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mouseup', onUp)
      el.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section className="section videos-section" id="videos">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span>Video Editing</span>
        </div>
        <div className="videos-head">
          <h2 className="section-title">Cinematic <em>Works</em></h2>
          <p className="videos-hint">
            <i className="fa-solid fa-hand-pointer" /> Drag to explore
          </p>
        </div>
      </div>

      <div className="vid-strip-wrap" ref={stripRef}>
        <div className="vid-strip" style={{ paddingLeft: 56, paddingRight: 56 }}>
          {videos.map(v => (
            <VideoCard key={v.id} video={v} onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  )
}
