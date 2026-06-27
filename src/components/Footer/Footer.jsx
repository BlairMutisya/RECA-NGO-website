import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import logo from '../../assets/images/reca-logo.png'
import './Footer.css'

const footerLinks = {
  Organization: [
    { label: 'About RECA', path: '/about' },
    { label: 'Our Team', path: '/about#team' },
    { label: 'Impact Report', path: '/impact' },
    { label: 'Partnerships', path: '/about#partners' },
  ],
  Programs: [
    { label: 'Reforestation', path: '/projects' },
    { label: 'Water Conservation', path: '/projects' },
    { label: 'Climate Action', path: '/projects' },
    { label: 'Community Programs', path: '/projects' },
  ],
  'Get Involved': [
    { label: 'Volunteer', path: '/get-involved' },
    { label: 'Donate', path: '/get-involved' },
    { label: 'Partner With Us', path: '/get-involved' },
    { label: 'Corporate Giving', path: '/get-involved' },
  ],
}

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="RECA Logo" />
              <span>RECA</span>
            </Link>
            <p className="footer__tagline">
              Renewing Earth, one ecosystem at a time. Empowering communities,
              restoring nature, securing our collective future.
            </p>

            <div className="footer__social">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   className="footer__social-link" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="footer__newsletter">
              <p className="footer__newsletter-label">Stay informed</p>
              <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="footer__newsletter-input"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="footer__newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer__col">
              <h4 className="footer__col-heading">{heading}</h4>
              <ul className="footer__links">
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Contact</h4>
            <ul className="footer__contact-list">
              <li>
                <HiLocationMarker size={16} />
                <span>Nairobi, Kenya</span>
              </li>
              <li>
                <HiPhone size={16} />
                <a href="tel:+254700000000">+254 757 445 233</a>
              </li>
              <li>
                <HiMail size={16} />
                <a href="mailto:info@reca.org">info@reca.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Renewed Earth Conservation Alliance. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
