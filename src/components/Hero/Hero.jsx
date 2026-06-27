import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import './Hero.css'

const floatingStats = [
  { value: '5K+', label: 'Trees Planted', icon: '🌳' },
  { value: '10+', label: 'Communities', icon: '🏘️' },
  { value: '5+', label: 'Water Sources', icon: '💧' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const bg = heroRef.current.querySelector('.hero__bg')
      if (bg) bg.style.transform = `translateY(${scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', handleParallax, { passive: true })
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <section className="hero" ref={heroRef} aria-label="Hero">
      {/* Parallax Background */}
      <div className="hero__bg" />
      <div className="hero__overlay" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__particle hero__particle--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="hero__eyebrow">
              🌍 Renewed Earth Conservation Alliance
            </span>
          </motion.div>

          <motion.h1 className="hero__title" variants={itemVariants}>
            Restoring Nature.
            <br />
            <span className="hero__title-accent">Empowering</span>
            <br />
            Communities.
            <br />
            Securing Our Future.
          </motion.h1>

          <motion.p className="hero__description" variants={itemVariants}>
            RECA is a conservation organization dedicated to ecosystem regeneration,
            reforestation, water conservation, and building climate-resilient
            communities across Africa and beyond.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <Link to="/get-involved" className="btn btn--primary btn--lg">
              Join Our Mission
              <HiArrowRight size={18} />
            </Link>
            <Link to="/get-involved" className="btn btn--outline btn--lg">
              Donate Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {floatingStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="hero__stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
            >
              <span className="hero__stat-icon">{stat.icon}</span>
              <div>
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
