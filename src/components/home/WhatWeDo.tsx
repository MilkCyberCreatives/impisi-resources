// src/components/home/WhatWeDo.tsx
/** Home – What We Do / What We Offer (3 cards) */
function IconCube() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 3 7l9 5 9-5-9-5Z" />
      <path d="M3 17l9 5 9-5" />
      <path d="M3 12l9 5 9-5" />
    </svg>
  )
}
function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z" />
    </svg>
  )
}
function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 21C7 21 3 17 3 13 3 6 10 3 21 3c0 11-3 18-10 18Z" />
      <path d="M9 10c1 2 3 4 5 5" />
    </svg>
  )
}

function ReadMore({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex overflow-hidden rounded-md font-semibold text-[color:#031F3E] mt-6"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center bg-[color:#031F3E] text-white">
        {/* arrow */}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
      <span className="inline-flex items-center justify-center bg-white px-4 text-sm">
        READ MORE
      </span>
    </a>
  )
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" aria-labelledby="whatwedo-title" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Section heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[color:#031F3E]/70">
            What We Do
          </p>
          <h2 id="whatwedo-title" className="mt-2 text-3xl md:text-4xl font-extrabold text-[color:#031F3E]">
            What We Offer
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Products */}
          <article
            id="products"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
              <IconCube />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">Products</h3>
            <p className="mt-2 text-slate-600">
              Chrome Ore Concentrate with reliable quality and grading, supported by efficient
              processing and stockpile management.
            </p>
            <ReadMore href="/what-we-do#products" />
          </article>

          {/* Market Presence */}
          <article
            id="market-presence"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
              <IconGlobe />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">Market Presence</h3>
            <p className="mt-2 text-slate-600">
              Established sourcing and distribution partnerships with dependable logistics to keep
              deliveries on time and to specification.
            </p>
            <ReadMore href="/what-we-do#market-presence" />
          </article>

          {/* Sustainability */}
          <article
            id="sustainability"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
              <IconLeaf />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">Sustainability</h3>
            <p className="mt-2 text-slate-600">
              A safety-first culture with compliance to environmental standards and an emphasis on
              efficient water and energy use.
            </p>
            <ReadMore href="/what-we-do#sustainability" />
          </article>
        </div>
      </div>
    </section>
  )
}
