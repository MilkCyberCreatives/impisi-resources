// src/components/home/AboutUsSection.tsx
'use client'

import { useMemo, useState } from 'react'

type Tab = 'about' | 'vision' | 'mission'

export default function AboutUsSection() {
  const [tab, setTab] = useState<Tab>('about')

  const content = useMemo(() => {
    switch (tab) {
      case 'vision':
        return {
          title: 'Vision',
          paras: [
            'To be a trusted African leader in mineral beneficiation — known for reliability, efficiency, and responsible growth.',
            'We aim to set a high bar for product quality and operational excellence while creating long-term value for partners and communities.',
          ],
        }
      case 'mission':
        return {
          title: 'Our Mission',
          paras: [
            'Operate a safe, efficient chrome wash plant that meets customer specifications and delivers consistent grades on time.',
            'Prioritise quality assurance, continuous improvement, and sustainable practices that respect environmental standards.',
          ],
        }
      default:
        return {
          title: 'About Us',
          paras: [
            'Impisi Resources operates within the mineral beneficiation sector, specializing in the processing and trading of Chrome Ore Concentrate.',
            'Our goal is to become a trusted provider of high-grade chrome concentrate for both local and international markets—prioritising quality, efficiency, and sustainability.',
          ],
        }
    }
  }, [tab])

  const scrollDown = () =>
    window.scrollBy({ top: Math.round(window.innerHeight * 0.9), left: 0, behavior: 'smooth' })

  return (
    <section id="about-home" aria-labelledby="about-title" className="relative bg-white">
      {/* LEFT RAIL — bold text only */}
      <div className="pointer-events-auto absolute left-3 top-1/2 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4">
        <button
          onClick={scrollDown}
          className="transform rotate-90 whitespace-nowrap text-[color:#031F3E] font-semibold tracking-widest hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[color:#031F3E]/40"
          aria-label="Scroll down"
          title="Scroll down"
        >
          Scroll Down
        </button>
        <span className="h-40 w-px bg-[color:#031F3E]/30" />
      </div>

      {/* RIGHT RAIL — text-only tabs with clear separation */}
      <div className="pointer-events-auto absolute right-4 top-0 hidden h-full lg:flex flex-col items-center justify-between py-16">
        <span className="h-24 w-px bg-[color:#031F3E]/30" />
        <div className="flex flex-col items-center gap-8 text-[color:#031F3E]">
          <RailDivider />
          <RailText label="Mission" active={tab === 'mission'} onClick={() => setTab('mission')} />
          <RailDivider />
          <RailText label="Vision" active={tab === 'vision'} onClick={() => setTab('vision')} />
          <RailDivider />
          <RailText label="About us" active={tab === 'about'} onClick={() => setTab('about')} />
          <RailDivider />
        </div>
        <span className="h-24 w-px bg-[color:#031F3E]/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2">
          {/* LEFT: Image (place /about-us.jpg in /public) */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src="/about-us.jpg"
                alt="Impisi Resources chrome wash plant"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Content (switches with tab) */}
          <div className="order-1 lg:order-2">
            <h2
              id="about-title"
              className="text-[40px] md:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-[color:#031F3E]"
            >
              {content.title}
            </h2>

            <div className="mt-6 space-y-5 max-w-xl text-slate-700">
              {content.paras.map((p, i) => (
                <p key={i} className="text-base md:text-lg">
                  {p}
                </p>
              ))}
            </div>

            {/* Main CTA (unchanged) */}
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-stretch overflow-hidden rounded-md ring-1 ring-[color:#031F3E]/20 focus:outline-none focus:ring-2 focus:ring-[color:#031F3E]/40"
              >
                <span className="inline-flex h-12 items-center bg-white px-6 text-sm md:text-base font-semibold text-[color:#031F3E]">
                  MORE ABOUT US
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center bg-[color:#031F3E] text-white">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* --- Right-rail helpers (text-only) --- */

function RailDivider() {
  return <span className="h-6 w-px bg-[color:#031F3E]/20" />
}

function RailText({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`transform rotate-90 whitespace-nowrap text-sm tracking-widest transition-opacity ${
        active ? 'text-[color:#031F3E] font-semibold' : 'text-[color:#031F3E]/70 hover:opacity-100'
      } focus:outline-none focus:ring-2 focus:ring-[color:#031F3E]/30 rounded`}
      aria-pressed={active}
      aria-label={label}
      title={label}
    >
      {label}
    </button>
  )
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
