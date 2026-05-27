import type { Metadata } from 'next'
import ProjectDetailTemplate, { ProjectData } from '@/components/Template-Project'

export const metadata: Metadata = {
  title: 'Motor Cycle City',
  description: 'Brand identity for Motor Cycle City — a bold monogram logo, signage, and marketing materials for a local motorcycle dealership.',
  openGraph: {
    title: 'Motor Cycle City | Easy Brands',
    description: 'Brand identity for Motor Cycle City — a bold monogram logo, signage, and marketing materials for a local motorcycle dealership.',
    images: ['/projects/motor-cycle-city/MCC004.webp'],
  },
}

const project: ProjectData = {
  title: 'Motor Cycle City',
  client: 'Motor Cycle City',
  year: 2025,
  services: ['Brand Identity'],
  tags: ['BRANDING'],
  coverImage: '/projects/motor-cycle-city/MCC004.webp',
  images: [
    '/projects/motor-cycle-city/MCC006.webp',
    '/projects/motor-cycle-city/MCC005.webp',
    '/projects/motor-cycle-city/MCC004.webp',
    '/projects/motor-cycle-city/MCC003.webp',
    '/projects/motor-cycle-city/MCC002.webp',
    '/projects/motor-cycle-city/MCC001.webp',
  ],
  summary:
    'Motor Cycle City needed a brand identity that reflected speed, strength, and confidence. As a local motorcycle dealership, their goal was to create a look that riders could instantly recognise and trust. We designed a bold monogram logo supported by a modern colour system, typography, and signage applications. The brand was rolled out across business cards, shopfront signage, and marketing materials to ensure consistency at every touchpoint. The result is a powerful identity that not only looks sharp but inspires riders to start their journey.',
}

export default function MotorCycleCityProject() {
  return <ProjectDetailTemplate project={project} />
}
