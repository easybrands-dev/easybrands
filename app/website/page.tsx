import { Monitor, ShoppingBag, Server } from 'lucide-react'
import ServiceDetailTemplate, { ServiceData } from '@/components/Template-Service'

const service: ServiceData = {
  label: 'Web Design Agency',
  title: 'Website Design & Development',
  intro:
    'A great website is more than something that looks good. It needs to be fast, clear, and built to guide your visitors toward action.',
  body: [
    'We design websites that reflect your brand and make sense for your audience. Every layout decision is intentional, every interaction considered. We build from your brand up, not from a bloated template.',
    'Our builds are clean, performant, and easy to manage. We work with modern frameworks and CMS platforms so your site stays current long after launch.',
  ],
  features: [
    {
      icon: <Monitor strokeWidth={1.25} />,
      title: 'Website Design & Build',
      description:
        'Custom designed and built websites tailored to your brand. Fast, accessible, and optimised for conversion from the ground up.',
    },
    {
      icon: <ShoppingBag strokeWidth={1.25} />,
      title: 'eCommerce Stores',
      description:
        'We build eCommerce stores designed to convert. From product pages to checkout, every step is considered for your customer.',
    },
    {
      icon: <Server strokeWidth={1.25} />,
      title: 'Hosting & Support',
      description:
        'Keep your site running smoothly with ongoing hosting and maintenance. Updates, security, and peace of mind included.',
    },
  ],
  whyTitle: 'Why choose Easy Brands for your website?',
  whyBody: [
    'We focus on the bigger picture. Combining creative design with technical know-how, we build websites that are visually strong and strategically effective.',
    'For expert web design and development, get in touch.',
  ],
}

export default function WebDevelopmentPage() {
  return <ServiceDetailTemplate service={service} />
}
