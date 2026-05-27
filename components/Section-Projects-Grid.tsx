import Image from 'next/image'
import { H2, H3 } from '@/components/ui'

export const projects = [
  { client: 'Brewster Coffee',       coverImage: '/projects/brewster/BRW001.webp',              tags: ['BRANDING'],         href: '/projects/brewster', aspect: 'aspect-[4/3]' },
  { client: 'Motor Cycle City',      coverImage: '/projects/motor-cycle-city/MCC004.webp',       tags: ['BRANDING'],         href: '/projects/motor-cycle-city', aspect: 'aspect-[4/3]' },
  { client: 'Sandy Bay Garden Co.',  coverImage: '/projects/sandy-bay-garden-co/SBG001.webp',    tags: ['BRANDING', 'PRINT'], href: '/projects/sandy-bay-garden-co', aspect: 'aspect-[4/3]' },
  { client: 'Smokey7 Café',          coverImage: '/projects/smokey7/SMK001.jpg',                 tags: ['BRANDING', 'PRINT'], href: '/projects/smokey7', aspect: 'aspect-[4/3]' },
]

type Props = {
  title?: string
  heading?: string
  limit?: number
  columns?: 2 | 3
}

export default function ProjectsGridSection({ title, heading, limit, columns = 3 }: Props = {}) {
  const visible = limit ? projects.slice(0, limit) : projects
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'

  return (
    <section id="projects-grid" className="py-20 px-4 bg-eb-50">
      <div className="max-w-7xl mx-auto">
        {(title || heading) && (
          <div className="mb-10">
            {title && (
              <p
                className="text-eb-500 uppercase tracking-widest text-xs mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {title}
              </p>
            )}
            {heading && <H2 className="text-eb-600">{heading}</H2>}
          </div>
        )}
        <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
          {visible.map((project, i) => (
            <a
              key={i}
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
      </div>
    </section>
  )
}
