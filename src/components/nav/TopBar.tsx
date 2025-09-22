// src/components/nav/TopBar.tsx
import Link from 'next/link'

/** Force the logo to render as pure white using mask-image (works regardless of SVG fill colors). */
function LogoWhite({ className = '' }: { className?: string }) {
  const style: React.CSSProperties = {
    WebkitMask: "url('/Impisi-Resources-Logo.svg') no-repeat center / contain",
    mask: "url('/Impisi-Resources-Logo.svg') no-repeat center / contain",
    backgroundColor: '#fff',
  }
  return <span aria-hidden className={className} style={style} />
}

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
      {children}
    </span>
  )
}

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
function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default function TopBar() {
  return (
    <div className="bg-[color:#031F3E]/90 text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-4">
        {/* Logo (pure white + larger) */}
        <Link href="/" className="flex items-center gap-2">
          <LogoWhite className="block h-16 w-44 md:h-20 md:w-56" />
        </Link>

        {/* Contact trio */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="tel:+27110829828" className="flex items-center gap-3 opacity-90 hover:opacity-100">
            <CircleIcon><IconPhone /></CircleIcon>
            <div className="leading-tight">
              <div className="text-white/80">Call:</div>
              <div className="font-semibold">+27 11 082 9828</div>
            </div>
          </a>
          <a href="mailto:info@impisiresources.com" className="flex items-center gap-3 opacity-90 hover:opacity-100">
            <CircleIcon><IconMail /></CircleIcon>
            <div className="leading-tight">
              <div className="text-white/80">Email:</div>
              <div className="font-semibold">info@impisiresources.com</div>
            </div>
          </a>
          <div className="flex items-center gap-3 opacity-90">
            <CircleIcon><IconClock /></CircleIcon>
            <div className="leading-tight">
              <div className="text-white/80">Working Hours:</div>
              <div className="font-semibold">Mon - Fri 9:00AM - 4:00PM</div>
            </div>
          </div>
        </div>

        {/* READ MORE (dark square + white label) */}
        <div className="hidden md:flex items-center">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-l-md bg-[color:#031F3E] text-white">
            <IconArrowRight />
          </span>
          <a
            href="/about"
            className="inline-flex h-10 items-center rounded-r-md bg-white px-4 text-[color:#031F3E] font-semibold"
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  )
}
