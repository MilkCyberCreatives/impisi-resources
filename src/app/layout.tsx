// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const SITE_URL = 'https://impisiresources.com'
const DESC =
  'Impisi Resources specialises in the processing and trading of Chrome Ore Concentrate — prioritising quality, efficiency and reliable delivery.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Impisi Resources',
    template: '%s | Impisi Resources',
  },
  description: DESC,
  alternates: { canonical: '/' },
  icons: {
    icon: '/Impisi-Resources-Logo.svg',
    shortcut: '/Impisi-Resources-Logo.svg',
    apple: '/Impisi-Resources-Logo.svg',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Impisi Resources',
    description: DESC,
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impisi Resources',
    description: DESC,
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {/* Always-on-top floating button */}
        <ScrollToTop />
      </body>
    </html>
  )
}
