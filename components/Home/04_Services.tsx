import Image from 'next/image'

const services = [
  {
    id: 'brand',
    num: '01',
    title: 'Brand Build',
    description: 'We craft identities that resonate and endure. From strategy to visual execution, we build brands that stand out.',
    href: '/services/brand-design',
    image: '/projects/Brewster-Portfolio-Cover.webp',
  },
  {
    id: 'web',
    num: '02',
    title: 'Website Design',
    description: 'Clean, accessible, and conversion-focused websites that reflect your brand and work seamlessly for your audience.',
    href: '/services/web-development',
    image: '/projects/Item4.webp',
  },
  {
    id: 'print',
    num: '03',
    title: 'Print & Signage',
    description: 'From business cards to large-format signage, we design print materials that make a lasting impression.',
    href: '/services/print-signage',
    image: '/projects/Sandybay-Garden-Co-Portfolio-Cover.webp',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">

        <p
          className="text-eb-text/40 uppercase tracking-widest text-xs mb-6"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Services
        </p>
        <div className="mb-10 max-w-[50%]">
          <h2
            className="text-4xl md:text-5xl text-eb-600 font-normal max-w-xl mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What We Do Best
          </h2>
          <p
            className="text-eb-text/50 text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            From first impression to lasting identity — we offer end-to-end creative services tailored to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group relative aspect-square overflow-hidden rounded-[8px] bg-eb-cream"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eb-900/80 via-eb-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3
                  className="text-3xl text-white font-normal leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
