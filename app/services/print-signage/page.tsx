import ServiceDetailTemplate, { ServiceData } from '@/components/Services/ServiceDetailTemplate'

const service: ServiceData = {
  label: 'Print & Signage',
  title: 'Your Brand in the Physical World',
  tagline: 'Print materials and signage designed to make an impression.',
  intro:
    'Digital-first doesn\'t mean print is dead. The right physical touchpoints make your brand feel real, credible, and memorable.',
  body: [
    'We design print materials that are an extension of your brand — not an afterthought. Business cards, brochures, flyers, and signage that look as considered as your website.',
    'We prepare all files to professional print standards and can liaise with your preferred printer, or recommend one of ours in Tasmania.',
  ],
  deliverables: [
    'Business cards & stationery',
    'Brochures & flyers',
    'Pull-up banners',
    'Signage & wayfinding',
    'Vehicle wrap design',
    'Print-ready files',
  ],
}

export default function PrintSignagePage() {
  return <ServiceDetailTemplate service={service} />
}
