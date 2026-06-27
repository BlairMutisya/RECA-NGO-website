import { motion } from 'framer-motion'
import { partners } from '../../data/siteData'
import './Partners.css'

function Partners() {
  const doubled = [...partners, ...partners]

  return (
    <section className="partners section--sm">
      <div className="container">
        <motion.div
          className="partners__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="partners__label">Trusted by global conservation leaders</p>
        </motion.div>
      </div>

      <div className="partners__marquee-wrap">
        <div className="partners__marquee">
          {doubled.map((partner, i) => (
            <div key={i} className="partners__logo-item">
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
