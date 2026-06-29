import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  HiLocationMarker, HiPhone, HiMail, HiClock,
  HiArrowRight, HiCheckCircle
} from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import PageTransition from '../../components/Shared/PageTransition'
import './Contact.css'

const offices = [
  {
    city: 'Nairobi',
    country: 'Kenya (HQ)',
    address: 'Donholm Business Park, Nairobi',
    phone: '+254 757 445 233',
    email: 'nairobi@reca.org',
    hours: 'Mon–Fri, 8:00 AM – 5:30 PM EAT',
    flag: '🇰🇪',
  },
  {
    city: 'Arusha',
    country: 'Tanzania',
    address: 'Conservation House, Sokoine Road, Arusha',
    phone: '+255 700 000 002',
    email: 'arusha@reca.org',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM EAT',
    flag: '🇹🇿',
  },
  {
    city: 'Kampala',
    country: 'Uganda',
    address: 'Plot 45, Kololo Hill Drive, Kampala',
    phone: '+256 700 000 003',
    email: 'kampala@reca.org',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM EAT',
    flag: '🇺🇬',
  },
]

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter / X', color: '#1DA1F2' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: '#E1306C' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
]

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', department: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  if (submitted) {
    return (
      <motion.div
        className="contact-success"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <HiCheckCircle size={56} />
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. Our team will respond within 2 business days.</p>
        <button className="btn btn--ghost" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form className="reca-form contact-form" onSubmit={handleSubmit} noValidate>
      <div className="reca-form__row">
        <div className="reca-form__field">
          <label htmlFor="c-name">Full Name *</label>
          <input id="c-name" name="name" type="text" required placeholder="Your full name"
            value={form.name} onChange={handleChange} />
        </div>
        <div className="reca-form__field">
          <label htmlFor="c-email">Email Address *</label>
          <input id="c-email" name="email" type="email" required placeholder="you@example.com"
            value={form.email} onChange={handleChange} />
        </div>
      </div>
      <div className="reca-form__row">
        <div className="reca-form__field">
          <label htmlFor="c-department">Department</label>
          <select id="c-department" name="department" value={form.department} onChange={handleChange}>
            <option value="">Select department</option>
            <option>General Enquiries</option>
            <option>Programs & Projects</option>
            <option>Partnerships & Fundraising</option>
            <option>Volunteering</option>
            <option>Media & Press</option>
            <option>Research & Science</option>
          </select>
        </div>
        <div className="reca-form__field">
          <label htmlFor="c-subject">Subject *</label>
          <input id="c-subject" name="subject" type="text" required placeholder="How can we help?"
            value={form.subject} onChange={handleChange} />
        </div>
      </div>
      <div className="reca-form__field">
        <label htmlFor="c-message">Message *</label>
        <textarea id="c-message" name="message" rows={6} required
          placeholder="Tell us more about your enquiry…"
          value={form.message} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn--primary btn--lg">
        Send Message <HiArrowRight size={18} />
      </button>
    </form>
  )
}

function Contact() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact RECA</title>
        <meta name="description" content="Get in touch with RECA — our offices in Kenya, Tanzania, and Uganda are here to help." />
        <link rel="canonical" href="https://www.renewedearthconservationalliance.org/contact" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero page-hero--contact">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Get in Touch
          </motion.span>
          <motion.h1 className="page-hero__title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            We'd Love<br />to Hear from You
          </motion.h1>
          <motion.p className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Whether you're a partner, volunteer, journalist, or supporter — our team is ready to connect.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section">
        <div className="container contact-grid">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">Send Us a Message</span>
            <h2 className="contact-form-title">Drop Us a Line</h2>
            <p style={{ marginBottom: 'var(--space-8)', color: 'var(--color-text-muted)' }}>
              Fill in the form below and our team will get back to you within 2 business days.
            </p>
            <ContactForm />
          </motion.div>

          {/* Right — Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Quick Contact */}
            <div className="contact-quick">
              <h3 className="contact-info__heading">Quick Contact</h3>
              <div className="contact-quick__items">
                <a href="mailto:info@reca.org" className="contact-quick__item">
                  <div className="contact-quick__icon"><HiMail size={20} /></div>
                  <div>
                    <div className="contact-quick__label">Email Us</div>
                    <div className="contact-quick__value">info@reca.org</div>
                  </div>
                </a>
                <a href="tel:+254700000000" className="contact-quick__item">
                  <div className="contact-quick__icon"><HiPhone size={20} /></div>
                  <div>
                    <div className="contact-quick__label">Call Us</div>
                    <div className="contact-quick__value">+254 757 445 233</div>
                  </div>
                </a>
                <div className="contact-quick__item">
                  <div className="contact-quick__icon"><HiClock size={20} /></div>
                  <div>
                    <div className="contact-quick__label">Office Hours</div>
                    <div className="contact-quick__value">Mon–Fri, 8 AM – 5:30 PM EAT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="contact-social">
              <h3 className="contact-info__heading">Follow Us</h3>
              <div className="contact-social__links">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="contact-social__link" style={{ '--social-color': color }}
                    aria-label={label}>
                    <Icon size={20} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="contact-map-section">
        <div className="contact-map-placeholder">
          <div className="contact-map-placeholder__inner">
            <HiLocationMarker size={40} />
            <h3>Find Us on the Map</h3>
            <p>Donholm Business Park, Nairobi, Kenya</p>
            <a
              href="https://maps.google.com/?q=Donholm+Nairobi+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Open in Google Maps <HiArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Offices</span>
            <h2 className="section-title">Where to Find Us</h2>
            <p className="section-subtitle">
              We have field offices across East Africa, each embedded in the communities we serve.
            </p>
          </div>
          <div className="contact-offices">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                className="contact-office-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <div className="contact-office-card__flag">{office.flag}</div>
                <h3 className="contact-office-card__city">{office.city}</h3>
                <div className="contact-office-card__country">{office.country}</div>
                <ul className="contact-office-card__details">
                  <li><HiLocationMarker size={14} />{office.address}</li>
                  <li><HiPhone size={14} /><a href={`tel:${office.phone}`}>{office.phone}</a></li>
                  <li><HiMail size={14} /><a href={`mailto:${office.email}`}>{office.email}</a></li>
                  <li><HiClock size={14} />{office.hours}</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
