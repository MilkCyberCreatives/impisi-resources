// src/app/contact/page.tsx
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import StructuredData from '@/components/StructuredData'

<StructuredData
  org={{
    name: 'Impisi Resources',
    url: 'https://impisiresources.com',
    logo: 'https://impisiresources.com/Impisi-Resources-Logo.svg',
    telephone: '+27 11 082 9828',
    sameAs: [
      // add if you have them:
      // 'https://www.linkedin.com/company/your-company',
      // 'https://www.facebook.com/your-page',
    ],
  }}
  local={{
    name: 'Impisi Resources',
    telephone: '+27 11 082 9828',
    address: {
      streetAddress: 'Atrium on 5th, 5th St',
      addressLocality: 'Sandhurst',
      addressRegion: 'Gauteng',
      postalCode: '2196',
      addressCountry: 'ZA',
    },
    geo: { latitude: -26.107665, longitude: 28.052501 },
  }}
  // optional site search (only add if you have a search page/endpoint)
  // siteSearch={{
  //   url: 'https://impisiresources.com',
  //   target: 'https://impisiresources.com/?q={search_term_string}',
  //   queryInput: 'required name=search_term_string',
  // }}
/>


export const metadata: Metadata = {
  title: 'Contact | Impisi Resources',
  description:
    'Contact Impisi Resources – quick responses, clear specifications, reliable delivery. Call, email, or send us a message.',
  openGraph: {
    title: 'Contact | Impisi Resources',
    description:
      'Contact Impisi Resources – quick responses, clear specifications, reliable delivery.',
    url: 'https://impisiresources.com/contact',
    images: ['/og-image.jpg'],
    type: 'website',
  },
}

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
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s7-5 7-11a7 7 0 1 0-14 0c0 6 7 11 7 11Z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate">
        <img
          src="/images/what-we-do/hero.jpg"
          alt="Impisi Resources operations"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:#031F3E]/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32 lg:py-36 text-white">
          <nav aria-label="Breadcrumb" className="text-white/70 text-sm">
            <a href="/" className="hover:text-white">Home</a>
            <span className="px-2">/</span>
            <span>Contact</span>
          </nav>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 max-w-[65ch] text-white/90 md:text-lg leading-relaxed">
            Quick responses. Clear specifications. Reliable delivery.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid items-start gap-10 md:gap-16 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
                  <IconPhone />
                </span>
                <div>
                  <div className="text-sm text-slate-500">Call</div>
                  <div className="text-lg font-semibold text-[color:#031F3E]">
                    <a href="tel:+27110829828" className="hover:opacity-90">+27 11 082 9828</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
                  <IconMail />
                </span>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="text-lg font-semibold text-[color:#031F3E]">
                    <a href="mailto:info@impisiresources.com" className="hover:opacity-90">
                      info@impisiresources.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
                  <IconClock />
                </span>
                <div>
                  <div className="text-sm text-slate-500">Working Hours</div>
                  <div className="text-lg font-semibold text-[color:#031F3E]">
                    Mon – Fri, 9:00AM – 4:00PM
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-[color:#031F3E]/10 text-[color:#031F3E]">
                  <IconPin />
                </span>
                <div>
                  <div className="text-sm text-slate-500">Office</div>
                  <div className="text-lg font-semibold text-[color:#031F3E]">
                    Atrium on 5th, 5th St, Sandhurst
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[color:#031F3E]">Send a Message</h2>
            <p className="mt-2 text-slate-600">
              Tell us what you need (grade, size, tonnage, timing). We’ll get back to you shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid items-start gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[color:#031F3E]">Our Location</h3>
            <p className="mt-2 text-slate-700">
              You can visit our offices by following the map directions.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14330.928087106564!2d28.052501!3d-26.107665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957336c9b81e51%3A0xd00ca3e98a953ca3!2sSpaces%20-%20Johannesburg%2C%20Spaces%20Atrium%20on%205th%20Sandton!5e0!3m2!1sen!2sza!4v1758533361894!5m2!1sen!2sza"
              className="w-full h-72 md:h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Impisi Resources Location"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
