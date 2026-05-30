import { H1 } from '@/components/ui'
import ProjectsGridSection from '@/components/Section-Projects-Grid'

export default function ProjectsPage() {
  return (
    <main>

      {/* Hero */}
      <section id="hero" className="bg-eb-800 px-4 pt-40 pb-24">
        <div className="max-w-7xl mx-auto">
          <H1 className="text-white max-w-3xl">Projects</H1>
        </div>
      </section>

      <ProjectsGridSection heading="Check out our projects" showFilter />

    </main>
  )
}
