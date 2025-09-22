// src/components/nav/MainNav.tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

function HamburgerIcon() {
  // Stroke-only lines in brand colour (#031F3E)
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="#031F3E" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export default function MainNav() {
  const [open, setOpen] = useState(false)

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="flex justify-center px-4 pt-4">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto -mt-3 rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Desktop nav (no logo here) */}
            <nav className="hidden md:flex items-center gap-10 font-medium text-slate-800">
              <Link className="hover:text-[color:#031F3E]" href="/">Home</Link>
              <Link className="hover:text-[color:#031F3E]" href="/about">About Us</Link>
              <Link className="hover:text-[color:#031F3E]" href="/what-we-do">What We Do</Link>
              <Link className="hover:text-[color:#031F3E]" href="/our-work">Our Work</Link>
              <Link className="hover:text-[color:#031F3E]" href="/contact">Contact Us</Link>
            </nav>

            {/* Divider + hamburger (stroke lines in brand colour) */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block h-6 w-px bg-slate-200" />
              <button
                id="nav-trigger"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="nav-drawer"
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-12 items-center justify-center rounded-md border border-[color:#031F3E] bg-white hover:bg-slate-50"
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Off-canvas Drawer */}
      {open && (
        <>
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-black/40"
          />
          {/* Panel */}
          <aside
            id="nav-drawer"
            className="fixed right-0 top-0 z-[61] h-screen w-80 max-w-[88vw] bg-white shadow-2xl ring-1 ring-black/10
                       translate-x-0 animate-[slideIn_.2s_ease-out] will-change-transform"
            role="dialog"
            aria-labelledby="nav-trigger"
          >
            <style>{`
              @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0%); } }
            `}</style>

            <div className="flex items-center justify-between px-5 py-4 border-b">
              <span className="font-semibold text-slate-800">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-slate-900 text-xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <nav className="px-5 py-4 text-slate-800">
              <DrawerLink href="/">Home</DrawerLink>
              <DrawerLink href="/about">About Us</DrawerLink>
              <DrawerLink href="/what-we-do">What We Do</DrawerLink>
              <DrawerLink href="/our-work">Our Work</DrawerLink>
              <DrawerLink href="/contact">Contact</DrawerLink>

              <div className="mt-6 border-t pt-4 space-y-3 text-[15px]">
                <a href="tel:+27110829828" className="block font-semibold hover:text-[color:#031F3E]">
                  +27 11 082 9828
                </a>
                <a href="mailto:info@impisiresources.com" className="block font-semibold hover:text-[color:#031F3E]">
                  info@impisiresources.com
                </a>
              </div>
            </nav>
          </aside>
        </>
      )}
    </div>
  )
}

function DrawerLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="block py-3 border-b border-slate-200 hover:text-[color:#031F3E]">
      {children}
    </a>
  )
}
