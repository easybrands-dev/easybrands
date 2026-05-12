import ServiceDetailTemplate, { ServiceData } from '@/components/Services/ServiceDetailTemplate'

const service: ServiceData = {
  label: 'Brand Build',
  title: 'Identities Built to Last',
  tagline: 'Strategy-led brand design for businesses that mean it.',
  intro:
    'Your brand is more than a logo — it\'s the first impression, the lasting memory, and the reason someone chooses you over everyone else.',
  body: [
    'We start with strategy. Before anything is designed, we work with you to understand your business, your audience, and what makes you different. That clarity informs every creative decision that follows.',
    'From there we develop a visual identity that reflects who you are — a logo system, colour palette, typography, and the rules for how everything works together. We deliver assets that are ready to use across digital and print.',
  ],
  deliverables: [
    'Logo & logo variations',
    'Colour palette',
    'Typography system',
    'Brand guidelines document',
    'Social media kit',
    'Business stationery design',
  ],
}

export default function BrandDesignPage() {
  return <ServiceDetailTemplate service={service} />
}
