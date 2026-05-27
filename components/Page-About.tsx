import { BleedImage, H1, H2 } from '@/components/ui'

const steps = [
  {
    title: 'Meet',
    description: 'We get to know your business, your goals, and what success looks like for you.',
  },
  {
    title: 'Create',
    description: 'We develop concepts and build out the full creative direction.',
  },
  {
    title: 'Deliver',
    description: 'Polished work, on time and ready to launch.',
  },
  {
    title: 'Refine',
    description: 'We stay in your corner for revisions, refreshes, and whatever comes next.',
  },
]

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section id="hero" className="bg-eb-800 px-4 pt-40 pb-20">
        <div className="max-w-7xl mx-auto">
          <H1 className="text-white max-w-3xl">About</H1>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-eb-500 uppercase tracking-widest text-xs mb-10"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Our Story
            </p>
            <H2 className="text-eb-600 mb-6">
              Independent thinking. Straightforward results.
            </H2>
            <p
              className="text-eb-dark text-base leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Easy Brands is an independent creative studio rooted in Hobart, working with individuals and organisations. We combine cutting-edge strategies with functional, no-fuss design to help your business reach its goals.
            </p>
            <p
              className="text-eb-dark text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We think and work the way you need us to. Agile, flexible, and always shaped around your style. Whether you need a full brand identity or a single campaign, we adapt to fit.
            </p>
          </div>
          <BleedImage src="/ABT001.webp" alt="Easy Brands studio" bleed="right" />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-4 bg-eb-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <BleedImage src="/SVC001.webp" alt="Easy Brands process" bleed="left" />
          <div>
            <p
              className="text-eb-500 uppercase tracking-widest text-xs mb-10"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              How We Work
            </p>
            <H2 className="text-eb-600 mb-10">A simple process built around you.</H2>
            <div>
              {steps.map((step, i) => (
                <div key={step.title} className="relative pl-6 pb-5 last:pb-0">
                  <div className="absolute left-0 top-[7px] w-[10px] h-[10px] rounded-full bg-eb-600 z-10" />
                  {i < steps.length - 1 && (
                    <div className="absolute left-[4.5px] top-[17px] bottom-[-12px] w-px bg-eb-300" />
                  )}
                  <p
                    className="text-eb-600 font-medium mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-eb-dark text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
