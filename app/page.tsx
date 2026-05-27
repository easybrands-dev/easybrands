import type { Metadata } from 'next'
import HomePage from '@/components/Page-Home'
import CTABannerSection from '@/components/Section-Contact'

export const metadata: Metadata = {
  title: 'Easy Brands | Brand Design Agency Tasmania',
  description: 'Easy Brands helps Tasmanian businesses stand out with purposeful design, from logos and brand identities to websites and print.',
  openGraph: {
    title: 'Easy Brands | Brand Design Agency Tasmania',
    description: 'Easy Brands helps Tasmanian businesses stand out with purposeful design, from logos and brand identities to websites and print.',
    images: ['/HME001.webp'],
  },
}

export default function Home() {
  return (
    <>
      <HomePage />
      <CTABannerSection />
    </>
  )
}
