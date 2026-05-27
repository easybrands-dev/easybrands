import type { Metadata } from 'next'
import AboutPage from '@/components/Page-About'
import CTABannerSection from '@/components/Section-Contact'

export const metadata: Metadata = {
  title: 'About',
  description: 'Easy Brands is a Hobart-based design studio. We work with Tasmanian businesses to build brands that are thoughtful, considered, and built to last.',
  openGraph: {
    title: 'About Easy Brands',
    description: 'Easy Brands is a Hobart-based design studio. We work with Tasmanian businesses to build brands that are thoughtful, considered, and built to last.',
    images: ['/ABT001.webp'],
  },
}

export default function About() {
  return (
    <>
      <AboutPage />
      <CTABannerSection />
    </>
  )
}
