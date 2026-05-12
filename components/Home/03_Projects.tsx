import Image from 'next/image'

const projects = [
  { id: 'p1',  client: 'Brewster',          coverImage: '/projects/Brewster-Portfolio-Cover.webp' },
  { id: 'p2',  client: 'Brewster',          coverImage: '/projects/Brewster-02.webp' },
  { id: 'p3',  client: 'Brewster',          coverImage: '/projects/Brewster-03.webp' },
  { id: 'p4',  client: 'Sandybay Garden Co', coverImage: '/projects/Sandybay-Garden-Co-Portfolio-Cover.webp' },
  { id: 'p5',  client: 'Sandybay Garden Co', coverImage: '/projects/Sandybay-02.webp' },
  { id: 'p6',  client: 'Sandybay Garden Co', coverImage: '/projects/Sandybay-03.webp' },
  { id: 'p7',  client: 'Sandybay Garden Co', coverImage: '/projects/Sandybay-04.webp' },
  { id: 'p8',  client: 'Smokey7',           coverImage: '/projects/Smokey7-Portfolio-Cover.jpg' },
  { id: 'p9',  client: 'Smokey7',           coverImage: '/projects/Smokey7-02.jpg' },
  { id: 'p10', client: 'Smokey7',           coverImage: '/projects/Smokey7-03.jpg' },
  { id: 'p11', client: 'Smokey7',           coverImage: '/projects/Smokey7-04.jpg' },
  { id: 'p12', client: 'Smokey7',           coverImage: '/projects/Smokey7-05.jpg' },
]

export default function ProjectsPreviewSection() {
  return (
    <section className="py-24 px-5 bg-eb-50 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <p className="text-eb-text/40 uppercase tracking-widest text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            Featured Works
          </p>
          <a
            href="/projects"
            className="text-eb-text/50 hover:text-eb-text text-sm uppercase tracking-widest transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {projects.map((project) => (
            <a
              key={project.id}
              href="#"
              className="group relative overflow-hidden aspect-square bg-eb-cream block"
            >
              {project.coverImage && (
                <Image
                  src={project.coverImage}
                  alt={project.client}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              )}
            </a>
          ))}
        </div>
    </section>
  )
}
