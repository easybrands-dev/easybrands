import type { Metadata } from 'next'
import ContactPage from '@/components/Page-Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Easy Brands. Based in Hobart, Tasmania, we work with businesses locally and internationally on brand identity, web design, and print.',
  openGraph: {
    title: 'Contact Easy Brands',
    description: 'Get in touch with Easy Brands. Based in Hobart, Tasmania, we work with businesses locally and internationally on brand identity, web design, and print.',
  },
}

export default function Contact() {
  return <ContactPage />
}
