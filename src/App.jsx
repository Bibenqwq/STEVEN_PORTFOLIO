import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Videos from './components/Videos'
import VideoModal from './components/VideoModal'
import Resume from './components/Resume'
import Footer from './components/Footer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState({ id: '', title: '' })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openModal = (id, title) => {
    setActiveVideo({ id, title })
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setActiveVideo({ id: '', title: '' })
    document.body.style.overflow = ''
  }

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal-up, .reveal-line').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])



  // Nav scroll effect
  useEffect(() => {
    const nav = document.getElementById('nav')
    const handler = () => nav?.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>

      <div className="noise"></div>

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Videos onOpenModal={openModal} />
      <VideoModal
        isOpen={modalOpen}
        videoId={activeVideo.id}
        onClose={closeModal}
      />
      <Resume />
      <Footer />
    </>
  )
}
