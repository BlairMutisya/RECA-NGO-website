import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import PageTransition from '../../components/Shared/PageTransition'
import SectionHeader from '../../components/Shared/SectionHeader'
import CTA from '../../components/CTA/CTA'
import './Projects.css'

const allProjects = [
  {
    id: 1, title: 'Great Rift Valley Reforestation', category: 'Reforestation',
    location: 'Kenya', year: '2022–Ongoing', impact: '1.2M trees planted',
    description: 'Restoring 50,000 hectares of degraded forest along the Great Rift Valley escarpment using indigenous tree species and community nurseries.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80', color: '#2F7D32',
  },
  {
    id: 2, title: 'Mara River Watershed Restoration', category: 'Water',
    location: 'Kenya & Tanzania', year: '2021–Ongoing', impact: '45 water sources restored',
    description: 'Rehabilitating riparian ecosystems and community water infrastructure along the ecologically critical Mara River basin.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80', color: '#4FC3F7',
  },
  {
    id: 3, title: 'Community Climate Resilience Program', category: 'Climate',
    location: 'East Africa', year: '2020–Ongoing', impact: '200+ communities reached',
    description: 'Building grassroots climate adaptation capacity across 200+ rural communities, combining traditional knowledge with modern science.',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=700&q=80', color: '#4CAF50',
  },
  {
    id: 4, title: 'Aberdare Forest Corridor Project', category: 'Reforestation',
    location: 'Kenya', year: '2023–Ongoing', impact: '800K trees planted',
    description: 'Creating wildlife corridors between the Aberdare Range and Mount Kenya through strategic reforestation of farmland buffer zones.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80', color: '#2F7D32',
  },
  {
    id: 5, title: 'Uganda Wetlands Conservation', category: 'Water',
    location: 'Uganda', year: '2022–2024', impact: '12,000 ha wetlands protected',
    description: 'Protecting and restoring critical wetland ecosystems in the Lake Victoria basin that support millions of people and countless species.',
    image: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=700&q=80', color: '#4FC3F7',
  },
  {
    id: 6, title: 'Green Schools Initiative', category: 'Education',
    location: 'East Africa', year: '2021–Ongoing', impact: '80,000 students reached',
    description: 'Integrating environmental education into school curricula and establishing school forest gardens across 400 primary schools.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80', color: '#0288D1',
  },
  {
    id: 7, title: 'Agroforestry Livelihoods Program', category: 'Community',
    location: 'Kenya & Rwanda', year: '2020–Ongoing', impact: '5,200 farmers trained',
    description: 'Training smallholder farmers in regenerative agroforestry practices that increase food security while restoring degraded land.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80', color: '#6D4C41',
  },
  {
    id: 8, title: 'Coastal Mangrove Restoration', category: 'Reforestation',
    location: 'Kenya Coast', year: '2023–Ongoing', impact: '500 ha mangroves restored',
    description: 'Restoring mangrove ecosystems along the Kenyan coast to protect shorelines, support fisheries, and sequester carbon.',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=80', color: '#2F7D32',
  },
  {
    id: 9, title: 'Youth Conservation Corps', category: 'Community',
    location: 'Pan-Africa', year: '2022–Ongoing', impact: '1,200 youth trained',
    description: 'A structured 12-month fellowship training the next generation of African conservation leaders in science, advocacy, and community organizing.',
    image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=700&q=80', color: '#6D4C41',
  },
]

const filters = ['All', 'Reforestation', 'Water', 'Climate', 'Education', 'Community']

function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === active)

  return (
    <PageTransition>
      <Helmet>
        <title>Projects — RECA</title>
        <meta name="description" content="Explore RECA's conservation projects across East Africa — reforestation, water, climate, education, and community empowerment." />
      </Helmet>

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
