import Image from 'next/image'

export default function AboutCTASection() {
  return (
    <section className="relative overflow-hidden h-[420px] flex items-center">
      <Image
        src="/cta-background.webp"
        alt="CTA background"
        fill
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-eb-400/70 via-eb-accent/30 to-eb-text/80" />
      <div className="relative z-10 w-full px-5">
        <div className="w-full flex flex-col items-end text-right">
          <h2
            className="text-4xl md:text-5xl font-small text-white leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Build Something Great?
          </h2>
          <p className="mb-8 text-white/80 max-w-xl" style={{ fontFamily: 'var(--font-body)' }}>
            Let&apos;s talk about your brand and where you want to take it.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-eb-400 text-white rounded-[8px] font-medium text-sm uppercase hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
