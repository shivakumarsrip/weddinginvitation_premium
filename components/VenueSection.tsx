'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation, MapPin, Clock, Calendar } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const VENUES = [
  {
    label: 'Wedding Ceremony',
    date: 'Sunday, 5th July 2026',
    time: '10:33 AM onwards',
    name: 'Koochana Gardens',
    lines: [
      'Ashalapally Cross Road',
      'Vill: Ashalapally, Mdl: Sangem',
      'Dist: Warangal, Telangana',
    ],
    mapSrc:
      'https://maps.google.com/maps?q=Koochana+Gardens,Ashalapally,Sangem,Warangal,Telangana&z=14&output=embed',
    mapsHref:
      'https://maps.google.com/?q=Koochana+Gardens,Ashalapally,Sangem,Warangal,Telangana',
  },
  {
    label: 'Wedding Reception',
    date: 'Monday, 6th July 2026',
    time: '1:00 PM onwards',
    name: 'MSR Function Hall',
    lines: [
      'Eduloor Road, Katangur',
      'Dist: Nalgonda',
      'Telangana 508205',
    ],
    mapSrc:
      'https://maps.google.com/maps?q=58C7%2BC42+Katangur+Telangana&z=16&output=embed',
    mapsHref:
      'https://maps.google.com/?q=58C7%2BC42+Katangur+Telangana',
  },
]

const VENUE_FEATURES = [
  { icon: <AccessIcon />, title: 'Easy Accessibility', subtitle: 'Well Connected' },
  { icon: <ParkingIcon />, title: 'Ample Parking', subtitle: 'Available' },
  { icon: <ComfortIcon />, title: 'Guest Comfort', subtitle: 'Our Priority' },
  { icon: <StarIcon />, title: 'Memorable Experience', subtitle: 'Guaranteed' },
]

export default function VenueSection() {
  return (
    <section id="venue" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with floral panels */}
      <div className="absolute inset-0">
        <Image src="/images/Gallery_Bg.png" alt="" fill className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-bg/72" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="Venue" className="mb-14" />
        </ScrollReveal>

        {/* Venue cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {VENUES.map((venue, i) => (
            <ScrollReveal key={venue.label} delay={i * 0.12} direction={i === 0 ? 'right' : 'left'}>
              <motion.div
                whileHover={{ borderColor: 'rgba(212,175,55,0.45)', boxShadow: '0 16px 48px rgba(0,0,0,0.55), 0 0 24px rgba(212,175,55,0.08)' }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.2)] shadow-card flex flex-col"
              >
                {/* Map */}
                <div className="venue-map venue-map-container">
                  <iframe
                    src={venue.mapSrc}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={venue.label}
                    className="opacity-90"
                  />
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.35)] to-transparent" />

                {/* Details */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Label */}
                  <p className="font-cinzel text-[9px] tracking-[0.3em] text-gold uppercase">
                    {venue.label}
                  </p>

                  {/* Venue name */}
                  <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-warm-text leading-tight -mt-1">
                    {venue.name}
                  </h3>

                  {/* Date & time */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-gold flex-shrink-0" strokeWidth={1.8} />
                      <span className="font-inter text-xs text-warm-text/80">{venue.date}</span>
                    </div>
                    {venue.time && (
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-gold flex-shrink-0" strokeWidth={1.8} />
                        <span className="font-inter text-xs text-warm-text/80">{venue.time}</span>
                      </div>
                    )}
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2">
                    <MapPin size={13} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                    <div className="flex flex-col gap-0.5">
                      {venue.lines.map((line) => (
                        <span key={line} className="font-inter text-xs text-warm-text/65 leading-relaxed">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Directions button */}
                  <div className="mt-auto pt-2">
                    <a href={venue.mapsHref} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.03, boxShadow: '0 0 22px rgba(212,175,55,0.45)' }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gold text-bg font-cinzel text-[9px] tracking-[0.22em] uppercase font-semibold shadow-gold-sm transition-all duration-300"
                      >
                        <Navigation size={12} strokeWidth={2.5} />
                        Get Directions
                      </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {VENUE_FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(212,175,55,0.5)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(212,175,55,0.1)',
                }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl p-5 flex flex-col items-center text-center gap-3 border border-[rgba(212,175,55,0.18)]"
              >
                <div className="venue-icon-circle w-11 h-11 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <p className="font-cinzel text-[10px] tracking-[0.18em] text-gold/80 uppercase mb-1">
                    {feature.title}
                  </p>
                  <p className="font-inter text-[11px] text-warm-text/50">{feature.subtitle}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function AccessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="5" r="1" />
      <path d="M9 20l3-8 3 8" />
      <path d="M6 10l3 1 1-4 2 4 3-1" />
    </svg>
  )
}

function ParkingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
}

function ComfortIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
