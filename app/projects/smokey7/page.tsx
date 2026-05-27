import ProjectDetailTemplate, { ProjectData } from '@/components/Template-Project'

const project: ProjectData = {
  title: 'Smokey7 Café',
  client: 'Smokey7 Café',
  year: 2025,
  services: ['Brand Identity', 'Print & Signage'],
  tags: ['BRANDING', 'PRINT'],
  coverImage: '/projects/Smokey7-Portfolio-Cover.jpg',
  images: [
    '/projects/Smokey7-Portfolio-Items-01.jpg',
    '/projects/Smokey7-Portfolio-Items-02.jpg',
    '/projects/Smokey7-Portfolio-Items-03.jpg',
    '/projects/Smokey7-Portfolio-Items-04.jpg',
    '/projects/Smokey7-Portfolio-Items-05.jpg',
    '/projects/Smokey7-Portfolio-Items-06.jpg',
    '/projects/Smokey7-Portfolio-Items-08.jpg',
    '/projects/Smokey7-Portfolio-Items-09.jpg',
    '/projects/Smokey7-Portfolio-Items-07.jpg',
    '/projects/Smokey7-Portfolio-Items-10.jpg',
  ],
  summary:
    'Smokey7 Café needed a brand identity that felt contemporary, inviting, and versatile. As a popular Kingscote café and restaurant, their goal was to create a look that would stand out in both print and digital spaces while enhancing the customer dining experience. We developed a bold flame-inspired logo, a clean typography system, and a striking black-and-green colour palette. The brand was applied across menus, signage, gift vouchers, digital platforms, and marketing materials — ensuring a cohesive presence at every touchpoint. The result is a vibrant identity that reflects Smokey7\'s modern dining atmosphere and creates consistency across their brand journey.',
}

export default function Smokey7Project() {
  return <ProjectDetailTemplate project={project} />
}
