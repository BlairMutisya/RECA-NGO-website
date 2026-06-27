import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { focusAreas } from '../../data/siteData'
import './FocusAreas.css'

function FocusAreas() {
  return (
    <section className="focus-areas section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">Our Focus Areas</h2>
          <p className="section-subtitle">
            Six interconnected pillars of conservation and community development,
            driving regenerative change across ecosystems and human communities.
          </p>
        </div>

        <div className="focus-areas__grid">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.id}
              className="focus-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <div
                className="focus-card__icon-wrap"
                style={{ '--card-color': area.color }}
              >
                <span className="focus-card__icon" aria-hidden="true">{area.icon}</span>
              </div>
              <h3 className="focus-card__title">{area.title}</h3>
              <p className="focus-card__desc">{area.description}</p>
              <div className="focus-card__stat" style={{ color: area.color }}>
                {area.stat}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="focus-areas__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/projects" className="btn btn--ghost">
            Explore All Projects
            <HiArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FocusAreas
