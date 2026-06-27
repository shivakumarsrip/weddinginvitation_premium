'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const EVENTS = [
  {
    day: 4,
    month: 'JUL',
    year: 2026,
    title: 'Haldi',
    date: 'Saturday, 4:00 PM Onwards',
    venue: 'My Sweet Home, Katangur, Telangana 508205',
    description: 'A joyful celebration filled with turmeric, blessings, and laughter.',
    image: '/images/Haldi.png',
    icon: <HaldiIcon />,
  },
  {
    day: 5,
    month: 'JUL',
    year: 2026,
    title: 'Wedding',
    date: 'Sunday, 10:33 AM Onwards',
    venue: 'Near Shivaji Statue, Ashallapally, Warangal',
    description: "The prettiest day to say 'I do' and begin forever.",
    image: '/images/Wedding.png',
    icon: <TempleIcon />,
  },
  {
    day: 6,
    month: 'JUL',
    year: 2026,
    title: 'Reception',
    date: 'Monday, 1:00 PM Onwards',
    venue: 'MSR Function Hall, Katangur, Telangana 508205',
    description: 'An evening to celebrate their new beginning.',
    image: '/images/Reception.png',
    icon: <CelebIcon />,
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with floral panels */}
      <div className="absolute inset-0">
        <Image src="/images/Gallery_Bg.png" alt="" fill className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-bg/72" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="Events" className="mb-16" />
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {EVENTS.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.1}>
              <EventCard event={event} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event, index }: { event: (typeof EVENTS)[number]; index: number }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow:
          '0 16px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.45), 0 0 28px rgba(212,175,55,0.12)',
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative flex items-stretch gap-0 rounded-2xl border border-[rgba(212,175,55,0.45)] overflow-hidden"
      style={{ boxShadow: '0 6px 32px rgba(0,0,0,0.35), 0 1px 0 rgba(212,175,55,0.2) inset' }}
    >
      {/* Texture background */}
      <Image
        src="/images/event_texture.png"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Date badge */}
      <div
        className="relative z-10 flex-shrink-0 flex flex-col items-center justify-center px-5 py-6 min-w-[80px]"
        style={{
          background: 'linear-gradient(180deg, rgba(212,175,55,0.22) 0%, rgba(180,120,50,0.14) 100%)',
          borderRight: '1px solid rgba(212,175,55,0.35)',
        }}
      >
        <span className="font-cinzel text-3xl font-bold text-[#7a4a10] leading-none">{event.day}</span>
        <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#7a4a10]/80 mt-1">{event.month}</span>
        <span className="font-cinzel text-[9px] tracking-wider text-[#5c3418] mt-0.5">{event.year}</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center gap-4 p-5 md:p-6">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.35) 0%, rgba(180,120,50,0.15) 100%)',
            border: '1.5px solid rgba(212,175,55,0.6)',
          }}
        >
          {event.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-[#2c1206] leading-tight mb-1">
            {event.title}
          </h3>
          <p className="font-cinzel text-[9px] md:text-[10px] tracking-[0.2em] text-[#5c3418] uppercase mb-1.5">
            {event.date}
          </p>
          {'venue' in event && event.venue && (
            <p className="flex items-center gap-1.5 font-inter text-[10px] text-[#7a4520] mb-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {event.venue}
            </p>
          )}
          <p className="font-inter text-xs md:text-sm text-[#3d2010] leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Event image — mask fades it into the texture with no hard edge */}
      <div
        className="relative z-10 flex-shrink-0 hidden sm:block"
        style={{
          width: '180px',
          minHeight: '110px',
          maskImage: 'linear-gradient(to right, transparent 0%, black 22%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 22%)',
        }}
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          style={{ filter: 'sepia(15%) saturate(115%) brightness(0.9)' }}
        />
      </div>
    </motion.div>
  )
}

function HaldiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5C10.5 7 10 4.5 12 3C14 4.5 13.5 7 12 9.5Z" />
      <path d="M14.5 12C17 10.5 19.5 10 21 12C19.5 14 17 13.5 14.5 12Z" />
      <path d="M12 14.5C13.5 17 14 19.5 12 21C10 19.5 10.5 17 12 14.5Z" />
      <path d="M9.5 12C7 13.5 4.5 14 3 12C4.5 10 7 10.5 9.5 12Z" />
    </svg>
  )
}

function TempleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8.5" cy="12" r="5.5" />
      <circle cx="15.5" cy="12" r="5.5" />
    </svg>
  )
}

function CelebIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" />
    </svg>
  )
}
