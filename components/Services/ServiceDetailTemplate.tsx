import Image from 'next/image'

export type ServiceData = {
  label: string
  title: string
  tagline: string
  intro: string
  body: string[]
  deliverables: string[]
  image?: string
}

export default function ServiceDetailTemplate({ service }: { service: ServiceData }) {
  return (
    <main>
      {/* Hero */}
      <section className="bg-eb-800 px-5 pt-40 pb-24">
        <p
          className="text-white/30 uppercase tracking-widest text-xs mb-10"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {service.label}
        </p>
        <h1
          className="text-5xl md:text-6xl text-white font-normal max-w-3xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {service.title}
        </h1>
        <p
          className="mt-6 text-white/50 text-lg max-w-xl"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {service.tagline}
        </p>
      </section>

      {/* Body */}
      <section className="py-24 px-5 bg-white">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1 max-w-2xl">
            <p
              className="text-eb-text/80 text-lg leading-relaxed mb-8 font-medium"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {service.intro}
            </p>
            {service.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-eb-text/60 text-base leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="md:w-72 flex-shrink-0">
            <p
              className="text-eb-text/30 uppercase tracking-widest text-xs mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              What&apos;s Included
            </p>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-eb-text/70"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="w-1 h-1 rounded-full bg-eb-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Image block */}
      {service.image && (
        <div className="relative w-full h-[480px] bg-eb-100">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>
      )}

      {/* CTA */}
      <section className="py-24 px-5 bg-eb-50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2
            className="text-4xl text-eb-800 max-w-md"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Interested in {service.label}?
          </h2>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-eb-400 text-white rounded-[8px] font-medium text-sm uppercase hover:opacity-90 transition-opacity self-start md:self-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  )
}
