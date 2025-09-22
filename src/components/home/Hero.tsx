// src/components/home/Hero.tsx
'use client'

import { useEffect, useState } from 'react'

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  )
}
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

type Slide = { src: string; alt: string; title: string; subtitle: string }

const slides: Slide[] = [
  {
    src: '/hero-1.jpg',
    alt: 'Chrome processing plant',
    title: 'Chrome\nProcessing',
    subtitle: 'Specialists in the processing and trading of Chrome Ore Concentrate.',
  },
  {
    src: '/hero-2.jpg',
    alt: 'Chrome wash plant quality',
    title: 'Quality and\nEfficiency',
    subtitle: 'A state of the art chrome wash plant prioritising quality and efficiency.',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  const active = slides[index]

  return (
    <section className="relative isolate overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[color:#031F3E]/80" />
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 md:px-8">
        <button
          aria-label="Previous"
          onClick={prev}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur hover:bg-white/20"
        >
          <ArrowLeft />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur hover:bg-white/20"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Content: more generous spacing + larger type */}
      <div className="relative mx-auto max-w-7xl px-4 text-white min-h-[100svh] flex items-end pb-28 md:pb-40">
        <div className="max-w-3xl pt-56 md:pt-64">
          <h1
            className="text-5xl font-extrabold leading-tight md:text-7xl whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: active.title.replace(/\n/g, '<br />') }}
          />
          <p className="mt-5 text-white/90 text-lg md:text-xl">
            {active.subtitle}
          </p>

          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex overflow-hidden rounded-md font-semibold text-[color:#031F3E]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center bg-[color:#031F3E] text-white">
                <ArrowRight />
              </span>
              <span className="inline-flex items-center justify-center bg-white px-6 text-base md:text-lg">
                MORE ABOUT US
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
