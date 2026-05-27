import ProjectDetailTemplate, { ProjectData } from '@/components/Template-Project'

const project: ProjectData = {
  title: 'Brewster',
  client: 'Brewster Coffee',
  year: 2025,
  services: ['Brand Identity'],
  tags: ['BRANDING'],
  coverImage: '/projects/Brewster-Portfolio-Cover.webp',
  images: [
    '/projects/Brewster-Portfolio-Items-01.webp',
    '/projects/Brewster-Portfolio-Items-02.webp',
    '/projects/Brewster-Portfolio-Items-03.webp',
    '/projects/Brewster-Portfolio-Items-04.webp',
    '/projects/Brewster-Portfolio-Items-05.webp',
    '/projects/Brewster-Portfolio-Items-06.webp',
    '/projects/Brewster-Portfolio-Items-07.webp',
    '/projects/Brewster-Portfolio-Items-08.webp',
  ],
  summary:
    'Brewster Coffee wanted a bold, memorable identity that matched their energetic brand personality. We created a strong wordmark logo with a distinctive coffee bean symbol, supported by a rich colour palette and clear typography. The brand was applied across takeaway cups, packaging, signage, merchandise, and promotional materials, ensuring consistency from in-store experiences to social media. The result is a versatile identity that makes Brewster instantly recognisable and helps them stand out in Hobart\'s growing coffee scene.',
}

export default function BrewsterProject() {
  return <ProjectDetailTemplate project={project} />
}
