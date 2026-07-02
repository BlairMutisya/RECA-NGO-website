import SEO from '../../components/Shared/SEO'
import { motion } from 'framer-motion'
import PageTransition from '../../components/Shared/PageTransition'
import SectionHeader from '../../components/Shared/SectionHeader'
import CTA from '../../components/CTA/CTA'
import { teamMembers } from '../../data/siteData'
import './About.css'

const timeline = [
  { year: '2023', event: 'RECA founded in Nairobi by a coalition of conservationists and community leaders.' },
  { year: '2024', event: 'Launched first large-scale reforestation initiative in the Aberdare highlands.' },
  { year: '2025', event: 'Expanded operations to Tanzania and Uganda; reached 100 communities milestone.' },
  { year: '2025', event: 'Secured $5M Green Climate Fund grant for Mara River watershed restoration.' },
  { year: '2026', event: 'Planted one millionth tree; recognized by UNEP as a leading African conservation NGO.' },
  { year: '2026', event: 'Launched 5-year "Renewing 2030" strategy targeting 10M trees and 500 communities.' },
]

const values = [
  { icon: '🌿', title: 'Ecological Integrity', desc: 'Every intervention is grounded in conservation science and monitored for long-term ecological impact.' },
  { icon: '🤝', title: 'Community Ownership', desc: 'Local communities are partners, not beneficiaries. Their knowledge and leadership are essential to our work.' },
  { icon: '🔬', title: 'Evidence-Based Practice', desc: 'We invest in data, monitoring, and adaptive management to ensure we learn and improve continuously.' },
  { icon: '🌐', title: 'Systems Thinking', desc: 'We address the interconnected root causes of environmental degradation, not just the symptoms.' },
  { icon: '🔒', title: 'Radical Transparency', desc: 'We publish our impact data, financials, and lessons learned openly and honestly.' },
  { icon: '⚡', title: 'Urgency', desc: 'The climate and biodiversity crises demand action at pace and scale. We move with purpose.' },
]

function About() {
  return (
    <PageTransition>
      <SEO
        title="About RECA - Renewed Earth Conservation Alliance"
        description="Learn about RECA's mission, values, leadership team, and conservation work restoring ecosystems across East Africa."
        path="/about"
        pageName="About RECA"
      />

      {/* Page Hero */}
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <div className="container about-hero__content">
          <motion.span
            className="section-eyebrow"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Organization
          </motion.span>
          <motion.h1
            className="about-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Built for Earth.
            <br />Led by Community.
          </motion.h1>
          <motion.p
            className="about-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            A decade of conservation, thousands of lives transformed, and millions of trees in the ground.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="about-mv__grid">
            <motion.div
              className="about-mv__card about-mv__card--mission"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="about-mv__label">Our Mission</span>
              <p className="about-mv__text">
                To regenerate ecosystems, empower communities, and advance climate resilience
                across Africa through science-led, people-centred conservation.
              </p>
            </motion.div>
            <motion.div
              className="about-mv__card about-mv__card--vision"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="about-mv__label">Our Vision</span>
              <p className="about-mv__text">
                A continent where thriving ecosystems and resilient communities sustain
                one another — a renewed earth for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <SectionHeader eyebrow="What Drives Us" title="Our Core Values" />
          <div className="about-values__grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <span className="about-value-card__icon">{v.icon}</span>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" id="timeline">
        <div className="container">
          <SectionHeader eyebrow="Our Journey" title="A Decade of Impact" subtitle="From a small coalition of conservationists to a continental force for environmental change." />
          <div className="about-timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`about-timeline__item ${i % 2 === 0 ? 'about-timeline__item--left' : 'about-timeline__item--right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="about-timeline__content">
                  <div className="about-timeline__year">{item.year}</div>
                  <p className="about-timeline__event">{item.event}</p>
                </div>
                <div className="about-timeline__dot" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" id="team" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <SectionHeader eyebrow="Our People" title="Leadership Team" subtitle="Experienced conservationists, scientists, and development professionals committed to Africa's ecological future." />
          <div className="about-team__grid">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                className="about-team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
              >
                <div className="about-team-card__avatar">{member.initials}</div>
                <h3 className="about-team-card__name">{member.name}</h3>
                <div className="about-team-card__role">{member.role}</div>
                <p className="about-team-card__bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}

export default About;
