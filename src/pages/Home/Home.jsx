import { useEffect } from 'react'
import SEO from '../../components/Shared/SEO'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import PageTransition from '../../components/Shared/PageTransition'
import Hero from '../../components/Hero/Hero'
import ImpactCounter from '../../components/ImpactCounter/ImpactCounter'
import FocusAreas from '../../components/FocusAreas/FocusAreas'
import FeaturedProjects from '../../components/Projects/FeaturedProjects'
import Partners from '../../components/Partners/Partners'
import Testimonials from '../../components/Testimonials/Testimonials'
import CTA from '../../components/CTA/CTA'
import logo from '../../assets/images/reca-logo.png'
import './Home.css'

function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="container about-preview__grid">
        <motion.div
          className="about-preview__image-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-preview__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1728325877250-b79003cd2dc4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="RECA team in the field"
              loading="lazy"
            />
            <div className="about-preview__logo-badge">
              <img src={logo} alt="RECA" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-preview__text-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            A Movement Built on
            Science and Community
          </h2>
          <p style={{ marginBottom: 'var(--space-5)' }}>
            Founded by conservationists, scientists, and community leaders,
            RECA is a pan-African NGO dedicated to reversing environmental
            degradation through a people-first approach to conservation.
          </p>
          <p style={{ marginBottom: 'var(--space-8)' }}>
            We believe that the most durable environmental solutions emerge
            from the communities who depend on healthy ecosystems. Our work
            spans reforestation, water conservation, climate adaptation, and
            sustainable livelihoods across Eastern and Central Africa.
          </p>

          <div className="about-preview__values">
            {['Science-Led', 'Community-First', 'Transparent', 'Long-Term'].map(val => (
              <span key={val} className="about-preview__value-tag">{val}</span>
            ))}
          </div>

          <Link to="/about" className="btn btn--ghost" style={{ marginTop: 'var(--space-8)' }}>
            Our Full Story
            <HiArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <PageTransition>
      <SEO
        title="RECA - Renewed Earth Conservation Alliance"
        description="RECA restores ecosystems, supports reforestation, protects water sources, and builds climate-resilient communities across East Africa."
        path=""
        pageName="Home"
      />

      <Hero />
      <ImpactCounter />
      <AboutPreview />
      <FocusAreas />
      <FeaturedProjects />
      <Partners />
      <Testimonials />
      <CTA />
    </PageTransition>
  )
}

export default Home
