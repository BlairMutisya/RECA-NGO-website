import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HiSearch, HiArrowRight, HiClock, HiUser } from 'react-icons/hi'
import PageTransition from '../../components/Shared/PageTransition'
import SectionHeader from '../../components/Shared/SectionHeader'
import CTA from '../../components/CTA/CTA'
import './Blog.css'

const posts = [
  {
    id: 1, featured: true,
    title: 'How Indigenous Tree Species Are Transforming Kenya\'s Degraded Highlands',
    category: 'Reforestation', author: 'Dr. Grace Njeri', date: 'May 15, 2025', readTime: '6 min read',
    excerpt: 'Native trees do far more than sequester carbon — they rebuild entire food webs, restore water cycles, and anchor communities. Here\'s what a decade of planting has taught us about doing reforestation right.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
    color: '#2F7D32',
  },
  {
    id: 2, featured: false,
    title: 'Water Is Life: Inside RECA\'s Mara River Restoration Initiative',
    category: 'Water Conservation', author: 'Michael Otieno', date: 'April 28, 2025', readTime: '5 min read',
    excerpt: 'The Mara River feeds one of Africa\'s most iconic ecosystems. Our three-year restoration mission is already showing remarkable results — for wildlife and communities alike.',
    image: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=700&q=80',
    color: '#4FC3F7',
  },
  {
    id: 3, featured: false,
    title: 'Youth on the Frontlines: Meet RECA\'s Next Generation of Conservation Leaders',
    category: 'Community', author: 'Fatima Hassan', date: 'April 10, 2025', readTime: '4 min read',
    excerpt: 'Across East Africa, young people are leading the charge for environmental action. These are their stories — and why investing in youth is one of the highest-return conservation strategies.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80',
    color: '#6D4C41',
  },
  {
    id: 4, featured: false,
    title: 'The Science of Soil: Why Ground Health is the Foundation of All Conservation',
    category: 'Science', author: 'Dr. Peter Kamau', date: 'March 22, 2025', readTime: '7 min read',
    excerpt: 'Without healthy soils, there are no forests, no clean water, no food security. RECA\'s chief science officer explains why soil restoration is central to everything we do.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80',
    color: '#6D4C41',
  },
  {
    id: 5, featured: false,
    title: 'Mangroves: Africa\'s Forgotten Climate Champions',
    category: 'Climate Action', author: 'Dr. Grace Njeri', date: 'March 5, 2025', readTime: '5 min read',
    excerpt: 'Mangrove forests store up to five times more carbon than tropical rainforests, yet they\'re disappearing at alarming rates. RECA\'s coastal program is fighting back.',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=80',
    color: '#4CAF50',
  },
  {
    id: 6, featured: false,
    title: 'Agroforestry in Practice: How Trees Are Saving Smallholder Farms',
    category: 'Community', author: 'Michael Otieno', date: 'February 18, 2025', readTime: '6 min read',
    excerpt: 'In Kenya\'s Central Highlands, farmers who integrated trees into their plots saw yields increase by an average of 34%. Here\'s the story behind the numbers.',
    image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=700&q=80',
    color: '#D4A017',
  },
]

const categories = ['All', 'Reforestation', 'Water Conservation', 'Climate Action', 'Community', 'Science']

function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  const filtered = rest.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <PageTransition>
      <Helmet>
        <title>Blog — RECA</title>
        <meta name="description" content="Conservation insights, field stories, and environmental science from the RECA team." />
      </Helmet>

      {/* Hero */}
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

      {/* Featured Post */}
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
                <button className="btn btn--primary">
                  Read Article <HiArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Search + Filter + Grid */}
      <section className="section" style={{ background: 'var(--color-bg-alt)', paddingTop: 0 }}>
        <div className="container">
          <div className="blog-toolbar">
            {/* Search */}
            <div className="blog-search">
              <HiSearch size={18} className="blog-search__icon" />
              <input
                type="search"
                placeholder="Search articles…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="blog-search__input"
                aria-label="Search blog posts"
              />
            </div>
            {/* Category filter */}
            <div className="blog-categories">
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
                    <button className="blog-card__link">
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
              <button className="btn btn--ghost" onClick={() => { setSearch(''); setActiveCategory('All') }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}

export default Blog
