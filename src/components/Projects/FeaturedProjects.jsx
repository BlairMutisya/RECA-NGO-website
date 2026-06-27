import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiLocationMarker } from 'react-icons/hi'
import { featuredProjects } from '../../data/siteData'
import './FeaturedProjects.css'

function FeaturedProjects() {
  return (
    <section className="featured-projects section" style={{ background: 'var(--color-bg-alt)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            From the highlands of Kenya to the rivers of Tanzania — real projects
            driving measurable impact on the ground.
          </p>
        </div>

        <div className="fp__grid">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              className="fp__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="fp__image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="fp__image"
                  loading="lazy"
                />
                <div className="fp__category-badge" style={{ background: project.color }}>
                  {project.category}
                </div>
              </div>

              <div className="fp__body">
                <div className="fp__meta">
                  <span className="fp__location">
                    <HiLocationMarker size={14} />
                    {project.location}
                  </span>
                  <span className="fp__year">{project.year}</span>
                </div>

                <h3 className="fp__title">{project.title}</h3>
                <p className="fp__desc">{project.description}</p>

                <div className="fp__footer">
                  <div className="fp__impact">
                    <span className="fp__impact-label">Impact</span>
                    <span className="fp__impact-value" style={{ color: project.color }}>
                      {project.impact}
                    </span>
                  </div>
                  <Link to="/projects" className="fp__link">
                    Learn more <HiArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="fp__all-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/projects" className="btn btn--primary btn--lg">
            View All Projects
            <HiArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
