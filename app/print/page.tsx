import type { Metadata } from 'next'
import { Printer, Megaphone, FileCheck } from 'lucide-react'
import ServiceDetailTemplate, { ServiceData } from '@/components/Template-Service'

export const metadata: Metadata = {
  title: 'Print & Signage',
  description: 'Business cards, brochures, signage, and large-format print designed to bring your brand into the physical world. Print-ready files to professional standards.',
  openGraph: {
    title: 'Print & Signage | Easy Brands',
    description: 'Business cards, brochures, signage, and large-format print designed to bring your brand into the physical world. Print-ready files to professional standards.',
    images: ['/projects/motor-cycle-city/MCC004.webp'],
  },
}

const service: ServiceData = {
  image: '/projects/motor-cycle-city/MCC004.webp',
  whyImage: '/ABT001.webp',
  label: 'Print Design',
  title: 'Your brand in the physical world',
  intro:
    'Digital-first does not mean print is dead. The right physical touchpoints make your brand feel real, credible, and memorable.',
  body: [
    'We design print materials that are an extension of your brand, not an afterthought. Business cards, brochures, flyers, and signage that look as considered as your website.',
    'We prepare all files to professional print standards and can liaise with your preferred printer, or recommend one of ours in Tasmania.',
  ],
  features: [
    {
      icon: <Printer strokeWidth={1.25} />,
      title: 'Print Collateral',
      description:
        'Business cards, brochures, flyers, and stationery designed to reflect your brand and built to professional print standards.',
    },
    {
      icon: <Megaphone strokeWidth={1.25} />,
      title: 'Signage & Display',
      description:
        'Pull-up banners, wayfinding, and large-format signage that carries your brand into the physical world with confidence.',
    },
    {
      icon: <FileCheck strokeWidth={1.25} />,
      title: 'Print-Ready Files',
      description:
        'All artwork is prepared to exact print specifications. We handle the technical side so nothing is lost between screen and press.',
    },
  ],
  whyTitle: 'Why choose Easy Brands for print & signage?',
  whyBody: [
    'We understand that physical materials are often the first thing a customer holds. We treat every print job with the same care we give to digital work.',
    'Let us bring your brand into the real world. Get in touch.',
  ],
}

export default function PrintSignagePage() {
  return <ServiceDetailTemplate service={service} />
}
