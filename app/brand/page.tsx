import { Palette, Layers, BookOpen } from 'lucide-react'
import ServiceDetailTemplate, { ServiceData } from '@/components/Template-Service'

const service: ServiceData = {
  label: 'Brand Design',
  title: 'Identities Built to Last',
  intro:
    'Your brand is more than a logo. It is the first impression, the lasting memory, and the reason someone chooses you over everyone else.',
  body: [
    'We start with strategy. Before anything is designed, we work with you to understand your business, your audience, and what makes you different. That clarity informs every creative decision that follows.',
    'From there we develop a visual identity that reflects who you are. A logo system, colour palette, typography, and the rules for how everything works together.',
  ],
  features: [
    {
      icon: <Palette strokeWidth={1.25} />,
      title: 'Logo & Visual Identity',
      description:
        'A distinctive logo system with variations for every context. Colour palette, typography, and the visual language of your brand.',
    },
    {
      icon: <Layers strokeWidth={1.25} />,
      title: 'Brand Strategy',
      description:
        'We dig into your positioning, audience, and goals before we design anything. Strategy first means every creative decision has a reason.',
    },
    {
      icon: <BookOpen strokeWidth={1.25} />,
      title: 'Guidelines & Assets',
      description:
        'Brand guidelines, social media kits, and stationery design. Everything you need to show up consistently across every touchpoint.',
    },
  ],
  whyTitle: 'Why choose Easy Brands for your brand?',
  whyBody: [
    'We treat branding as a long-term investment, not a quick deliverable. Every decision is rooted in strategy and built to grow with your business.',
    'Ready to build something worth remembering? Get in touch.',
  ],
}

export default function BrandDesignPage() {
  return <ServiceDetailTemplate service={service} />
}
