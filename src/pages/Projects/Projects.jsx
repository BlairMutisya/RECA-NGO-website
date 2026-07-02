import { useState } from 'react'
import SEO from '../../components/Shared/SEO'
import { motion, AnimatePresence } from 'framer-motion'
import { HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import PageTransition from '../../components/Shared/PageTransition'
import SectionHeader from '../../components/Shared/SectionHeader'
import CTA from '../../components/CTA/CTA'
import './Projects.css'

const allProjects = [
  {
    id: 1, title: 'Great Rift Valley Reforestation', category: 'Reforestation',
    location: 'Kenya', year: '2023–Completed', impact: '5K trees planted',
    description: 'Restoring 1.2 hectares of degraded forest along the Great Rift Valley escarpment using indigenous tree species and community nurseries.',
    image: 'https://images.unsplash.com/photo-1669397137034-a9577aec5435?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#2F7D32',
  },
  {
    id: 2, title: 'Mara River Watershed Restoration', category: 'Water',
    location: 'Kenya & Tanzania', year: '2024–Completed', impact: '5 water sources restored',
    description: 'Rehabilitating riparian ecosystems and community water infrastructure along the ecologically critical Mara River basin.',
    image: 'https://plus.unsplash.com/premium_photo-1780079498977-d67a284765c0?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#4FC3F7',
  },

  {
    id: 3, title: 'Coastal Mangrove Restoration', category: 'Reforestation',
    location: 'Kenya Coast', year: '2026–Ongoing', impact: '1.2 ha mangroves restored',
    description: 'Restoring mangrove ecosystems along the Kenyan coast to protect shorelines, support fisheries, and sequester carbon.',
    image: 'https://images.unsplash.com/photo-1779399642977-7c6bfd7bc472?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', color: '#2F7D32',
  },
]

const filters = ['All', 'Reforestation', 'Water']

function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === active)

  return (
    <PageTransition>
      <SEO
        title="Projects - RECA"
        description="Explore RECA conservation projects in reforestation, water conservation, ecosystem restoration, and community climate resilience."
        path="/projects"
        pageName="Projects"
      />

      {/* Hero */}
      <section className="page-hero page-hero--projects">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our Work on the Ground
          </motion.span>
          <motion.h1 className="page-hero__title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            Projects That<br />Renew the Earth
          </motion.h1>
          <motion.p className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
            From highland forests to coastal mangroves — real conservation, measurable results.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="projects-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`projects-filter-btn ${active === f ? 'projects-filter-btn--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="project-card__image-wrap">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-card__badge" style={{ background: project.color }}>
                      {project.category}
                    </div>
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span><HiLocationMarker size={13} /> {project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__desc">{project.description}</p>
                    <div className="project-card__footer">
                      <div className="project-card__impact">
                        <span className="project-card__impact-label">Impact</span>
                        <span className="project-card__impact-value" style={{ color: project.color }}>{project.impact}</span>
                      </div>
                      <button className="project-card__link">
                        Learn more <HiArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}

export default Projects
