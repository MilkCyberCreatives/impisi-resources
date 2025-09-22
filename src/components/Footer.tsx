// src/components/Footer.tsx
import Link from 'next/link'

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 3.1 1 1 0 0 1 4 2h4.09a1 1 0 0 1 1 .75l1 3.49a1 1 0 0 1-.27 1L8.91 9.09a16 16 0 0 0 6 6l1.85-1.85a1 1 0 0 1 1-.27l3.49 1a1 1 0 0 1 .75 1z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}
function IconMap() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
      <path d="M9 3v15M15 6v15" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-[color:#031F3E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + blurb */}
          <div>
            {/* Force white logo + enlarge */}
            <img
              src="/Impisi-Resources-Logo.svg"
              alt="Impisi Resources"
              className="mb-5 h-16 w-auto md:h-20 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Impisi Resources operates within the mineral beneficiation sector, specializing in the
              processing and trading of Chrome Ore Concentrate.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <a href="tel:+27110829828" className="inline-flex items-center gap-2 hover:opacity-90">
                <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15">
                  <IconPhone />
                </span>
                +27 11 082 9828
              </a>
              <br />
              <a
                href="mailto:info@impisiresources.com"
                className="inline-flex items-center gap-2 hover:opacity-90"
              >
                <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15">
                  <IconMail />
                </span>
                info@impisiresources.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 font-semibold tracking-wide text-white">Navigation</h4>
            <ul className="space-y-2 text-white/85">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/what-we-do">What We Do</Link></li>
              <li><Link href="/our-work">Our Work</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h4 className="mb-3 font-semibold tracking-wide text-white">What We Offer</h4>
            <ul className="space-y-2 text-white/85">
              <li><Link href="/what-we-do#products">Products</Link></li>
              <li><Link href="/what-we-do#market-presence">Market Presence</Link></li>
              <li><Link href="/what-we-do#sustainability">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact / Hours / Address */}
          <div>
            <h4 className="mb-3 font-semibold tracking-wide text-white">Contact</h4>

            <div className="space-y-3 text-white/85 text-sm">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-grid h-6 w-6 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <IconClock />
                </span>
                <div>
                  <div className="font-medium text-white">Working Hours</div>
                  Mon – Fri, 9:00AM – 4:00PM
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-grid h-6 w-6 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <IconMap />
                </span>
                <div>
                  <div className="font-medium text-white">Office</div>
                  Atrium on 5th, 5th St, Sandhurst
                </div>
              </div>
            </div>

            <div className="mt-5">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-[color:#031F3E] font-semibold ring-1 ring-white/20 hover:bg-white/90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with attribution */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/75 flex flex-wrap items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Impisi Resources. All rights reserved.</div>

          <div className="text-white/80">
            Website by{' '}
            <a
              href="https://milkcybercreatives.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Milk Cyber Creatives
            </a>
          </div>

          <div className="flex gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/legal">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
