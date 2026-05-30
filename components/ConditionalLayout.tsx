'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Section-Header'
import Footer from '@/components/Section-Footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLanding = pathname.startsWith('/hobart')

  return (
    <>
      {!isLanding && <Header />}
      {children}
      {!isLanding && <Footer />}
    </>
  )
}
