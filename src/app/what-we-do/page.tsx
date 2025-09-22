// src/app/what-we-do/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Do | Impisi Resources',
  description:
    'Chrome ore processing and trading with a focus on quality, reliability and sustainable operations across local and international markets.',
  openGraph: {
    title: 'What We Do | Impisi Resources',
    description:
      'Chrome ore processing and trading with a focus on quality, reliability and sustainable operations across local and international markets.',
    url: 'https://impisiresources.com/what-we-do',
    images: ['/og-image.jpg'],
    type: 'website',
  },
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m20 6-11 11-5-5" />
    </svg>
  )
}

export default function WhatWeDoPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate">
        <img
          src="/images/what-we-do/hero.jpg"
          alt="Chrome wash plant operations"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:#031F3E]/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32 lg:py-36 text-white">
          <nav aria-label="Breadcrumb" className="text-white/70 text-sm">
            <a href="/" className="hover:text-white">Home</a>
            <span className="px-2">/</span>
            <span>What We Do</span>
          </nav>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            What We Do
          </h1>
          <p className="mt-4 max-w-[65ch] text-white/90 md:text-lg leading-relaxed">
            We process and trade Chrome Ore Concentrate to exact specifications—prioritising
            quality, delivery, and long-term partnerships across local and international markets.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[color:#031F3E]/70">
            Products
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[color:#031F3E] leading-tight">
            Chrome Ore Concentrate — consistent grades, dependable supply
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: '38–40% Cr2O3',
                img: '/images/what-we-do/products-1.jpg',
                points: ['Moisture controlled', 'Sized per contract', 'Sampling & COA provided'],
              },
              {
                title: '40–42% Cr2O3',
                img: '/images/what-we-do/products-2.jpg',
                points: ['Stable supply', 'Low contamination', 'Logistics arranged'],
              },
              {
                title: '42%+ Cr2O3',
                img: '/images/what-we-do/products-3.jpg',
                points: ['Premium grade', 'Tight QA tolerances', 'Export ready packaging'],
              },
            ].map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[color:#031F3E]">{card.title}</h3>
                  <ul className="mt-4 grid gap-2 text-slate-700">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
                          <Check />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 md:mt-12">
            <a
              href="/contact"
              className="inline-flex items-stretch overflow-hidden rounded-md ring-1 ring-[color:#031F3E]/20"
            >
              <span className="inline-flex h-12 items-center bg-white px-6 text-[color:#031F3E] font-semibold">
                REQUEST SPECIFICATIONS
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center bg-[color:#031F3E] text-white">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Market Presence */}
      <section id="market-presence" className="scroll-mt-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/what-we-do/market.jpg"
              alt="Local and international market routes"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[color:#031F3E]/70">
              Market Presence
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[color:#031F3E] leading-tight">
              Local deliveries & export logistics—on time
            </h2>
            <p className="mt-4 text-slate-700 md:text-lg leading-relaxed max-w-[65ch]">
              We service domestic smelters and export partners, coordinating road and port logistics
              with clear ETAs and documentation. Our planning focuses on predictable timelines and
              transparent communication from sampling to off-take.
            </p>

            <ul className="mt-6 grid gap-3 text-slate-700">
              {[
                'COA/assay and sampling protocols agreed upfront',
                'Road haulage, port bookings and export documentation',
                'Proactive updates from loading to delivery',
              ].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
                    <Check />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-stretch overflow-hidden rounded-md ring-1 ring-[color:#031F3E]/20"
              >
                <span className="inline-flex h-12 items-center bg-white px-6 text-[color:#031F3E] font-semibold">
                  DISCUSS OFF-TAKE
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center bg-[color:#031F3E] text-white">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[color:#031F3E]/70">
              Sustainability
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[color:#031F3E] leading-tight">
              Responsible operations, continuous improvement
            </h2>
            <p className="mt-4 text-slate-700 md:text-lg leading-relaxed max-w-[65ch]">
              We operate with a zero-harm mindset, managing water, energy and tailings responsibly
              while driving plant efficiency. Compliance is the baseline—we aim to keep improving.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { k: 'Water & energy efficiency', v: 'Ongoing optimisation' },
                { k: 'Environmental compliance', v: 'Audited & documented' },
                { k: 'Community & safety', v: 'Zero-harm focus' },
                { k: 'Quality systems', v: 'Sampling • COA • Traceability' },
              ].map(({ k, v }) => (
                <div key={k} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-[color:#031F3E] font-semibold">{k}</div>
                  <div className="text-slate-700">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/what-we-do/sustainability.jpg"
              alt="Water and energy efficiency at the plant"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[color:#031F3E]">
              Ready to spec a shipment?
            </h3>
            <p className="mt-2 text-slate-700 max-w-[65ch]">
              Send your grade, size and tonnage requirements—we’ll respond quickly with timing and
              logistics options.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-stretch overflow-hidden rounded-md ring-1 ring-[color:#031F3E]/20"
          >
            <span className="inline-flex h-12 items-center bg-white px-6 text-[color:#031F3E] font-semibold">
              CONTACT SALES
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center bg-[color:#031F3E] text-white">
              <ArrowRight />
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}
