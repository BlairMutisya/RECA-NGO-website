import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import PageTransition from '../../components/Shared/PageTransition'
import SectionHeader from '../../components/Shared/SectionHeader'
import CTA from '../../components/CTA/CTA'
import './Impact.css'

const bigStats = [
  { value: 5000, suffix: '+', label: 'Trees Planted', icon: '🌳', color: '#2F7D32' },
  { value: 10, suffix: '+', label: 'Communities Supported', icon: '🏘️', color: '#4CAF50' },
  { value: 5, suffix: '+', label: 'Water Sources Restored', icon: '💧', color: '#4FC3F7' },
  { value: 500, suffix: '+', label: 'Volunteers Engaged', icon: '🤝', color: '#6D4C41' },
  { value: 500, suffix: '+', label: 'Students Educated', icon: '📚', color: '#0288D1' },
  { value: 500, suffix: '+', label: 'Farmers Trained', icon: '🌾', color: '#D4A017' },
  { value: 2, suffix: ' ha', label: 'Land Under Restoration', icon: '🗺️', color: '#2F7D32' },
  { value: 2, suffix: '', label: 'Policy Frameworks Influenced', icon: '📋', color: '#4CAF50' },
]

const stories = [
  {
    id: 1,
    name: 'Mary Wanjiku',
    location: 'Nyeri County, Kenya',
    story: 'After RECA\'s watershed team restored the springs near our village, our children no longer walk 5km for water. Now I have time to grow vegetables and send my kids to school.',
    before: 'Daily 5km water walk, declining crop yields',
    after: 'Year-round clean water access, thriving kitchen garden',
    initials: 'MW',
  },
  {
    id: 2,
    name: 'Peter Omondi',
    location: 'Kisumu, Kenya',
    story: 'I joined RECA\'s agroforestry program three years ago. My farm now has 200 indigenous trees, and my maize yields have doubled. I\'m also earning from selling seedlings.',
    before: 'Degraded farmland, unpredictable harvests',
    after: 'Thriving agroforest, doubled income',
    initials: 'PO',
  },
  {
    id: 3,
    name: 'Amina Juma',
    location: 'Mombasa, Kenya',
    story: 'As a fisherwoman, I watched the mangroves disappear and the fish with them. RECA\'s coastal program has brought back 500 hectares of mangroves — and our livelihoods.',
    before: 'Collapsed mangrove cover, declining fish stocks',
    after: 'Restored mangroves, recovering marine ecosystem',
    initials: 'AJ',
  },
]

const sdgs = [
  { number: '6', title: 'Clean Water & Sanitation', color: '#00AAD4' },
  { number: '13', title: 'Climate Action', color: '#3F7E44' },
  { number: '15', title: 'Life on Land', color: '#56C02B' },
  { number: '1', title: 'No Poverty', color: '#E5243B' },
  { number: '2', title: 'Zero Hunger', color: '#DDA63A' },
  { number: '17', title: 'Partnerships', color: '#19486A' },
]

function StatCard({ stat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <motion.div
      ref={ref}
      className="impact-stat-card"
      style={{ '--stat-color': stat.color }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.6 }}
      whileHover={{ y: -6 }}
    >
      <span className="impact-stat-card__icon">{stat.icon}</span>
      <div className="impact-stat-card__number">
        {inView ? <CountUp start={0} end={stat.value} duration={2.2} separator="," suffix={stat.suffix} /> : `0${stat.suffix}`}
      </div>
      <div className="impact-stat-card__label">{stat.label}</div>
    </motion.div>
  )
}

function Impact() {
  return (
    <PageTransition>
      <Helmet>
        <title>Our Impact — RECA</title>
        <meta name="description" content="Explore RECA's measurable conservation impact — trees planted, communities supported, water sources restored, and lives changed." />
      </Helmet>

      {/* Hero */}
      <section className="page-hero page-hero--impact">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Measuring What Matters
          </motion.span>
          <motion.h1 className="page-hero__title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Real Impact.<br />Verified Results.
          </motion.h1>
          <motion.p className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Every number represents a tree in the ground, a family with clean water, a community with hope.
          </motion.p>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="By the Numbers" title="A Decade of Measurable Change" subtitle="Independently verified impact data from our monitoring and evaluation team." />
          <div className="impact-stats-grid">
            {bigStats.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} />)}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <SectionHeader eyebrow="Human Stories" title="Lives Transformed" subtitle="Behind every statistic is a person, a family, a community whose life has fundamentally changed." />
          <div className="impact-stories-grid">
            {stories.map((s, i) => (
              <motion.div key={s.id} className="impact-story-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}>
                <div className="impact-story-card__header">
                  <div className="impact-story-card__avatar">{s.initials}</div>
                  <div>
                    <div className="impact-story-card__name">{s.name}</div>
                    <div className="impact-story-card__location">📍 {s.location}</div>
                  </div>
                </div>
                <p className="impact-story-card__quote">"{s.story}"</p>
                <div className="impact-story-card__before-after">
                  <div className="impact-story-card__before">
                    <span className="impact-story-card__ba-label">Before</span>
                    <span className="impact-story-card__ba-text">{s.before}</span>
                  </div>
                  <div className="impact-story-card__arrow">→</div>
                  <div className="impact-story-card__after">
                    <span className="impact-story-card__ba-label">After</span>
                    <span className="impact-story-card__ba-text">{s.after}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Global Alignment" title="Contributing to the UN SDGs" subtitle="Our work directly advances six of the United Nations Sustainable Development Goals." />
          <div className="impact-sdg-grid">
            {sdgs.map((sdg, i) => (
              <motion.div key={sdg.number} className="impact-sdg-card"
                style={{ '--sdg-color': sdg.color }}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}>
                <div className="impact-sdg-card__number">SDG {sdg.number}</div>
                <div className="impact-sdg-card__title">{sdg.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}

export default Impact
