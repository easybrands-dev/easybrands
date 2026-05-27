import type { Metadata } from 'next'
import ProjectsPage from '@/components/Page-Projects'
import CTABannerSection from '@/components/Section-Contact'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse our selected projects. Brand identities, websites, and print work for Tasmanian businesses.',
  openGraph: {
    title: 'Projects | Easy Brands',
    description: 'Browse our selected projects. Brand identities, websites, and print work for Tasmanian businesses.',
    images: ['/projects/brewster/BRW001.webp'],
  },
}

export default function Projects() {
  return (
    <>
      <ProjectsPage />
      <CTABannerSection />
    </>
  )
}
