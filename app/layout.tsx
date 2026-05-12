import type { Metadata } from 'next'
import { Zalando_Sans_Expanded, Manrope } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const bigShoulders = Zalando_Sans_Expanded({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const dmSans = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Easy Brands | Brand Design Agency Tasmania',
  description:
    'Based in Tasmania, Easy Brands transforms ideas into visual masterpieces. Brand design, web development, and print & signage.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bigShoulders.variable} ${dmSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
