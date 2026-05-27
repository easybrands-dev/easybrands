import Image from 'next/image'
import { H1, H2, H3 } from '@/components/ui'
import CTABannerSection from '@/components/Section-Contact'
import { projects } from '@/components/Section-Projects-Grid'

export type ProjectData = {
  title: string
  client: string
  year: number
  services: string[]
  tags: string[]
  coverImage: string
  images?: string[]
  summary: string
  challenge?: string
  solution?: string
  result?: string
  link?: string
}

export default function ProjectDetailTemplate({ project }: { project: ProjectData }) {
  const otherProjects = projects.filter(p => p.coverImage !== project.coverImage)

  return (
    <main>

      {/* Hero — title only */}
      <section id="hero" className="bg-eb-800 px-4 pt-20 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <H1 className="text-white max-w-3xl">{project.title}</H1>
        </div>
      </section>

      {/* Content — sticky text left, images right */}
      <section id="content" className="bg-eb-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

          {/* Left — sticky text column */}
          <div className="md:w-[60%] md:sticky md:top-[72px] md:self-start px-4 md:pr-10 lg:pr-16 py-14 md:py-20">

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-eb-500 text-xs uppercase tracking-widest border border-eb-200 px-3 py-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap gap-x-10 gap-y-5 mb-12 pb-12 border-b border-eb-100">
              <div>
                <p className="text-eb-400 uppercase tracking-widest text-[10px] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Client</p>
                <p className="text-eb-800 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{project.client}</p>
              </div>
              <div>
                <p className="text-eb-400 uppercase tracking-widest text-[10px] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Year</p>
                <p className="text-eb-800 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{project.year}</p>
              </div>
              <div>
                <p className="text-eb-400 uppercase tracking-widest text-[10px] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Services</p>
                <p className="text-eb-800 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{project.services.join(', ')}</p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-eb-dark text-base leading-relaxed mb-10" style={{ fontFamily: 'var(--font-body)' }}>
              {project.summary}
            </p>

            {/* Challenge */}
            {project.challenge && (
              <div className="mb-10">
                <H2 className="text-eb-600 mb-4">The Brief</H2>
                <p className="text-eb-dark text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.challenge}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="mb-10">
                <H2 className="text-eb-600 mb-4">Our Approach</H2>
                <p className="text-eb-dark text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.solution}
                </p>
              </div>
            )}

            {/* Result */}
            {project.result && (
              <div className="mb-10">
                <H2 className="text-eb-600 mb-4">The Result</H2>
                <p className="text-eb-dark text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.result}
                </p>
              </div>
            )}

            {/* Live link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-eb-600 underline underline-offset-4 hover:text-eb-accent transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                View live site →
              </a>
            )}
          </div>

          {/* Right — images stacked */}
          {project.images && project.images.length > 0 && (
            <div className="md:w-[40%] flex flex-col">
              {project.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="40vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section id="other-projects" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <H2 className="text-eb-600 mb-10">Check out our other projects</H2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherProjects.map((p, i) => (
                <a
                  key={i}
                  href={p.href}
                  className="group relative overflow-hidden aspect-[4/3] bg-eb-cream block"
                >
                  <Image
                    src={p.coverImage}
                    alt={p.client}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <H3 className="text-white mb-2">{p.client}</H3>
                    <div className="flex gap-2 flex-wrap">
                      {p.tags.map(tag => (
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
          </div>
        </section>
      )}

      <CTABannerSection />

    </main>
  )
}
