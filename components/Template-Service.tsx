import { BleedImage, H1, H2, H3, Button } from '@/components/ui'
import CTABannerSection from '@/components/Section-Contact'
import ProjectsGridSection from '@/components/Section-Projects-Grid'

export type ServiceFeature = {
  icon: React.ReactNode
  title: string
  description: string
}

export type ServiceData = {
  label: string
  title: string
  intro: string
  body: string[]
  features: ServiceFeature[]
  whyTitle: string
  whyBody: string[]
  image?: string
  whyImage?: string
}

export default function ServiceDetailTemplate({ service }: { service: ServiceData }) {
  const heroImage = service.image ?? '/SVC001.webp'
  const whyImage = service.whyImage ?? heroImage

  return (
    <main>

      {/* Hero — page title */}
      <section id="hero" className="bg-eb-800 px-4 pt-20 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <H1 className="text-white max-w-3xl">{service.label}</H1>
        </div>
      </section>

      {/* Intro — image overflows left out of the container to viewport edge */}
      <section id="intro" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <BleedImage src={heroImage} alt={service.title} bleed="left" />

          <div>
            <p
              className="text-eb-500 uppercase tracking-widest text-xs mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {service.label}
            </p>
            <H2 className="text-eb-600 mb-8">{service.title}</H2>
            <p
              className="text-eb-dark text-base leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {service.intro}
            </p>
            {service.body.map((p, i) => (
              <p
                key={i}
                className="text-eb-dark text-base leading-relaxed mb-4 last:mb-0"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {p}
              </p>
            ))}
            <div className="mt-8">
              <Button href="/contact">Contact Us</Button>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-eb-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {service.features.map((feature) => (
            <div key={feature.title}>
              <div className="text-eb-500 mb-5 [&>svg]:w-10 [&>svg]:h-10">{feature.icon}</div>
              <H3 className="text-eb-600 mb-3">{feature.title}</H3>
              <p
                className="text-eb-dark text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <p
              className="text-eb-500 uppercase tracking-widest text-xs mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Why Easy Brands
            </p>
            <H2 className="text-eb-600 mb-6">{service.whyTitle}</H2>
            {service.whyBody.map((p, i) => (
              <p
                key={i}
                className="text-eb-dark text-base leading-relaxed mb-4 last:mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {p}
              </p>
            ))}
            <div className="mt-8">
              <Button href="/contact">Contact Us</Button>
            </div>
          </div>

          <BleedImage src={whyImage} alt={service.whyTitle} bleed="right" />

        </div>
      </section>

      {/* Recent Work */}
      <ProjectsGridSection title="Recent Work" heading="Check out our projects" limit={3} columns={3} />

      <CTABannerSection />

    </main>
  )
}
