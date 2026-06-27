import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiHeart } from 'react-icons/hi'
import './CTA.css'

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-section__bg" />
      <div className="cta-section__overlay" />

      <div className="container cta-section__container">
        <motion.div
          className="cta-section__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
            Take Action Today
          </span>

          <h2 className="cta-section__title">
            Every Tree Planted Is a
            <br />
            <span className="cta-section__title-accent">Promise to the Future</span>
          </h2>

          <p className="cta-section__subtitle">
            Join thousands of supporters, volunteers, and partners working
            alongside RECA to restore ecosystems and build resilient communities
            across Africa and beyond.
          </p>

          <div className="cta-section__actions">
            <Link to="/get-involved" className="btn btn--gold btn--lg">
              <HiHeart size={18} />
              Donate Now
            </Link>
            <Link to="/get-involved" className="btn btn--outline btn--lg">
              Volunteer With Us
              <HiArrowRight size={18} />
            </Link>
          </div>

          <div className="cta-section__trust">
            <span>🔒 Secure & transparent</span>
            <span>100% goes to conservation</span>
            <span>Tax-deductible donations</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
