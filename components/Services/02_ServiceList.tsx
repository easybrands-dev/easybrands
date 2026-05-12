const services = [
  {
    id: 'brand',
    num: '01',
    title: 'Brand Build',
    href: '/services/brand-design',
    tagline: 'Identity that endures.',
    description:
      'We craft brand identities from the ground up — strategy, naming, visual language, and tone of voice. Whether you\'re launching something new or repositioning an existing business, we build brands that resonate with the right people.',
    deliverables: ['Logo & identity system', 'Brand guidelines', 'Colour & typography', 'Brand strategy'],
  },
  {
    id: 'web',
    num: '02',
    title: 'Website Design',
    href: '/services/web-development',
    tagline: 'Clean, fast, and built to convert.',
    description:
      'We design and develop websites that reflect your brand, work seamlessly for your audience, and are built for performance. From one-page sites to multi-page platforms, every build is purposeful and accessible.',
    deliverables: ['UX & wireframing', 'Visual design', 'Development & CMS', 'SEO fundamentals'],
  },
  {
    id: 'print',
    num: '03',
    title: 'Print & Signage',
    href: '/services/print-signage',
    tagline: 'Tangible impressions that last.',
    description:
      'From business cards to large-format signage, we design print materials that extend your brand into the physical world. Every piece is crafted for impact and ready for production.',
    deliverables: ['Business stationery', 'Brochures & flyers', 'Vehicle wraps', 'Signage & wayfinding'],
  },
]

export default function ServiceListSection() {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="divide-y divide-eb-text/10">
        {services.map((service) => (
          <div key={service.id} className="py-16">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
              <span
                className="text-eb-text/20 text-sm w-8 flex-shrink-0 mt-1"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {service.num}
              </span>

              <div className="flex-1">
                <h2
                  className="text-4xl md:text-5xl text-eb-600 mb-3 leading-none"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-eb-400 text-sm uppercase tracking-widest mb-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {service.tagline}
                </p>
                <p
                  className="text-eb-text/60 text-base leading-relaxed max-w-xl mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-3 mb-8">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-xs uppercase tracking-widest px-3 py-2 border border-eb-text/10 text-eb-text/50 rounded-[4px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm text-eb-600 hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
