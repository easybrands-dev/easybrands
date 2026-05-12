import ServiceDetailTemplate, { ServiceData } from '@/components/Services/ServiceDetailTemplate'

const service: ServiceData = {
  label: 'Website Design',
  title: 'Websites That Work as Hard as You Do',
  tagline: 'Clean design, fast builds, built to convert.',
  intro:
    'A great website isn\'t just beautiful — it\'s fast, accessible, and designed to guide your visitors toward action.',
  body: [
    'We design websites that reflect your brand and make sense for your audience. Every layout decision is intentional, every interaction considered. We don\'t use bloated templates — we build from your brand up.',
    'Our builds are clean, performant, and easy for you to manage. We work with modern frameworks and CMS platforms so your site stays up to date long after launch.',
  ],
  deliverables: [
    'UX wireframes',
    'Visual design (desktop & mobile)',
    'Frontend development',
    'CMS integration',
    'SEO fundamentals',
    'Post-launch support',
  ],
}

export default function WebDevelopmentPage() {
  return <ServiceDetailTemplate service={service} />
}
