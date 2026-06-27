import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/images/reca-logo.png'
import './SplashScreen.css'

const SPLASH_KEY = 'reca_splash_shown'

export function shouldShow() {
  return !sessionStorage.getItem(SPLASH_KEY)
}

function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('enter') // enter → text → exit

  useEffect(() => {
    sessionStorage.setItem(SPLASH_KEY, '1')
    const t1 = setTimeout(() => setPhase('text'), 700)
    const t2 = setTimeout(() => setPhase('exit'), 2900)
    const t3 = setTimeout(() => onComplete(), 3700)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <motion.div
      className="splash"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Loading RECA website"
    >
      {/* Animated background rings */}
      <div className="splash__rings" aria-hidden="true">
        {[1, 2, 3, 4].map(n => (
          <div key={n} className={`splash__ring splash__ring--${n}`} />
        ))}
      </div>

      {/* Floating particles */}
      <div className="splash__particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`splash__particle splash__particle--${i + 1}`} />
        ))}
      </div>

      {/* Centre content */}
      <div className="splash__centre">

        {/* Logo */}
        <motion.div
          className="splash__logo-wrap"
          initial={{ scale: 0.3, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="splash__logo-glow" />
          <img src={logo} alt="RECA Logo" className="splash__logo" />
        </motion.div>

        {/* Name + tagline — appear after logo settles */}
        <AnimatePresence>
          {(phase === 'text' || phase === 'exit') && (
            <motion.div
              className="splash__text"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1
                className="splash__name"
                initial={{ opacity: 0, letterSpacing: '0.8em' }}
                animate={{ opacity: 1, letterSpacing: '0.18em' }}
                transition={{ duration: 0.9, delay: 0.05 }}
              >
                RECA
              </motion.h1>

              <motion.p
                className="splash__fullname"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
              >
                Renewed Earth Conservation Alliance
              </motion.p>

              <motion.div
                className="splash__divider"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.75, delay: 0.38 }}
              />

              <motion.p
                className="splash__tagline"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Restoring Nature &nbsp;·&nbsp; Empowering Communities &nbsp;·&nbsp; Securing Our Future
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress bar */}
        <motion.div
          className="splash__loader-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'enter' ? 0 : 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="splash__loader-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === 'exit' ? 1 : 0.6 }}
            transition={{
              duration: phase === 'exit' ? 0.55 : 2.0,
              ease: phase === 'exit' ? [0.22, 1, 0.36, 1] : 'easeOut',
            }}
          />
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.div
        className="splash__bottom"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: phase === 'text' ? 1 : 0, y: phase === 'text' ? 0 : 12 }}
        transition={{ duration: 0.55, delay: 0.5 }}
      >
        <span>🌍</span>
        <span>Empowering Communities &nbsp;·&nbsp; Regenerating Ecosystems</span>
      </motion.div>
    </motion.div>
  )
}

export default SplashScreen
