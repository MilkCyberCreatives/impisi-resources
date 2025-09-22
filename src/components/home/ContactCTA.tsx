// src/components/home/ContactCTA.tsx
/** Home – Contact / Get In Touch band (aligned) */

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 3.1 1 1 0 0 1 4 2h4.09a1 1 0 0 1 1 .75l1 3.49a1 1 0 0 1-.27 1L8.91 9.09a16 16 0 0 0 6 6l1.85-1.85a1 1 0 0 1 1-.27l3.49 1a1 1 0 0 1 .75 1z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
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

export default function ContactCTA() {
  return (
    <section aria-labelledby="contactcta-title" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="rounded-2xl bg-[color:#031F3E] text-white shadow-lg">
          {/* 2-column grid: info left, CTA right */}
          <div className="grid items-center gap-8 px-6 py-8 md:grid-cols-[1fr_auto] md:px-10 md:py-10">
            {/* Left */}
            <div>
              <h2 id="contactcta-title" className="text-2xl md:text-3xl font-extrabold">
                Let’s talk about your requirements
              </h2>
              <p className="mt-2 text-white/80">
                Quick responses. Clear specifications. Reliable delivery.
              </p>

              {/* Contact trio (wraps on small screens) */}
              <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-3">
                <Item
                  icon={<IconPhone />}
                  label="Call"
                  value={
                    <a href="tel:+27110829828" className="font-semibold hover:opacity-90">
                      +27 11 082 9828
                    </a>
                  }
                />
                <Item
                  icon={<IconMail />}
                  label="Email"
                  value={
                    <a href="mailto:info@impisiresources.com" className="font-semibold hover:opacity-90">
                      info@impisiresources.com
                    </a>
                  }
                />
                <Item
                  icon={<IconClock />}
                  label="Working Hours"
                  value={<span className="font-semibold">Mon – Fri 9:00AM – 4:00PM</span>}
                />
              </dl>
            </div>

            {/* Right – split CTA, perfectly centered & matched height */}
            <div className="flex justify-start md:justify-end">
              <a
                href="/contact"
                className="inline-flex items-stretch overflow-hidden rounded-md ring-1 ring-white/25 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <span className="inline-flex h-12 items-center bg-white px-6 text-sm md:text-base font-semibold text-[color:#031F3E]">
                  CONTACT US
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

function Item({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10">
        {icon}
      </span>
      <div className="leading-tight">
        <dt className="text-white/80">{label}</dt>
        <dd className="mt-1">{value}</dd>
      </div>
    </div>
  )
}
