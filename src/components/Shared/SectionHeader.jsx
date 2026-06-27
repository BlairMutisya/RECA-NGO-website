import { motion } from 'framer-motion'

function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }) {
  return (
    <motion.div
      className={`section-header ${centered ? '' : 'section-header--left'}`}
      style={centered ? {} : { textAlign: 'left', margin: '0 0 var(--space-12)' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span
          className="section-eyebrow"
          style={light ? { background: 'rgba(255,255,255,0.15)', color: '#fff' } : {}}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="section-title"
        style={light ? { color: '#fff' } : {}}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={light ? { color: 'rgba(255,255,255,0.72)' } : {}}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
