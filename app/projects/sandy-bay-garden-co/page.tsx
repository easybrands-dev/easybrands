import type { Metadata } from 'next'
import ProjectDetailTemplate, { ProjectData } from '@/components/Template-Project'

export const metadata: Metadata = {
  title: 'Sandy Bay Garden Co',
  description: 'Brand identity and print for Sandy Bay Garden Co — a fresh, approachable identity for a trusted Hobart gardening service.',
  openGraph: {
    title: 'Sandy Bay Garden Co | Easy Brands',
    description: 'Brand identity and print for Sandy Bay Garden Co — a fresh, approachable identity for a trusted Hobart gardening service.',
    images: ['/projects/sandy-bay-garden-co/SBG001.webp'],
  },
}

const project: ProjectData = {
  title: 'Sandy Bay Garden Co',
  client: 'Sandy Bay Garden Co',
  year: 2025,
  services: ['Brand Identity', 'Print & Signage'],
  tags: ['BRANDING', 'PRINT'],
  coverImage: '/projects/sandy-bay-garden-co/SBG001.webp',
  images: [
    '/projects/sandy-bay-garden-co/SBG002.webp',
    '/projects/sandy-bay-garden-co/SBG005.webp',
    '/projects/sandy-bay-garden-co/SBG004.webp',
    '/projects/sandy-bay-garden-co/SBG003.webp',
    '/projects/sandy-bay-garden-co/SBG006.webp',
  ],
  summary:
    'Sandy Bay Garden Co. needed a fresh, approachable identity that reflected their connection to the local community and love of nature. We designed a modern logo, earthy colour palette, and clear typography, applied across business cards, flyers, signage, and social media templates. The result is a cohesive brand system that helps the company stand out as a trusted gardening service in Hobart.',
}

export default function SandyBayGardenCoProject() {
  return <ProjectDetailTemplate project={project} />
}
