import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight, HiPlay } from 'react-icons/hi'
import PageTransition from '../../components/Shared/PageTransition'
import CTA from '../../components/CTA/CTA'
import './Gallery.css'

const categories = ['All', 'Forests', 'Water', 'Community', 'Wildlife', 'Reforestation']

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', alt: 'Forest canopy sunlight', category: 'Forests', span: 'tall' },
  { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Mountain landscape', category: 'Forests', span: 'wide' },
  { id: 3, src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80', alt: 'Community gathering', category: 'Community', span: 'normal' },
  { id: 4, src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', alt: 'Tree seedlings nursery', category: 'Reforestation', span: 'normal' },
  { id: 5, src: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=800&q=80', alt: 'River flowing through forest', category: 'Water', span: 'wide' },
  { id: 6, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', alt: 'Youth volunteers planting', category: 'Community', span: 'tall' },
  { id: 7, src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', alt: 'Agroforestry farm', category: 'Reforestation', span: 'normal' },
  { id: 8, src: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80', alt: 'Coastal mangroves', category: 'Water', span: 'normal' },
  { id: 9, src: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800&q=80', alt: 'Conservation training', category: 'Community', span: 'wide' },
  { id: 10, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80', alt: 'Wildlife in habitat', category: 'Wildlife', span: 'normal' },
  { id: 11, src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80', alt: 'Children in forest', category: 'Community', span: 'normal' },
  { id: 12, src: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80', alt: 'Elephant in savanna', category: 'Wildlife', span: 'tall' },
]

const videos = [
  { id: 1, title: 'RECA 2024 Impact Report', thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', duration: '4:32' },
  { id: 2, title: 'Mara River Restoration — Year 3', thumb: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=600&q=80', duration: '6:18' },
  { id: 3, title: 'Youth Conservation Corps 2024', thumb: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', duration: '3:45' },
]

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null) // index into filtered array

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory)

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox(i => (i + 1) % filtered.length)

  // keyboard navigation
  const handleKey = (e) => {
    if (lightbox === null) return
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Gallery — RECA</title>
        <meta name="description" content="Photography and video from RECA's conservation work across East Africa." />
      </Helmet>

      {/* Hero */}
      <section className="page-hero page-hero--gallery">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Visual Stories
          </motion.span>
          <motion.h1 className="page-hero__title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Earth Through<br />Our Lens
          </motion.h1>
          <motion.p className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Photography and film from the forests, rivers, and communities we work with every day.
          </motion.p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="projects-filters" style={{ marginBottom: 'var(--space-8)' }}>
            {categories.map(c => (
              <button
                key={c}
                className={`projects-filter-btn ${activeCategory === c ? 'projects-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div className="gallery-masonry" layout onKeyDown={handleKey} tabIndex={-1}>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={`gallery-item gallery-item--${item.span}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onClick={() => openLightbox(i)}
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__category">{item.category}</span>
                    <p className="gallery-item__alt">{item.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Documentary & Film</span>
            <h2 className="section-title">Watch Our Stories</h2>
            <p className="section-subtitle">
              In-depth films and documentary shorts from our conservation programs.
            </p>
          </div>
          <div className="gallery-videos">
            {videos.map((v, i) => (
              <motion.div
                key={v.id}
                className="gallery-video-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="gallery-video-card__thumb">
                  <img src={v.thumb} alt={v.title} loading="lazy" />
                  <div className="gallery-video-card__play">
                    <HiPlay size={28} />
                  </div>
                  <div className="gallery-video-card__duration">{v.duration}</div>
                </div>
                <div className="gallery-video-card__title">{v.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
              <HiX size={24} />
            </button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">
              <HiChevronLeft size={28} />
            </button>
            <motion.div
              className="lightbox__content"
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox]?.src}
                alt={filtered[lightbox]?.alt}
              />
              <div className="lightbox__caption">
                <span className="lightbox__category">{filtered[lightbox]?.category}</span>
                <p>{filtered[lightbox]?.alt}</p>
              </div>
            </motion.div>
            <button className="lightbox__nav lightbox__nav--next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next">
              <HiChevronRight size={28} />
            </button>
            <div className="lightbox__counter">{lightbox + 1} / {filtered.length}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </PageTransition>
  )
}

export default Gallery
