'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Images } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

const FILTERS = ['All', 'Pre Wedding', 'Ceremony', 'Celebrations']

const GALLERY_IMAGES = [
  { id: 1, src: '/images/1.PNG', category: 'Pre Wedding', alt: 'Pre Wedding Photo 1' },
  { id: 2, src: '/images/2.PNG', category: 'Pre Wedding', alt: 'Pre Wedding Photo 2' },
  { id: 3, src: '/images/3.PNG', category: 'Ceremony', alt: 'Ceremony Photo 1' },
  { id: 4, src: '/images/4.PNG', category: 'Celebrations', alt: 'Celebrations Photo 1' },
  { id: 5, src: '/images/5.PNG', category: 'Ceremony', alt: 'Ceremony Photo 2' },
  { id: 6, src: '/images/6.PNG', category: 'Celebrations', alt: 'Celebrations Photo 2' },
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null)

  const filtered =
    activeFilter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === activeFilter)

  return (
    <section id="gallery" className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Gallery_Bg.png"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-bg/72" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle title="Gallery" className="mb-12" />
        </ScrollReveal>

        {/* Filter buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {FILTERS.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-2 rounded-full font-cinzel text-[10px] tracking-[0.22em] uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gold text-bg shadow-[0_0_18px_rgba(212,175,55,0.4)]'
                    : 'border border-[rgba(212,175,55,0.35)] text-warm-text/70 hover:border-gold/60 hover:text-gold/80'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid — uniform 4-column, consistent aspect ratio */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.28)] bg-card aspect-[3/4]"
                onClick={() => setLightboxImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d08]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="w-11 h-11 rounded-full border border-gold/70 bg-[rgba(18,13,8,0.6)] flex items-center justify-center backdrop-blur-sm">
                    <ZoomIn size={18} className="text-gold" />
                  </div>
                </div>
                {/* Gold border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[rgba(212,175,55,0.55)] transition-all duration-400 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more — only shown when more than 10 photos are in the current filter */}
        {filtered.length > 10 && (
          <ScrollReveal delay={0.2} className="mt-10 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 26px rgba(212,175,55,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-8 py-3 rounded-full border border-[rgba(212,175,55,0.4)] text-warm-text/75 font-cinzel text-[10px] tracking-[0.28em] uppercase hover:border-gold/70 hover:text-gold transition-all duration-300"
            >
              <Images size={14} strokeWidth={1.8} />
              View More Photos
            </motion.button>
          </ScrollReveal>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.35)] shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[rgba(18,13,8,0.8)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-warm-text/80 hover:text-gold hover:border-gold/60 transition-all backdrop-blur-sm"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-0 inset-x-0 py-3 px-5 bg-gradient-to-t from-[rgba(18,13,8,0.9)] to-transparent">
                <p className="font-cinzel text-[10px] tracking-widest text-gold/70 uppercase">
                  {lightboxImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
