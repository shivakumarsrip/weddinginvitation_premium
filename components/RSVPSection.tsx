'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import ScrollReveal from './ui/ScrollReveal'

type FormState = {
  name: string
  phone: string
  guests: string
  attending: 'yes' | 'no' | ''
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>


export default function RSVPSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    guests: '',
    attending: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate(): boolean {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim()) e.phone = 'Please enter your phone number'
    if (!form.guests) e.guests = 'Please select number of guests'
    if (!form.attending) e.attending = 'Please indicate attendance'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section id="rsvp" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/Gallery_Bg.png" alt="" fill className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionTitle
            title="RSVP"
            subtitle="We can't wait to celebrate with you. Kindly let us know your presence."
            className="mb-14"
          />
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* ── Left: Form ── */}
          <ScrollReveal delay={0.1} className="flex-1 w-full">
            {submitted ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <Field
                  label="Full Name(s)"
                  error={errors.name}
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  type="text"
                />

                <Field
                  label="Phone Number"
                  error={errors.phone}
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(v) => update('phone', v)}
                  type="tel"
                />

                {/* Guests */}
                <div>
                  <label className="font-cinzel text-[10px] tracking-[0.2em] text-warm-text/55 uppercase mb-2 block">
                    Number of Guests
                  </label>
                  <select
                    title="Number of Guests"
                    aria-label="Number of Guests"
                    value={form.guests}
                    onChange={(e) => update('guests', e.target.value)}
                    className={`w-full rounded-lg px-4 py-3 font-inter text-sm border outline-none transition-all duration-300 text-warm-text/80 ${
                      errors.guests
                        ? 'border-red-500/60 bg-bg/60'
                        : 'border-[rgba(212,175,55,0.25)] bg-bg/60 focus:border-gold/60 focus:shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                    }`}
                  >
                    <option value="" disabled className="bg-[#1b130f]">Select</option>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n} className="bg-[#1b130f]">
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                  {errors.guests && <FieldError msg={errors.guests} />}
                </div>

                {/* Attending */}
                <div>
                  <label className="font-cinzel text-[10px] tracking-[0.2em] text-warm-text/55 uppercase mb-3 block">
                    Will you be attending?
                  </label>
                  <div className="flex gap-8">
                    {(['yes', 'no'] as const).map((val) => (
                      <label key={val} className="flex items-center gap-2.5 cursor-pointer group">
                        <div
                          onClick={() => update('attending', val)}
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            form.attending === val
                              ? 'border-gold bg-gold/20'
                              : 'border-[rgba(212,175,55,0.35)] group-hover:border-gold/60'
                          }`}
                        >
                          {form.attending === val && (
                            <div className="w-2 h-2 rounded-full bg-gold" />
                          )}
                        </div>
                        <span className="font-inter text-sm text-warm-text/70">
                          {val === 'yes' ? 'Will Attend' : 'Unable to Attend'}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.attending && <FieldError msg={errors.attending} />}
                </div>

                {/* Message */}
                <div>
                  <label className="font-cinzel text-[10px] tracking-[0.2em] text-warm-text/55 uppercase mb-2 block">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Your wishes for the couple..."
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full bg-bg/60 text-warm-text/80 rounded-lg px-4 py-3 font-inter text-sm border border-[rgba(212,175,55,0.25)] focus:border-gold/60 focus:shadow-[0_0_12px_rgba(212,175,55,0.15)] outline-none resize-none transition-all duration-300 placeholder:text-warm-text/25"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(212,175,55,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-accent via-gold to-accent font-cinzel text-[11px] tracking-[0.3em] uppercase text-bg font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-gold-sm"
                  style={{
                    backgroundSize: '200% auto',
                    animation: submitting ? 'shimmer 1.5s linear infinite' : 'none',
                  }}
                >
                  {submitting ? 'Sending...' : 'Submit RSVP'}
                </motion.button>
              </form>
            )}
          </ScrollReveal>

          {/* ── Right: Arch Panel ── */}
          <ScrollReveal delay={0.2} className="flex-shrink-0 hidden md:block">
            <DecorativePanel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function DecorativePanel() {
  return (
    <div className="relative w-[260px]">
      {/* Arch */}
      <div className="relative w-[260px] h-[490px]">
        {/* Parchment background clipped to arch shape */}
        <div className="absolute inset-0 overflow-hidden rounded-t-[130px] bg-[#f5e2b5]">

          {/* Temple image — top 50% with warm sepia treatment */}
          <div className="relative w-full h-[50%]">
            <Image
              src="/images/temple-bg.png"
              alt="Wedding venue"
              fill
              className="object-cover object-[center_20%]"
              style={{ filter: 'sepia(50%) saturate(110%) brightness(1.08)' }}
            />
            {/* Fade into parchment below */}
            <div className="absolute bottom-0 inset-x-0 h-[55%] bg-gradient-to-t from-[#f5e2b5] to-transparent" />
          </div>

          {/* Text — middle 30% on parchment */}
          <div className="h-[30%] flex flex-col items-center justify-center text-center px-8">
            <p className="font-cormorant text-[18px] text-[#5c3418] leading-relaxed">
              Your presence will make our day truly special.
            </p>
            <div className="mt-3 font-cormorant text-[#8b6914] text-2xl leading-none">♥</div>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="h-px w-10 bg-[#b98633]/40" />
              <div className="w-1 h-1 rounded-full bg-[#b98633]/50" />
              <div className="h-px w-10 bg-[#b98633]/40" />
            </div>
          </div>

          {/* Bottom spacer */}
          <div className="h-[20%]" />
        </div>

        {/* Warm gold arch border */}
        <div className="absolute inset-0 pointer-events-none rounded-t-[130px] border-[2px] border-[rgba(180,130,50,0.65)]" />
        <div className="absolute pointer-events-none top-[8px] left-[8px] right-[8px] bottom-0 rounded-t-[122px] border border-[rgba(180,130,50,0.3)]" />

        {/* Flowers — on top of all arch elements */}
        <div className="absolute bottom-0 inset-x-0 h-[22%] z-20 pointer-events-none">
          <Image
            src="/images/flowers.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}

function Field({
  label, error, placeholder, value, onChange, type,
}: {
  label: string; error?: string; placeholder: string
  value: string; onChange: (v: string) => void; type: string
}) {
  return (
    <div>
      <label className="font-cinzel text-[10px] tracking-[0.2em] text-warm-text/55 uppercase mb-2 block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-bg/60 text-warm-text/85 rounded-lg px-4 py-3 font-inter text-sm border outline-none transition-all duration-300 placeholder:text-warm-text/25 ${
          error
            ? 'border-red-500/60 focus:border-red-400'
            : 'border-[rgba(212,175,55,0.25)] focus:border-gold/60 focus:shadow-[0_0_12px_rgba(212,175,55,0.15)]'
        }`}
      />
      {error && <FieldError msg={error} />}
    </div>
  )
}

function FieldError({ msg }: { msg: string }) {
  return <p className="mt-1.5 font-inter text-[10px] text-red-400/80">{msg}</p>
}

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 gap-5 text-center"
    >
      <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center">
        <span className="text-gold text-2xl font-bold leading-none">✓</span>
      </div>
      <h3 className="font-script font-bold text-4xl text-gold-gradient">Thank You!</h3>
      <p className="font-cormorant italic text-warm-text/65 text-base leading-relaxed max-w-xs">
        Your RSVP has been received. We look forward to celebrating with you on our special day.
      </p>
      <div className="flex items-center gap-3 mt-2">
        <div className="h-px w-8 bg-gold/40" />
        <div className="w-1.5 h-1.5 bg-gold rotate-45" />
        <div className="h-px w-8 bg-gold/40" />
      </div>
    </motion.div>
  )
}
