import { useState } from 'react'
import SEO from '../../components/Shared/SEO'
import { motion } from 'framer-motion'
import { HiHeart, HiUsers, HiOfficeBuilding, HiArrowRight, HiCheckCircle, HiLockClosed, HiPhone, HiMail } from 'react-icons/hi'
import { FaPaypal, FaUniversity, FaMobileAlt } from 'react-icons/fa'
import PageTransition from '../../components/Shared/PageTransition'
import SectionHeader from '../../components/Shared/SectionHeader'
import './GetInvolved.css'

const opportunities = [
  {
    icon: <HiUsers size={28} />,
    title: 'Volunteer',
    description: 'Join our field teams for tree planting, water monitoring, community training, and more. Short-term and long-term placements available.',
    cta: 'Apply to Volunteer',
    color: '#2F7D32',
    anchor: 'volunteer',
  },
  {
    icon: <HiHeart size={28} />,
    title: 'Donate',
    description: 'Your financial support directly funds trees in the ground, water source restoration, and community education programs.',
    cta: 'Donate Now',
    color: '#D4A017',
    anchor: 'donate',
  },
  {
    icon: <HiOfficeBuilding size={28} />,
    title: 'Partner With Us',
    description: 'Corporate and institutional partnerships that create shared value — for your organization, for communities, and for the planet.',
    cta: 'Explore Partnership',
    color: '#4FC3F7',
    anchor: 'partner',
  },
]

// const donationImpact = [
//   { amount: 'KES 500',    impact: 'Plants 10 indigenous trees' },
//   { amount: 'KES 2,500',  impact: 'Trains a community water guardian' },
//   { amount: 'KES 10,000', impact: 'Restores 1 degraded water source' },
//   { amount: 'KES 50,000', impact: 'Funds a month of field research' },
// ]

const paymentChannels = [
  {
    id: 'mpesa',
    icon: <FaMobileAlt size={26} />,
    label: 'M-Pesa Paybill',
    color: '#00B300',
    fields: [
      { label: 'Paybill Number', value: 'XXXXXXX', masked: true },
      { label: 'Account Number', value: 'RECA-DONATE', masked: false },
    ],
    note: 'Go to M-Pesa → Lipa na M-Pesa → Pay Bill',
  },
  {
    id: 'bank',
    icon: <FaUniversity size={26} />,
    label: 'Bank Transfer',
    color: '#0288D1',
    fields: [
      { label: 'Bank Name',       value: 'XXXXXXXXXXXXXXX', masked: true },
      { label: 'Branch',          value: 'XXXXXXXXXXXXXXX', masked: true },
      { label: 'Account Name',    value: 'Renewed Earth Conservation CBO', masked: false },
      { label: 'Account Number',  value: 'XXXXXXXXXXXXXXX', masked: true },
      { label: 'Swift / RTGS',    value: 'XXXXXXXX', masked: true },
    ],
    note: 'Use your name as the payment reference',
  },
  {
    id: 'paypal',
    icon: <FaPaypal size={26} />,
    label: 'PayPal',
    color: '#003087',
    fields: [
      { label: 'PayPal Email', value: 'donations@reca.org', masked: false },
    ],
    note: 'International donors welcome via PayPal',
  },
]

function FormSuccess({ message }) {
  return (
    <motion.div className="form-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
      <HiCheckCircle size={48} />
      <h3>Thank you!</h3>
      <p>{message}</p>
    </motion.div>
  )
}

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '', availability: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  if (submitted) return <FormSuccess message="We'll be in touch within 3 business days with next steps." />

  return (
    <form className="reca-form" onSubmit={handleSubmit} noValidate>
      <div className="reca-form__row">
        <div className="reca-form__field">
          <label htmlFor="vol-name">Full Name *</label>
          <input id="vol-name" name="name" type="text" required placeholder="Your full name"
            value={form.name} onChange={handleChange} />
        </div>
        <div className="reca-form__field">
          <label htmlFor="vol-email">Email Address *</label>
          <input id="vol-email" name="email" type="email" required placeholder="you@example.com"
            value={form.email} onChange={handleChange} />
        </div>
      </div>
      <div className="reca-form__row">
        <div className="reca-form__field">
          <label htmlFor="vol-phone">Phone Number</label>
          <input id="vol-phone" name="phone" type="tel" placeholder="+254 7xx xxx xxx"
            value={form.phone} onChange={handleChange} />
        </div>
        <div className="reca-form__field">
          <label htmlFor="vol-area">Area of Interest *</label>
          <select id="vol-area" name="area" required value={form.area} onChange={handleChange}>
            <option value="">Select an area</option>
            <option>Reforestation &amp; Tree Planting</option>
            <option>Water Conservation</option>
            <option>Community Education</option>
            <option>Field Research</option>
            <option>Communications &amp; Media</option>
            <option>Administrative Support</option>
          </select>
        </div>
      </div>
      <div className="reca-form__field">
        <label htmlFor="vol-availability">Availability</label>
        <select id="vol-availability" name="availability" value={form.availability} onChange={handleChange}>
          <option value="">Select availability</option>
          <option>Weekends only</option>
          <option>Full-time (1–3 months)</option>
          <option>Full-time (3–6 months)</option>
          <option>Long-term (&gt; 6 months)</option>
          <option>Remote / online support</option>
        </select>
      </div>
      <div className="reca-form__field">
        <label htmlFor="vol-message">Tell us about yourself</label>
        <textarea id="vol-message" name="message" rows={4}
          placeholder="Your background, skills, and why you want to volunteer with RECA…"
          value={form.message} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn--primary btn--lg">
        Submit Application <HiArrowRight size={18} />
      </button>
    </form>
  )
}

function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ org: '', name: '', email: '', type: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  if (submitted) return <FormSuccess message="Our partnerships team will contact you within 5 business days." />

  return (
    <form className="reca-form" onSubmit={handleSubmit} noValidate>
      <div className="reca-form__row">
        <div className="reca-form__field">
          <label htmlFor="par-org">Organization Name *</label>
          <input id="par-org" name="org" type="text" required placeholder="Your organization"
            value={form.org} onChange={handleChange} />
        </div>
        <div className="reca-form__field">
          <label htmlFor="par-name">Contact Person *</label>
          <input id="par-name" name="name" type="text" required placeholder="Full name"
            value={form.name} onChange={handleChange} />
        </div>
      </div>
      <div className="reca-form__row">
        <div className="reca-form__field">
          <label htmlFor="par-email">Email Address *</label>
          <input id="par-email" name="email" type="email" required placeholder="you@organization.com"
            value={form.email} onChange={handleChange} />
        </div>
        <div className="reca-form__field">
          <label htmlFor="par-type">Partnership Type</label>
          <select id="par-type" name="type" value={form.type} onChange={handleChange}>
            <option value="">Select type</option>
            <option>Corporate CSR Partnership</option>
            <option>Institutional / NGO Collaboration</option>
            <option>Research Partnership</option>
            <option>Funding / Grant Partnership</option>
            <option>Media &amp; Communications</option>
          </select>
        </div>
      </div>
      <div className="reca-form__field">
        <label htmlFor="par-message">Partnership Proposal *</label>
        <textarea id="par-message" name="message" rows={5} required
          placeholder="Describe your organization and the partnership opportunity you have in mind…"
          value={form.message} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn--primary btn--lg">
        Submit Proposal <HiArrowRight size={18} />
      </button>
    </form>
  )
}

function GetInvolved() {
  return (
    <PageTransition>
      <SEO
        title="Get Involved - RECA"
        description="Volunteer, donate, or partner with RECA to support ecosystem restoration and community-led conservation."
        path="/get-involved"
        pageName="Get Involved"
      />

      {/* ── Hero ── */}
      <section className="page-hero page-hero--involved">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Join the Movement
          </motion.span>
          <motion.h1 className="page-hero__title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Your Action.<br />Real Change.
          </motion.h1>
          <motion.p className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Whether you give your time, your resources, or your expertise — there's a place for you in RECA's mission.
          </motion.p>
        </div>
      </section>

      {/* ── Ways to Get Involved ── */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="How You Can Help" title="Three Ways to Make an Impact" />
          <div className="gi-options-grid">
            {opportunities.map((op, i) => (
              <motion.a
                key={op.title}
                href={`#${op.anchor}`}
                className="gi-option-card"
                style={{ '--op-color': op.color }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="gi-option-card__icon">{op.icon}</div>
                <h3 className="gi-option-card__title">{op.title}</h3>
                <p className="gi-option-card__desc">{op.description}</p>
                <span className="gi-option-card__cta">
                  {op.cta} <HiArrowRight size={15} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donate Section ── */}
      <section className="section" id="donate" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <SectionHeader
            eyebrow="Make a Donation"
            title="Every Contribution Counts"
            subtitle="Your donation goes directly to conservation action on the ground. Here's what different amounts can achieve:"
          />

          {/* Impact amounts */}
          {/* <div className="gi-impact-grid">
            {donationImpact.map((item, i) => (
              <motion.div
                key={item.amount}
                className="gi-impact-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                whileHover={{ y: -4 }}
              >
                <div className="gi-impact-card__amount">{item.amount}</div>
                <div className="gi-impact-card__divider" />
                <div className="gi-impact-card__impact">{item.impact}</div>
              </motion.div>
            ))}
          </div> */}

          {/* Payment channels */}
          <motion.div
            className="gi-payment-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gi-payment-header">
              <h3 className="gi-payment-title">Ways to Donate</h3>
              <p className="gi-payment-subtitle">
                Choose the channel that works best for you. All donations are acknowledged with an official receipt.
              </p>
            </div>

            <div className="gi-payment-grid">
              {paymentChannels.map((channel, i) => (
                <motion.div
                  key={channel.id}
                  className="gi-payment-card"
                  style={{ '--channel-color': channel.color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Card header */}
                  <div className="gi-payment-card__head">
                    <div className="gi-payment-card__icon">{channel.icon}</div>
                    <span className="gi-payment-card__label">{channel.label}</span>
                  </div>

                  {/* Fields */}
                  <div className="gi-payment-card__fields">
                    {channel.fields.map(field => (
                      <div key={field.label} className="gi-payment-card__field">
                        <span className="gi-payment-card__field-label">{field.label}</span>
                        {field.masked ? (
                          <div className="gi-payment-card__field-masked">
                            <HiLockClosed size={13} />
                            <span className="gi-payment-card__mask-dots">●●●●●●●●●●●</span>
                            <span className="gi-payment-card__soon-tag">Coming Soon</span>
                          </div>
                        ) : (
                          <span className="gi-payment-card__field-value">{field.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <p className="gi-payment-card__note">{channel.note}</p>
                </motion.div>
              ))}
            </div>

            {/* Coming soon banner */}
            <motion.div
              className="gi-coming-soon-banner"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="gi-coming-soon-banner__icon">🔒</div>
              <div>
                <p className="gi-coming-soon-banner__title">Payment details being finalised</p>
                <p className="gi-coming-soon-banner__text">
                  Our official payment channels are currently being set up. In the meantime, contact us directly to make a donation:
                  <a href="mailto:info@reca.org"> info@reca.org</a> or <a href="tel:+254700000000"> +254 757 445 233</a>
                </p>
              </div>
            </motion.div>

            {/* Confirm after donation */}
            <div className="gi-donate-confirm">
              <HiMail size={18} />
              <p>After donating, please send your proof of payment to <a href="mailto:donations@reca.org">donations@reca.org</a> to receive your official receipt.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Volunteer Form ── */}
      <section className="section" id="volunteer">
        <div className="container gi-section-grid">
          <motion.div
            className="gi-section-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">Volunteer Program</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Give Your Time,<br />Change the World</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>
              RECA volunteers work alongside our field teams in Kenya, Tanzania, Uganda, and Rwanda.
              No prior conservation experience is required — just commitment and passion.
            </p>
            <div className="gi-volunteer-stats">
              <div><strong>500+</strong><span>Active volunteers</span></div>
              <div><strong>3</strong><span>Countries</span></div>
              <div><strong>3</strong><span>Field locations</span></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <VolunteerForm />
          </motion.div>
        </div>
      </section>

      {/* ── Partnership Form ── */}
      <section className="section" id="partner" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container gi-section-grid">
          <motion.div
            className="gi-section-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">Partnerships</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Partner for<br />Greater Impact</h2>
            <p style={{ marginBottom: 'var(--space-5)' }}>
              RECA partners with corporations, governments, research institutions, and other NGOs
              to amplify our conservation impact. We design partnerships that create genuine value
              for all stakeholders.
            </p>
            <div className="gi-partner-types">
              {['Corporate CSR', 'Research Collaboration', 'Grant Funding', 'Media & Advocacy', 'Government'].map(t => (
                <span key={t} className="gi-partner-tag">{t}</span>
              ))}
            </div>
            <div className="gi-partner-contact">
              <a href="tel:+254700000000" className="gi-partner-contact__item">
                <HiPhone size={16} /> +254 757 445 233
              </a>
              <a href="mailto:partnerships@reca.org" className="gi-partner-contact__item">
                <HiMail size={16} /> partnerships@reca.org
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <PartnerForm />
          </motion.div>
        </div>
      </section>

    </PageTransition>
  )
}

export default GetInvolved
