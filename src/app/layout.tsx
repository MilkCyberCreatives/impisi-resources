// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://impisiresources.com'),
  title: { default: 'Impisi Resources', template: '%s | Impisi Resources' },
  description:
    'Impisi Resources operates within the mineral beneficiation sector, specializing in the processing and trading of Chrome Ore Concentrate.',
  icons: {
    icon: '/Impisi-Resources-Logo.svg',
    shortcut: '/Impisi-Resources-Logo.svg',
    apple: '/Impisi-Resources-Logo.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://impisiresources.com',
    siteName: 'Impisi Resources',
    title: 'Impisi Resources',
    description: 'Specialists in the processing and trading of Chrome Ore Concentrate.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Impisi Resources' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impisi Resources',
    description: 'Specialists in the processing and trading of Chrome Ore Concentrate.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://impisiresources.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Impisi Resources',
    url: 'https://impisiresources.com',
    logo: 'https://impisiresources.com/Impisi-Resources-Logo.svg',
    email: 'info@impisiresources.com',
    telephone: '+27-11-082-9828',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Atrium on 5th, 5th St, Sandhurst',
      addressLocality: 'Sandton',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    sameAs: [] as string[],
  }

  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Impisi Resources',
    url: 'https://impisiresources.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://impisiresources.com/search?q={query}',
      'query-input': 'required name=query',
    },
  }

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      </body>
    </html>
  )
}
