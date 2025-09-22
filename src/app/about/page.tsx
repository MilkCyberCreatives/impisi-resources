// src/app/about/page.tsx
import type { Metadata } from 'next'
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
  title: 'About Us | Impisi Resources',
  description:
    'Impisi Resources operates in mineral beneficiation—processing and trading Chrome Ore Concentrate with a focus on quality, efficiency and sustainability.',
  openGraph: {
    title: 'About Us | Impisi Resources',
    description:
      'Impisi Resources operates in mineral beneficiation—processing and trading Chrome Ore Concentrate with a focus on quality, efficiency and sustainability.',
    url: 'https://impisiresources.com/about',
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
function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M22 12h-2M4 12H2M12 2v2M12 20v2" />
    </svg>
  )
}
function IconEye() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" />
      <circle cx="12" cy="12" r="3" />
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
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
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

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate">
        <img
          src="/images/about/hero.jpg"
          alt="Impisi Resources operations"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:#031F3E]/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32 lg:py-36 text-white">
          <nav aria-label="Breadcrumb" className="text-white/70 text-sm">
            <a href="/" className="hover:text-white">Home</a>
            <span className="px-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            About Us
          </h1>
          <p className="mt-4 max-w-[65ch] text-white/90 md:text-lg leading-relaxed">
            Specialists in the processing and trading of Chrome Ore Concentrate—driven by quality,
            efficiency, and responsible growth.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src="/images/about/operations.jpg"
                alt="Chrome processing facility"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[color:#031F3E]/70">
              Who we are
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[color:#031F3E] leading-tight">
              Mineral Beneficiation with a Focus on Quality
            </h2>
            <div className="mt-4 space-y-4 text-slate-700 md:text-lg leading-relaxed max-w-[65ch]">
              <p>
                Impisi Resources operates within the mineral beneficiation sector, specializing in
                the processing and trading of Chrome Ore Concentrate. We partner closely with mines
                and buyers to deliver reliable, on-spec product.
              </p>
              <p>
                Our team prioritises safety, grade consistency, and operational efficiency—supported
                by rigorous QA and responsible water/energy use.
              </p>
            </div>

            {/* VIEW COMPANY PROFILE button */}
            <div className="mt-8">
              <a
                href="/images/about/company-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-stretch overflow-hidden rounded-md ring-1 ring-[color:#031F3E]/20 focus:outline-none focus:ring-2 focus:ring-[color:#031F3E]/40"
              >
                <span className="inline-flex h-12 items-center bg-white px-6 text-[color:#031F3E] font-semibold">
                  VIEW COMPANY PROFILE (PDF)
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center bg-[color:#031F3E] text-white">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 auto-rows-fr">
            {/* Mission */}
            <article
              id="mission"
              className="scroll-mt-28 h-full rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 text-[color:#031F3E]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:#031F3E]/10">
                  <IconTarget />
                </span>
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Operate a safe, efficient chrome wash plant that meets customer specifications and
                delivers consistent grades on time. We focus on continuous improvement and maintain
                strict compliance with environmental standards.
              </p>
              <ul className="mt-5 grid gap-3 text-slate-700">
                <li className="flex items-center gap-2"><Check /> Safety-first operations</li>
                <li className="flex items-center gap-2"><Check /> Consistent grading & QA</li>
                <li className="flex items-center gap-2"><Check /> Reliable logistics & delivery</li>
              </ul>
              <div className="mt-6" />
            </article>

            {/* Vision */}
            <article
              id="vision"
              className="scroll-mt-28 h-full rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 text-[color:#031F3E]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:#031F3E]/10">
                  <IconEye />
                </span>
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                To be a trusted African leader in mineral beneficiation—known for reliability,
                efficiency, and responsible growth with long-term value for partners and communities.
              </p>
              <ul className="mt-5 grid gap-3 text-slate-700">
                <li className="flex items-center gap-2"><Check /> Quality leadership</li>
                <li className="flex items-center gap-2"><Check /> Operational excellence</li>
                <li className="flex items-center gap-2"><Check /> Sustainable growth</li>
              </ul>
              <div className="mt-6" />
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[color:#031F3E]/70">
            Our Values
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[color:#031F3E] leading-tight">
            What we stand for
          </h2>

          <div className="mt-8 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<IconShield />}
              title="Safety & Compliance"
              text="Zero-harm mindset and strict adherence to regulatory and environmental standards."
            />
            <ValueCard
              icon={<IconLeaf />}
              title="Sustainability"
              text="Efficient water and energy use with ongoing improvements in plant performance."
            />
            <ValueCard
              icon={<IconTarget />}
              title="Quality First"
              text="Consistent grades backed by testing, sampling and customer feedback loops."
            />
            <ValueCard
              icon={<IconEye />}
              title="Reliability"
              text="Predictable supply and logistics—on time and to spec."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[color:#031F3E]/70">
              People
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[color:#031F3E] leading-tight">
              Experienced. Hands-on. Accountable.
            </h2>
            <p className="mt-4 text-slate-700 md:text-lg leading-relaxed max-w-[65ch]">
              Our operations team combines plant management, process control, and logistics
              experience to keep throughput and quality stable even under changing feed conditions.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-stretch overflow-hidden rounded-md ring-1 ring-[color:#031F3E]/20"
              >
                <span className="inline-flex h-12 items-center bg-white px-6 text-[color:#031F3E] font-semibold">
                  TALK TO US
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center bg-[color:#031F3E] text-white">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img
              src="/images/about/team.jpg"
              alt="Impisi Resources team"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

/* ——— helpers ——— */

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-[color:#031F3E]">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:#031F3E]/10">
          {icon}
        </span>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-700 leading-relaxed">{text}</p>
    </div>
  )
}
