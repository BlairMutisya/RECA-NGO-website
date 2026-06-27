import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMoon, HiSun, HiHome } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'
import { navLinks } from '../../data/siteData'
import logo from '../../assets/images/reca-logo.png'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  // Track whether we're on a mobile viewport
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 960)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960)
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">

        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="RECA Home">
          <img src={logo} alt="RECA Logo" />
          <div className="navbar__logo-text">
            <strong>RECA</strong>
            {/* Only render subtitle on desktop — avoids overflow on mobile entirely */}
            {!isMobile && <span>Conservation Alliance</span>}
          </div>
        </Link>

        {/* Desktop Nav — hidden on mobile via CSS */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''} ${link.label === 'Home' ? 'navbar__link--home' : ''}`
              }
            >
              {link.label === 'Home' && <HiHome size={16} />}
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          {/* Theme toggle — hidden on mobile via CSS, lives in drawer too */}
          <button className="navbar__theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          {/* CTA — hidden on mobile via CSS, lives in drawer too */}
          <Link to="/get-involved" className="btn btn--primary navbar__cta">
            Support RECA
          </Link>

          {/* Burger — shown only on mobile via CSS */}
          <button
            className="navbar__burger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <HiMenu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu__header">
              <Link to="/" className="mobile-menu__logo">
                <img src={logo} alt="RECA Logo" />
                <div>
                  <strong>RECA</strong>
                  <span>Conservation Alliance</span>
                </div>
              </Link>
              <button
                className="mobile-menu__close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <HiX size={26} />
              </button>
            </div>

            <nav className="mobile-menu__nav">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                    }
                  >
                    {link.label === 'Home' && <HiHome size={18} />}
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <Link
                to="/get-involved"
                className="btn btn--primary btn--lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Support RECA
              </Link>
              <button className="mobile-menu__theme" onClick={toggleTheme}>
                {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
                {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar