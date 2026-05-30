'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import { H1, H2, H3 } from '@/components/ui'

const services = [
  {
    id: 'brand',
    title: 'Brand Identity',
    description: 'We create thoughtfully designed brands that go beyond aesthetics, connecting with your customers and helping your business stand out in a crowded marketplace.',
    href: '/brand',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'web',
    title: 'Website Design',
    description: 'From engaging websites to high-performing eCommerce stores and bespoke web applications, we design and build digital platforms that drive meaningful results.',
    href: '/website',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 'print',
    title: 'Print & Signage',
    description: 'From business cards to large-format signage, we design print materials that make a lasting impression wherever your brand shows up.',
    href: '/print',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
  },
]

const projectCols = [
  [
    { client: 'Brewster Coffee',      coverImage: '/projects/brewster/BRW001.webp',           tags: ['BRANDING'],          href: '/projects/brewster', aspect: 'aspect-[4/3] md:aspect-square' },
    { client: 'Motor Cycle City',     coverImage: '/projects/motor-cycle-city/MCC004.webp',   tags: ['BRANDING'],          href: '/projects/motor-cycle-city', aspect: 'aspect-[4/3]' },
  ],
  [
    { client: 'Sandy Bay Garden Co.', coverImage: '/projects/sandy-bay-garden-co/SBG001.webp', tags: ['BRANDING', 'PRINT'], href: '/projects/sandy-bay-garden-co', aspect: 'aspect-[4/3]' },
    { client: 'Smokey7 Café',         coverImage: '/projects/smokey7/SMK001.jpg',              tags: ['BRANDING', 'PRINT'], href: '/projects/smokey7', aspect: 'aspect-[4/3] md:aspect-square' },
  ],
]

export default function HomePage() {

  return (
    <main>

      {/* Hero */}
      <section id="hero" className="w-full px-4 py-20 bg-gradient-to-b from-eb-50 to-white">
        <div className="max-w-screen-2xl items-center mx-auto flex flex-col gap-25">
          <div className="flex flex-col items-center text-center gap-6">
            <H1 className="max-w-4xl text-center">
              Brand identity, Web design &amp; Print for Tasmanian businesses
            </H1>
            <p className="text-eb-900/70 text-sm md:text-base max-w-2xl">
              We help Tasmanian businesses stand out with purposeful design, from logos and brand identities to websites and print.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Button href="/contact">Get Started</Button>
              <Button href="#services" variant="outline">Our Services</Button>
            </div>
          </div>
          <div className="w-full aspect-square md:aspect-video rounded-2xl overflow-hidden max-w-6xl">
            <video
              src="/HME001.mp4"
              poster="/HME001.webp"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About preview */}
      <section id="about" className="py-20 md:py-40 px-4 bg-eb-900">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-eb-100/50 uppercase tracking-widest text-xs mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            About us
          </p>
          <h2
            className="text-eb-100 text-2xl md:text-3xl mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Effective branding built to last. Designed for digital and the real world from day one. Not just something that looks good, but what that works for your business and your customers.
          </h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button href="/about" variant="outlineDark">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-eb-400 uppercase tracking-widest text-xs mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Services
          </p>
          <H2 className="mb-12">What we do best</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-eb-dark/20 border border-eb-dark/20">
            {services.map((service) => (
              <a
                key={service.id}
                href={service.href}
                className="group px-6 py-8 md:p-12 flex flex-col gap-6 hover:bg-eb-600 transition-colors duration-300"
              >
                <div className="text-eb-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <H3 className="group-hover:text-white mb-1 md:mb-3 transition-colors duration-300 text-eb-600">
                    {service.title}
                  </H3>
                  <p
                    className="text-eb-dark group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section id="projects" className="py-20 px-4 bg-eb-50">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-eb-text/40 uppercase tracking-widest text-xs mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Featured Works
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <H2>Some of our selected projects</H2>
            <div className="self-start">
              <Button href="/projects" variant="outline">View More</Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            {projectCols.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-3 flex-1">
                {col.map((project, pi) => (
                  <a
                    key={pi}
                    href={project.href}
                    className={`group relative overflow-hidden ${project.aspect} bg-eb-cream block`}
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.client}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <H3 className="text-white mb-2">{project.client}</H3>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-white/70 text-[10px] uppercase tracking-wider border border-white/30 px-2 py-0.5"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
