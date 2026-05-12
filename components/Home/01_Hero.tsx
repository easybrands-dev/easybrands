export default function HeroSection() {
  return (
    <section className="px-5 pt-24 pb-16 md:pt-80 md:pb-40 max-w-7xl mx-auto">
      <h1
        className="text-eb-600 text-[3em] leading-none font-normal mb-12"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Brand Identity, Web Design & Print for Tasmanian Businesses
      </h1>
      <div className="flex gap-4 flex-wrap">
        <a
          href="/contact"
          className="px-6 py-3 bg-eb-400 text-white text-sm uppercase rounded-[8px] hover:opacity-90 transition-opacity"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Let&apos;s Start
        </a>
        <a
          href="/services"
          className="px-6 py-3 border border-eb-text/20 text-eb-text text-sm uppercase rounded-[8px] hover:border-eb-text transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Our Services
        </a>
      </div>
    </section>
  )
}
