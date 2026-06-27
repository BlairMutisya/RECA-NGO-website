import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { impactStats } from '../../data/siteData'
import './ImpactCounter.css'

function ImpactCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="impact-counter" ref={ref} aria-label="Impact Statistics">
      <div className="container">
        <div className="impact-counter__grid">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="impact-counter__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="impact-counter__icon" aria-hidden="true">{stat.icon}</span>
              <div className="impact-counter__number">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="impact-counter__label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactCounter
