import { useState } from 'react'
import SEO from '../../components/Shared/SEO'
import { motion, AnimatePresence } from 'framer-motion'
import { HiLocationMarker, HiArrowRight, HiArrowLeft, HiX } from 'react-icons/hi'
import PageTransition from '../../components/Shared/PageTransition'
import CTA from '../../components/CTA/CTA'
import './Projects.css'

const allProjects = [
  {
    id: 1,
    title: 'Great Rift Valley Reforestation',
    category: 'Reforestation',
    location: 'Kenya',
    year: '2023–Completed',
    impact: '5K trees planted',
    description: 'Restoring 1.2 hectares of degraded forest along the Great Rift Valley escarpment using indigenous tree species and community nurseries.',
    image: 'https://images.unsplash.com/photo-1669397137034-a9577aec5435?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#2F7D32',
    fullDescription: [
      'The Great Rift Valley escarpment is one of Kenya\'s most ecologically significant landscapes — and one of its most threatened. Decades of agricultural encroachment, charcoal production, and population pressure had stripped large sections of the valley\'s highland forests, leaving soils exposed and water sources unreliable.',
      'RECA\'s reforestation initiative focused on restoring 1.2 hectares of degraded land using exclusively indigenous tree species — including Prunus africana, Olea europaea subsp. africana, and Nuxia congesta — which are better suited to local conditions and far more valuable to native wildlife than exotic plantations.',
      'A community nursery was established at the project\'s outset, training 34 local farmers and youth volunteers in seed collection, germination, and seedling care. This ensured that the project built lasting capacity rather than simply delivering trees from outside.',
      'By project close in late 2023, over 5,000 trees had been planted across the site, with a survival rate of 82% — significantly above the regional average. Monitoring continues quarterly through a network of community-trained field monitors.',
    ],
    stats: [
      { label: 'Trees Planted', value: '5,000+' },
      { label: 'Hectares Restored', value: '1.2 ha' },
      { label: 'Survival Rate', value: '82%' },
      { label: 'Community Members Trained', value: '34' },
    ],
  },
  {
    id: 2,
    title: 'Mara River Watershed Restoration',
    category: 'Water',
    location: 'Kenya & Tanzania',
    year: '2024–Completed',
    impact: '5 water sources restored',
    description: 'Rehabilitating riparian ecosystems and community water infrastructure along the ecologically critical Mara River basin.',
    image: 'https://plus.unsplash.com/premium_photo-1780079498977-d67a284765c0?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#0277BD',
    fullDescription: [
      'The Mara River flows from the Mau Forest in Kenya through the Masai Mara and into Tanzania\'s Serengeti, feeding one of Africa\'s most iconic ecosystems. But unsustainable land use, deforestation of the Mau catchment, and pressure from growing communities have severely degraded the river\'s health over the past two decades.',
      'RECA\'s watershed restoration program worked across both the Kenyan and Tanzanian sections of the river basin, rehabilitating five key water sources used by local communities for drinking water, livestock, and small-scale irrigation. Each site involved clearing invasive vegetation, replanting native riparian species, and constructing simple erosion barriers.',
      'Alongside physical restoration, the program convened a cross-border community water committee — the first of its kind in the region — bringing together representatives from Maasai, Kipsigis, and Kuria communities to co-manage shared water resources and resolve disputes before they escalate.',
      'Baseline and end-line water quality testing showed measurable improvements in turbidity and coliform levels at all five restored sites. The cross-border governance model developed here is now being adapted for two other shared river basins in the region.',
    ],
    stats: [
      { label: 'Water Sources Restored', value: '5' },
      { label: 'Communities Reached', value: '12' },
      { label: 'Riparian Area Replanted', value: '3.4 km' },
      { label: 'Cross-border Committee Members', value: '28' },
    ],
  },
  {
    id: 3,
    title: 'Coastal Mangrove Restoration',
    category: 'Reforestation',
    location: 'Kenya Coast',
    year: '2026–Ongoing',
    impact: '1.2 ha mangroves restored',
    description: 'Restoring mangrove ecosystems along the Kenyan coast to protect shorelines, support fisheries, and sequester carbon.',
    image: 'https://images.unsplash.com/photo-1779399642977-7c6bfd7bc472?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#2F7D32',
    fullDescription: [
      'Kenya\'s coastline has lost more than 60% of its original mangrove cover over the past 50 years — cleared for aquaculture, charcoal, and construction timber. What remains is fragmented and under pressure. Yet mangroves are among the most carbon-dense ecosystems on earth, storing up to five times more carbon per hectare than tropical rainforests.',
      'RECA launched its coastal mangrove restoration program in early 2026, working with fishing communities in the Kilifi and Kwale counties to rehabilitate degraded intertidal zones. The program uses a community-led propagule collection method, where local fishers gather mangrove seeds during the natural dispersal season, raise them in tidal nurseries, and replant in cleared or degraded patches.',
      'To date, 1.2 hectares of mangrove habitat have been restored across three sites, with three species — Rhizophora mucronata, Avicennia marina, and Ceriops tagal — selected for their local prevalence and ecological value. Restored areas are already showing signs of juvenile fish recruitment, an early indicator of ecosystem recovery.',
      'The project is currently in its first full monitoring cycle and is on track to restore an additional 2 hectares by the end of 2026. A carbon credit feasibility study is underway to explore long-term financial sustainability for the communities involved.',
    ],
    stats: [
      { label: 'Mangroves Restored', value: '1.2 ha' },
      { label: 'Species Planted', value: '3' },
      { label: 'Fisher Families Involved', value: '47' },
      { label: 'Target by End of 2026', value: '3.2 ha' },
    ],
  },
]

const filters = ['All', 'Reforestation', 'Water']

function Projects() {
  const [active, setActive] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === active)

  const openProject = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

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
                      <button className="project-card__link" onClick={() => openProject(project)}>
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="article-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && closeProject()}
          >
            <motion.div
              className="article-modal"
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
            >
              {/* Sticky top bar */}
              <div className="article-modal__topbar">
                <button
                  className="article-modal__back-btn"
                  type="button"
                  onClick={closeProject}
                  aria-label="Back to projects"
                >
                  <HiArrowLeft size={16} />
                  <span>All projects</span>
                </button>
                <span
                  className="article-modal__topbar-category"
                  style={{ background: selectedProject.color }}
                >
                  {selectedProject.category}
                </span>
                <button
                  className="article-modal__close"
                  type="button"
                  onClick={closeProject}
                  aria-label="Close project"
                >
                  <HiX size={18} />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="article-modal__scroll">
                {/* Hero image */}
                <div className="article-modal__hero">
                  <img src={selectedProject.image} alt={selectedProject.title} loading="lazy" />
                  <div className="article-modal__hero-gradient" style={{ '--article-color': selectedProject.color }} />
                </div>

                {/* Body */}
                <div className="article-modal__body">
                  <div className="article-modal__meta">
                    <span><HiLocationMarker size={13} /> {selectedProject.location}</span>
                    <span>{selectedProject.year}</span>
                  </div>

                  <h2 className="article-modal__title">{selectedProject.title}</h2>

                  <div className="article-modal__accent-bar" style={{ background: selectedProject.color }} />

                  {/* Impact stats */}
                  <div className="project-modal__stats">
                    {selectedProject.stats.map((stat, i) => (
                      <div key={i} className="project-modal__stat">
                        <span className="project-modal__stat-value" style={{ color: selectedProject.color }}>
                          {stat.value}
                        </span>
                        <span className="project-modal__stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="article-modal__content">
                    {selectedProject.fullDescription.map((paragraph, index) => (
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

export default Projects