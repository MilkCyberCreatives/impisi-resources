// src/components/home/OurWorkPreview.tsx
/** Home – Our Work (3 tiles + split CTA) — brand background */
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

type WorkItem = {
  id: string
  title: string
  img: string
  href: string
}

const items: WorkItem[] = [
  { id: 'project-1', title: 'Plant Operations',   img: '/our-work-1.jpg', href: '/our-work#plant-operations' },
  { id: 'project-2', title: 'Grading & QA',       img: '/our-work-2.jpg', href: '/our-work#grading-qa' },
  { id: 'project-3', title: 'Material Handling',  img: '/our-work-3.jpg', href: '/our-work#material-handling' },
]

export default function OurWorkPreview() {
  return (
    <section id="our-work" aria-labelledby="ourwork-title" className="bg-[color:#031F3E]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70">
            Our Work
          </p>
          <h2 id="ourwork-title" className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            Featured Operations
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.id}
              href={it.href}
              className="group relative isolate overflow-hidden rounded-2xl border border-white/10 shadow-sm"
            >
              <img
                src={it.img}
                alt={it.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* gradient overlay for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              {/* caption chip */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-2 text-sm font-semibold text-[color:#031F3E] shadow">
                  {it.title}
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[color:#031F3E] text-white">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA (white ring so it pops on dark background) */}
        <div className="mt-10 md:mt-12">
          <a
            href="/our-work"
            className="inline-flex items-stretch overflow-hidden rounded-md ring-1 ring-white/25 shadow-[0_4px_14px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span className="inline-flex h-12 items-center bg-white px-6 text-sm md:text-base font-semibold text-[color:#031F3E]">
              VIEW ALL WORK
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center bg-[color:#031F3E] text-white">
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
