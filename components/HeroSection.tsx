'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Heart, Gift, ChevronDown } from 'lucide-react'

const INFO_ITEMS = [
  {
    icon: <CalendarIcon />,
    title: '5TH JULY 2026',
    subtitle: 'The Big Day',
  },
  {
    icon: <MapPin size={18} className="text-gold" strokeWidth={1.8} />,
    title: 'NEAR SHIVAJI STATUE',
    subtitle: 'Ashallapally, Warangal',
  },
  {
    icon: <Heart size={18} className="text-gold" strokeWidth={1.8} />,
    title: 'CELEBRATE LOVE',
    subtitle: 'With Family & Friends',
  },
  {
    icon: <Gift size={18} className="text-gold" strokeWidth={1.8} />,
    title: 'BLESSINGS ONLY',
    subtitle: 'Your Presence is Our Gift',
  },
]

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col">
      {/* ── Parallax background — overflow-hidden scoped to this wrapper only ── */}
      <div className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 origin-center"
      >
        {/* Temple background: replace /images/temple-bg.png with your own photo */}
        <div
          className="w-full h-full bg-[#2e1a08] animate-ken-burns"
          style={{
            backgroundImage: `url('/images/temple-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* CSS fallback gradient that mimics warm temple sunset */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 50% 35%, rgba(220,140,40,0.18) 0%, transparent 65%),
                radial-gradient(ellipse 50% 80% at 50% 50%, rgba(160,80,20,0.12) 0%, transparent 70%)
              `,
            }}
          />
        </div>
      </motion.div>
      </div>{/* end overflow-hidden wrapper */}

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120d08]/65 via-transparent to-[#120d08]/85 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120d08]/50 via-transparent to-[#120d08]/50 z-10" />
      {/* Dark scrim behind text to boost contrast over the bright temple center */}
      <div
        className="absolute z-10 inset-0"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 42%, rgba(18,13,8,0.52) 0%, transparent 70%)',
        }}
      />
      {/* Warm glow behind where the temple sits */}
      <div
        className="absolute z-10 inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 38%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />
      {/* Top fade for navbar */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#120d08]/70 to-transparent z-20" />

      {/* ── Main content ── */}
      <motion.div
        style={{ y: textY, opacity: contentOpacity }}
        className="relative z-30 flex flex-col items-center justify-center flex-1 text-center px-4 pt-24 pb-44"
      >
        {/* Top ornamental line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-14 md:w-20 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
          <div className="w-2.5 h-2.5 border border-gold/60 rotate-45" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
          <div className="h-px w-14 md:w-20 bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Shubh Vivah label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-cinzel text-[10px] md:text-xs tracking-[0.35em] text-gold uppercase mb-6"
          style={{ textShadow: '0 1px 8px rgba(18,13,8,0.8), 0 2px 16px rgba(18,13,8,0.6)' }}
        >
          Shubh Vivah ✦ Karkataka Lagnam
        </motion.p>

        {/* COUPLE NAMES — hero statement */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-script font-bold text-gold-gradient leading-[1.12] mb-5 w-full px-4 text-center"
          style={{
            fontSize: 'clamp(2rem, 6vw, 6.5rem)',
            filter: 'drop-shadow(0 4px 24px rgba(212,175,55,0.28))',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          Shiva Kumar &amp; Soujanya
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-cinzel text-lg md:text-2xl lg:text-3xl tracking-[0.22em] text-light-gold mb-3"
          style={{ textShadow: '0 2px 12px rgba(18,13,8,0.85), 0 4px 24px rgba(18,13,8,0.6)' }}
        >
          5TH JULY 2026
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="font-cormorant italic text-sm md:text-base lg:text-lg text-warm-text/90 tracking-[0.12em] uppercase mb-10"
          style={{ textShadow: '0 1px 8px rgba(18,13,8,0.9), 0 2px 16px rgba(18,13,8,0.7)' }}
        >
          Two Hearts, One Promise... A Lifetime Together
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(212,175,55,0.38)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#couple')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 px-8 py-3.5 rounded-full border border-[rgba(212,175,55,0.45)] bg-[rgba(18,13,8,0.55)] text-light-gold font-cinzel text-[10px] tracking-[0.3em] uppercase hover:bg-[rgba(212,175,55,0.12)] transition-all duration-400 backdrop-blur-sm"
          >
            Explore Our Journey
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(212,175,55,0.55)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#venue')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-bg font-cinzel text-[10px] tracking-[0.3em] uppercase font-semibold transition-all duration-400"
          >
            <MapPin size={13} strokeWidth={2.5} />
            Venue
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── Scroll Down indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-[104px] left-1/2 -translate-x-1/2 z-30"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => document.querySelector('#couple')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-1 text-gold/55 hover:text-gold/90 transition-colors cursor-pointer"
        >
          <span className="font-cinzel text-[8px] tracking-[0.4em] uppercase">Scroll Down</span>
          <ChevronDown size={14} strokeWidth={1.5} />
        </motion.button>
      </motion.div>

      {/* ── Bottom info bar ── */}
      <div className="absolute bottom-0 inset-x-0 z-30">

        {/* Straight golden divider line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.45)] to-transparent" />

        {/* Info bar */}
        <div className="bg-[#120d08] py-3.5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-[rgba(212,175,55,0.18)]">
              {INFO_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:px-6 first:pl-0">
                  <div className="flex-shrink-0 opacity-90">{item.icon}</div>
                  <div>
                    <p className="font-cinzel text-[9px] md:text-[10px] tracking-[0.28em] text-gold/90 uppercase">
                      {item.title}
                    </p>
                    <p className="font-inter text-[10px] md:text-xs text-warm-text/55 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
