import type { Metadata } from 'next'
import HobartPage from '@/components/Page-Hobart'

export const metadata: Metadata = {
  title: 'Hobart Business Starter Pack — $1,500 Website + Professional Photos',
  description: 'Get your Hobart business online with a professional website and photography for just $1,500. Limited spots available.',
}

export default function Hobart() {
  return <HobartPage />
}
