'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const COUPLE = [
  {
    name: 'Sunkaraboina ShivaKumar',
    image: '/images/groom.PNG',
    description: 'He found his calm in her smile and knew he had found his home.',
    side: 'left',
  },
  {
    name: 'Nyala Soujanya',
    image: '/images/bride.PNG',
    description: 'She found her forever in his heart and knew her journey was complete.',
    side: 'right',
  },
] as const

export default function CoupleSection() {
  return (
    <section id="couple" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with floral panels */}
      <div className="absolute inset-0">
        <Image src="/images/Gallery_Bg.png" alt="" fill className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-bg/72" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="The Couple" className="mb-16" />
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {/* Shiva Kumar */}
          <ScrollReveal delay={0.1} direction="right">
            <PortraitCard person={COUPLE[0]} />
          </ScrollReveal>

          {/* Center emblem */}
          <ScrollReveal delay={0.2} direction="none">
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gold/60 flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(27,19,15,0.8) 100%)',
                  boxShadow: '0 0 24px rgba(212,175,55,0.25)',
                }}
              >
                <span className="font-script font-bold text-3xl md:text-4xl text-gold-gradient">&amp;</span>
              </div>
              <div className="h-16 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent hidden md:block" />
            </div>
          </ScrollReveal>

          {/* Soujanya */}
          <ScrollReveal delay={0.1} direction="left">
            <PortraitCard person={COUPLE[1]} />
          </ScrollReveal>
        </div>

        {/* Together tagline */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-10 bg-gold/30" />
            <div className="w-1 h-1 bg-gold/50 rotate-45" />
            <div className="h-px w-10 bg-gold/30" />
          </div>
          <p className="font-script font-bold text-4xl md:text-5xl text-gold-gradient mb-2">Together</p>
          <p className="font-cormorant italic text-sm md:text-base text-warm-text/55 tracking-widest">
            We begin our greatest adventure
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-10 bg-gold/30" />
            <div className="w-1 h-1 bg-gold/50 rotate-45" />
            <div className="h-px w-10 bg-gold/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function PortraitCard({ person }: { person: (typeof COUPLE)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.2)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center gap-4"
    >
      {/* Arch-shaped portrait frame */}
      <div
        className="relative overflow-hidden border-2 border-[rgba(212,175,55,0.45)] shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
        style={{
          width: '220px',
          height: '300px',
          borderRadius: '110px 110px 18px 18px',
          background: 'linear-gradient(180deg, #3a2010 0%, #1b130f 100%)',
        }}
      >
        {/* Gold inner frame */}
        <div
          className="absolute inset-1.5 overflow-hidden z-10"
          style={{ borderRadius: '104px 104px 14px 14px' }}
        >
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover object-top transition-transform duration-700 hover:scale-110"
            style={{ filter: 'sepia(15%) saturate(110%) brightness(0.92)' }}
          />
          {/* Gradient overlay on image */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, transparent 55%, rgba(18,13,8,0.7) 100%)',
            }}
          />
        </div>

        {/* Decorative corner accents */}
        <svg className="absolute top-2 left-2 z-20 opacity-70" width="28" height="28" viewBox="0 0 28 28">
          <path d="M2 14 Q2 2 14 2" stroke="#d4af37" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="4" cy="4" r="1.5" fill="#d4af37" fillOpacity="0.6" />
        </svg>
        <svg className="absolute top-2 right-2 z-20 opacity-70" width="28" height="28" viewBox="0 0 28 28">
          <path d="M26 14 Q26 2 14 2" stroke="#d4af37" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="24" cy="4" r="1.5" fill="#d4af37" fillOpacity="0.6" />
        </svg>
      </div>

      {/* Name */}
      <h3 className="font-cinzel text-base md:text-lg font-semibold text-gold tracking-[0.15em]">
        {person.name}
      </h3>

      {/* Description */}
      <p
        className="font-cormorant italic text-center text-warm-text/60 text-sm leading-relaxed"
        style={{ maxWidth: '200px' }}
      >
        {person.description}
      </p>
    </motion.div>
  )
}
