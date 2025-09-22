// src/components/home/OperationsBand.tsx
/** Home – Operations band with progress bars, appointment cards, and location (WHITE background) */
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s7-5 7-11a7 7 0 1 0-14 0c0 6 7 11 7 11Z" />
      <circle cx="12" cy="11" r="3" />
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
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 3.1 1 1 0 0 1 4 2h4.09a1 1 0 0 1 1 .75l1 3.49a1 1 0 0 1-.27 1L8.91 9.09a16 16 0 0 0 6 6l1.85-1.85a1 1 0 0 1 1-.27l3.49 1a1 1 0 0 1 .75 1z" />
    </svg>
  )
}

export default function OperationsBand() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Top: Operations 2-col (image height reduced + centered alignment) */}
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* Image (fixed display height on md+; crops nicely with object-cover) */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src="/operations.jpg"
                alt="Operations"
                className="w-full h-64 md:h-80 lg:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Copy + progress */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[color:#031F3E]">Operations</h2>
            <p className="mt-4 text-slate-700 md:text-lg">
              At the heart of Impisi Resources’ operations is a state-of-the-art chrome wash
              plant. This facility emphasises quality, efficiency and environmental compliance.
              By owning and operating its wash plant, Impisi Resources maintains stringent control
              over output quality and adheres to the highest standards.
            </p>

            <div className="mt-6 space-y-5 max-w-lg">
              <Progress label="Quality" value={92} />
              <Progress label="Manufacturing" value={84} />
            </div>
          </div>
        </div>

        {/* Middle: Appointment heading + cards */}
        <h3 className="mt-16 md:mt-20 text-center text-2xl md:text-3xl font-extrabold text-[color:#031F3E]">
          Schedule An Appointment
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={<IconPin />}
            title="Office Address"
            line1="Atrium on 5th, 5th St,"
            line2="Sandhurst"
          />
          <InfoCard
            icon={<IconMail />}
            title="Email Address"
            line1={<a href="mailto:info@impisiresources.com" className="hover:opacity-90">info@impisiresources.com</a>}
            line2=""
          />
          <InfoCard
            icon={<IconClock />}
            title="Operating Hours"
            line1="Monday – Friday"
            line2="9:00 AM to 4:00 PM"
          />
          <InfoCard
            icon={<IconPhone />}
            title="Make a call"
            line1={<a href="tel:+27110829828" className="hover:opacity-90">+27 11 082 9828</a>}
            line2=""
          />
        </div>

        {/* Bottom: Location photo + live Google Map (aligned heights) */}
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img
              src="/location-photo.jpg"
              alt="Operations team"
              className="w-full h-64 md:h-[380px] object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
            {/* Live Google Maps embed — responsive height */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14330.928087106564!2d28.052501!3d-26.107665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957336c9b81e51%3A0xd00ca3e98a953ca3!2sSpaces%20-%20Johannesburg%2C%20Spaces%20Atrium%20on%205th%20Sandton!5e0!3m2!1sen!2sza!4v1758533361894!5m2!1sen!2sza"
              className="w-full h-64 md:h-[380px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Impisi Resources Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ——— helpers ——— */
function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-700">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-[color:#031F3E] transition-[width] duration-700 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

function InfoCard({
  icon,
  title,
  line1,
  line2,
}: {
  icon: React.ReactNode
  title: string
  line1: React.ReactNode
  line2: React.ReactNode | string
}) {
  return (
    <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
      <div className="flex items-start gap-3 text-[color:#031F3E]">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:#031F3E]/5 ring-1 ring-[color:#031F3E]/15 text-[color:#031F3E]">
          {icon}
        </span>
        <div className="leading-tight text-slate-700">
          <div className="font-semibold text-[color:#031F3E]">{title}</div>
          <div className="mt-1">{line1}</div>
          {line2 ? <div>{line2}</div> : null}
        </div>
      </div>
    </div>
  )
}
