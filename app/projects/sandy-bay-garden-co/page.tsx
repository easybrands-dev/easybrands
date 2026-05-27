import ProjectDetailTemplate, { ProjectData } from '@/components/Template-Project'

const project: ProjectData = {
  title: 'Sandy Bay Garden Co',
  client: 'Sandy Bay Garden Co',
  year: 2025,
  services: ['Brand Identity', 'Print & Signage'],
  tags: ['BRANDING', 'PRINT'],
  coverImage: '/projects/Sandybay-Garden-Co-Portfolio-Cover.webp',
  images: [
    '/projects/Sandybay-Garden-Co-Portfolio-Items-01.webp',
    '/projects/Sandybay-Garden-Co-Portfolio-Items-04.webp',
    '/projects/Sandybay-Garden-Co-Portfolio-Items-03.webp',
    '/projects/Sandybay-Garden-Co-Portfolio-Items-02.webp',
    '/projects/Sandybay-Garden-Co-Portfolio-Items-05.webp',
  ],
  summary:
    'Sandy Bay Garden Co. needed a fresh, approachable identity that reflected their connection to the local community and love of nature. We designed a modern logo, earthy colour palette, and clear typography, applied across business cards, flyers, signage, and social media templates. The result is a cohesive brand system that helps the company stand out as a trusted gardening service in Hobart.',
}

export default function SandyBayGardenCoProject() {
  return <ProjectDetailTemplate project={project} />
}
