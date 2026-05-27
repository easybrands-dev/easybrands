import type { Metadata } from 'next'
import ProjectDetailTemplate, { ProjectData } from '@/components/Template-Project'

export const metadata: Metadata = {
  title: 'Brewster Coffee',
  description: 'Brand identity for Brewster Coffee — a bold, memorable identity covering logo, packaging, signage, and merchandise for a Hobart coffee brand.',
  openGraph: {
    title: 'Brewster Coffee | Easy Brands',
    description: 'Brand identity for Brewster Coffee — a bold, memorable identity covering logo, packaging, signage, and merchandise for a Hobart coffee brand.',
    images: ['/projects/brewster/BRW001.webp'],
  },
}

const project: ProjectData = {
  title: 'Brewster',
  client: 'Brewster Coffee',
  year: 2025,
  services: ['Brand Identity'],
  tags: ['BRANDING'],
  coverImage: '/projects/brewster/BRW001.webp',
  images: [
    '/projects/brewster/BRW002.webp',
    '/projects/brewster/BRW003.webp',
    '/projects/brewster/BRW004.webp',
    '/projects/brewster/BRW005.webp',
    '/projects/brewster/BRW006.webp',
    '/projects/brewster/BRW007.webp',
    '/projects/brewster/BRW008.webp',
    '/projects/brewster/BRW009.webp',
  ],
  summary:
    'Brewster Coffee wanted a bold, memorable identity that matched their energetic brand personality. We created a strong wordmark logo with a distinctive coffee bean symbol, supported by a rich colour palette and clear typography. The brand was applied across takeaway cups, packaging, signage, merchandise, and promotional materials, ensuring consistency from in-store experiences to social media. The result is a versatile identity that makes Brewster instantly recognisable and helps them stand out in Hobart\'s growing coffee scene.',
}

export default function BrewsterProject() {
  return <ProjectDetailTemplate project={project} />
}
