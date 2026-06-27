import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../../data/siteData'
import 'swiper/css'
import 'swiper/css/pagination'
import './Testimonials.css'

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Voices of Impact</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Hear from the scientists, communities, and leaders who experience
            RECA's impact firsthand.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
            className="testimonials__swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimonial-card">
                  <FaQuoteLeft className="testimonial-card__quote-icon" />
                  <p className="testimonial-card__text">{t.quote}</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="testimonial-card__name">{t.name}</div>
                      <div className="testimonial-card__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
