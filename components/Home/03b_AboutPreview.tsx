import Image from 'next/image'

export default function AboutPreviewSection() {
  return (
    <section className="py-24 px-5 bg-eb-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* Photo */}
        <div className="w-full md:w-1/2 relative aspect-square overflow-hidden rounded-[8px] flex-shrink-0">
          <Image
            src="/team-photo.webp"
            alt="Easy Brands team"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <p
            className="text-white/30 uppercase tracking-widest text-xs mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            About
          </p>
          <h2
            className="text-4xl md:text-5xl text-white font-normal mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            We build brands people actually remember
          </h2>
          <p
            className="text-white/50 text-base leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Easy Brands is a Tasmanian creative studio helping businesses stand out through bold brand identity, design, and digital presence. We keep our client list small so every project gets our full attention.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/about"
              className="px-6 py-3 border border-white/20 text-white text-sm uppercase rounded-[8px] hover:border-white transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-eb-400 text-white text-sm uppercase rounded-[8px] hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Let&apos;s Start
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
