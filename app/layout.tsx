import type { Metadata } from 'next'
import { Zalando_Sans_Expanded, Manrope } from 'next/font/google'
import Script from 'next/script'
import ConditionalLayout from '@/components/ConditionalLayout'
import './globals.css'

const GA_ID = 'G-5OSY2M99EO'

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
  metadataBase: new URL('https://easybrands.com.au'),
  title: {
    default: 'Easy Brands | Brand Design Agency Tasmania',
    template: '%s | Easy Brands',
  },
  description:
    'Easy Brands is a Hobart-based design studio offering brand identity, web design, and print & signage for Tasmanian businesses.',
  openGraph: {
    siteName: 'Easy Brands',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Easy Brands',
    url: 'https://easybrands.com.au',
    telephone: '+61469074351',
    email: 'chat@easybrands.com.au',
    description: 'Hobart-based design studio offering brand identity, web design, and print & signage for Tasmanian businesses.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hobart',
      addressRegion: 'TAS',
      addressCountry: 'AU',
    },
    areaServed: ['Tasmania', 'Australia'],
    serviceType: ['Brand Identity', 'Web Design', 'Print & Signage'],
    priceRange: '$$',
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
      <body className={`${bigShoulders.variable} ${dmSans.variable} antialiased`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
