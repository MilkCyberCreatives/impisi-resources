// src/app/page.tsx
import Hero from '@/components/home/Hero'
import WhatWeDo from '@/components/home/WhatWeDo'
import AboutUsSection from '@/components/home/AboutUsSection'
import OurWorkPreview from '@/components/home/OurWorkPreview'
import OperationsBand from '@/components/home/OperationsBand'
// import ContactCTA from '@/components/home/ContactCTA'


export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <WhatWeDo />
      <AboutUsSection />
      <OurWorkPreview />
      <OperationsBand />  {/* <-- new section */}
      {/* <ContactCTA /> */}
    </main>
  )
}
