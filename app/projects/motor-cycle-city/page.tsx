import ProjectDetailTemplate, { ProjectData } from '@/components/Template-Project'

const project: ProjectData = {
  title: 'Motor Cycle City',
  client: 'Motor Cycle City',
  year: 2025,
  services: ['Brand Identity'],
  tags: ['BRANDING'],
  coverImage: '/projects/MCC-04.webp',
  images: [
    '/projects/MCC-06.webp',
    '/projects/MCC-05.webp',
    '/projects/MCC-04.webp',
    '/projects/MCC-03.webp',
    '/projects/MCC-02.webp',
    '/projects/MCC-01.webp',
  ],
  summary:
    'Motor Cycle City needed a brand identity that reflected speed, strength, and confidence. As a local motorcycle dealership, their goal was to create a look that riders could instantly recognise and trust. We designed a bold monogram logo supported by a modern colour system, typography, and signage applications. The brand was rolled out across business cards, shopfront signage, and marketing materials to ensure consistency at every touchpoint. The result is a powerful identity that not only looks sharp but inspires riders to start their journey.',
}

export default function MotorCycleCityProject() {
  return <ProjectDetailTemplate project={project} />
}
