import { useState } from 'react'
import SEO from '../../components/Shared/SEO'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSearch, HiArrowRight, HiClock, HiUser, HiX, HiArrowLeft } from 'react-icons/hi'
import PageTransition from '../../components/Shared/PageTransition'
import CTA from '../../components/CTA/CTA'
import './Blog.css'

const posts = [
  {
    id: 1,
    featured: true,
    title: 'How Indigenous Tree Species Are Transforming Kenya\'s Degraded Highlands',
    category: 'Reforestation',
    author: 'Dr. Grace Njeri',
    date: 'May 15, 2025',
    readTime: '6 min read',
    excerpt: 'Native trees do far more than sequester carbon - they rebuild entire food webs, restore water cycles, and anchor communities. Here\'s what a decade of planting has taught us about doing reforestation right.',
    content: [
      'Indigenous tree species are central to healthy restoration because they are adapted to local soils, rainfall patterns, wildlife, and community needs.',
      'RECA works with community nurseries, local leaders, and field monitors to restore degraded highland areas using tree species that support biodiversity and long-term ecosystem recovery.',
      'The goal is not just to plant trees, but to rebuild living landscapes where forests, farms, water sources, and communities can thrive together.',
    ],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
    color: '#2F7D32',
  },
  {
    id: 2,
    featured: false,
    title: 'Water Is Life: Inside RECA\'s Mara River Restoration Initiative',
    category: 'Water Conservation',
    author: 'Michael Otieno',
    date: 'April 28, 2025',
    readTime: '5 min read',
    excerpt: 'The Mara River feeds one of Africa\'s most iconic ecosystems. Our three-year restoration mission is already showing remarkable results - for wildlife and communities alike.',
    content: [
      'The Mara River restoration initiative focuses on protecting riparian zones, improving water access, and reducing pressure on fragile river ecosystems.',
      'RECA works with communities to restore vegetation along riverbanks, monitor water quality, and promote practices that keep water sources healthy through dry and wet seasons.',
      'This work supports households, farmers, wildlife, and the wider ecosystem that depends on reliable river flow.',
    ],
    image: 'https://plus.unsplash.com/premium_photo-1780079498977-d67a284765c0?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#4FC3F7',
  },
  {
    id: 3,
    featured: false,
    title: 'Youth on the Frontlines: Meet RECA\'s Next Generation of Conservation Leaders',
    category: 'Community',
    author: 'Fatima Hassan',
    date: 'April 10, 2025',
    readTime: '4 min read',
    excerpt: 'Across East Africa, young people are leading the charge for environmental action. These are their stories - and why investing in youth is one of the highest-return conservation strategies.',
    content: [
      'Young people bring energy, creativity, and local knowledge to conservation work. RECA supports youth groups through training, mentorship, and hands-on field activities.',
      'From tree planting to environmental education, youth volunteers help turn conservation from an idea into daily action within their communities.',
      'Investing in young conservation leaders creates long-term impact because they carry the skills, values, and responsibility forward.',
    ],
    image: 'https://images.unsplash.com/photo-1597713891912-0f645d05b573?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#6D4C41',
  },
  {
    id: 4,
    featured: false,
    title: 'The Science of Soil: Why Ground Health is the Foundation of All Conservation',
    category: 'Science',
    author: 'Dr. Peter Kamau',
    date: 'March 22, 2025',
    readTime: '7 min read',
    excerpt: 'Without healthy soils, there are no forests, no clean water, no food security. RECA\'s chief science officer explains why soil restoration is central to everything we do.',
    content: [
      'Healthy soil holds water, stores carbon, supports plant growth, and protects land from erosion. When soil is degraded, entire ecosystems become weaker.',
      'RECA integrates soil restoration into reforestation, agroforestry, and watershed work so that planted areas can recover naturally and remain productive.',
      'By improving soil health, communities can grow stronger crops, restore vegetation, and build resilience against drought and climate stress.',
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80',
    color: '#6D4C41',
  },
  {
    id: 5,
    featured: false,
    title: 'Mangroves: Africa\'s Forgotten Climate Champions',
    category: 'Climate Action',
    author: 'Dr. Grace Njeri',
    date: 'March 5, 2025',
    readTime: '5 min read',
    excerpt: 'Mangrove forests store up to five times more carbon than tropical rainforests, yet they\'re disappearing at alarming rates. RECA\'s coastal program is fighting back.',
    content: [
      'Mangroves protect coastlines, support fisheries, store carbon, and provide habitat for countless species. Their loss affects both nature and coastal livelihoods.',
      'RECA\'s mangrove restoration work focuses on community-led planting, habitat protection, and awareness around the value of coastal ecosystems.',
      'Restoring mangroves helps communities adapt to climate change while rebuilding one of the planet\'s most powerful natural carbon sinks.',
    ],
    image: 'https://images.unsplash.com/photo-1779399642977-7c6bfd7bc472?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#4CAF50',
  },
  {
    id: 6,
    featured: false,
    title: 'Agroforestry in Practice: How Trees Are Saving Smallholder Farms',
    category: 'Community',
    author: 'Michael Otieno',
    date: 'February 18, 2025',
    readTime: '6 min read',
    excerpt: 'In Kenya\'s Central Highlands, farmers who integrated trees into their plots saw yields increase by an average of 34%. Here\'s the story behind the numbers.',
    content: [
      'Agroforestry brings trees back into farming systems, improving soil fertility, shade, water retention, and long-term farm productivity.',
      'RECA trains farmers to choose useful tree species, manage seedlings, and integrate trees with crops in ways that support both food security and conservation.',
      'The result is healthier land, stronger harvests, and farms that are better prepared for climate uncertainty.',
    ],
    image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=700&q=80',
    color: '#D4A017',
  },
]

const categories = ['All', 'Reforestation', 'Water Conservation', 'Climate Action', 'Community', 'Science']

function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)

  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  const filtered = rest.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const openPost = (post) => {
    setSelectedPost(post)
    document.body.style.overflow = 'hidden'
  }

  const closePost = () => {
    setSelectedPost(null)
    document.body.style.overflow = ''
  }

  return (
    <PageTransition>
      <SEO
        title="Blog - RECA"
        description="Read conservation insights, field stories, and environmental science updates from the RECA team."
        path="/blog"
        pageName="Blog"
      />

      <section className="page-hero page-hero--blog">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Field Notes & Insights
          </motion.span>
          <motion.h1 className="page-hero__title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Stories from<br />the Front Lines
          </motion.h1>
          <motion.p className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Science, community voices, and conservation insights from our team in the field.
          </motion.p>
        </div>
      </section>

      {featured && (
        <section className="section">
          <div className="container">
            <span className="section-eyebrow">Featured Article</span>
            <motion.article
              className="blog-featured"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="blog-featured__image-wrap">
                <img src={featured.image} alt={featured.title} loading="lazy" />
                <div className="blog-featured__category" style={{ background: featured.color }}>
                  {featured.category}
                </div>
              </div>
              <div className="blog-featured__content">
                <div className="blog-featured__meta">
                  <span><HiUser size={14} /> {featured.author}</span>
                  <span>{featured.date}</span>
                  <span><HiClock size={14} /> {featured.readTime}</span>
                </div>
                <h2 className="blog-featured__title">{featured.title}</h2>
                <p className="blog-featured__excerpt">{featured.excerpt}</p>
                <button className="btn btn--primary" type="button" onClick={() => openPost(featured)}>
                  Read Article <HiArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      <section className="section" style={{ background: 'var(--color-bg-alt)', paddingTop: 0 }}>
        <div className="container">
          <div className="blog-toolbar">
            <div className="blog-search">
              <HiSearch size={18} className="blog-search__icon" />
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="blog-search__input"
                aria-label="Search blog posts"
              />
            </div>

            <div className="blog-categories">
              {categories.map(c => (
                <button
                  key={c}
                  type="button"
                  className={`projects-filter-btn ${activeCategory === c ? 'projects-filter-btn--active' : ''}`}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="blog-grid">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="blog-card__image-wrap">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <div className="blog-card__category" style={{ background: post.color }}>{post.category}</div>
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span><HiUser size={13} /> {post.author}</span>
                      <span><HiClock size={13} /> {post.readTime}</span>
                    </div>
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <button className="blog-card__link" type="button" onClick={() => openPost(post)}>
                      Read more <HiArrowRight size={15} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <span>🔍</span>
              <p>No articles found for <strong>"{search}"</strong></p>
              <button className="btn btn--ghost" type="button" onClick={() => { setSearch(''); setActiveCategory('All') }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="article-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && closePost()}
          >
            <motion.div
              className="article-modal"
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedPost.title}
            >
              {/* Sticky top bar */}
              <div className="article-modal__topbar">
                <button
                  className="article-modal__back-btn"
                  type="button"
                  onClick={closePost}
                  aria-label="Back to articles"
                >
                  <HiArrowLeft size={16} />
                  <span>All articles</span>
                </button>
                <span
                  className="article-modal__topbar-category"
                  style={{ background: selectedPost.color }}
                >
                  {selectedPost.category}
                </span>
                <button
                  className="article-modal__close"
                  type="button"
                  onClick={closePost}
                  aria-label="Close article"
                >
                  <HiX size={18} />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="article-modal__scroll">
                {/* Hero image */}
                <div className="article-modal__hero">
                  <img src={selectedPost.image} alt={selectedPost.title} loading="lazy" />
                  <div className="article-modal__hero-gradient" style={{ '--article-color': selectedPost.color }} />
                </div>

                {/* Body */}
                <div className="article-modal__body">
                  <div className="article-modal__meta">
                    <span><HiUser size={13} /> {selectedPost.author}</span>
                    <span>{selectedPost.date}</span>
                    <span><HiClock size={13} /> {selectedPost.readTime}</span>
                  </div>

                  <h2 className="article-modal__title">{selectedPost.title}</h2>

                  <div className="article-modal__accent-bar" style={{ background: selectedPost.color }} />

                  <p className="article-modal__lead">{selectedPost.excerpt}</p>

                  <div className="article-modal__content">
                    {selectedPost.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </PageTransition>
  )
}

export default Blog