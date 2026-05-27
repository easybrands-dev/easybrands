import type { Metadata } from 'next'
import ProjectDetailTemplate, { ProjectData } from '@/components/Template-Project'

export const metadata: Metadata = {
  title: 'Smokey7 Café',
  description: 'Brand identity and print for Smokey7 Café — a contemporary flame-inspired identity across menus, signage, gift vouchers, and digital platforms.',
  openGraph: {
    title: 'Smokey7 Café | Easy Brands',
    description: 'Brand identity and print for Smokey7 Café — a contemporary flame-inspired identity across menus, signage, gift vouchers, and digital platforms.',
    images: ['/projects/smokey7/SMK001.jpg'],
  },
}

const project: ProjectData = {
  title: 'Smokey7 Café',
  client: 'Smokey7 Café',
  year: 2025,
  services: ['Brand Identity', 'Print & Signage'],
  tags: ['BRANDING', 'PRINT'],
  coverImage: '/projects/smokey7/SMK001.jpg',
  images: [
    '/projects/smokey7/SMK002.jpg',
    '/projects/smokey7/SMK003.jpg',
    '/projects/smokey7/SMK004.jpg',
    '/projects/smokey7/SMK005.jpg',
    '/projects/smokey7/SMK006.jpg',
    '/projects/smokey7/SMK007.jpg',
    '/projects/smokey7/SMK009.jpg',
    '/projects/smokey7/SMK010.jpg',
    '/projects/smokey7/SMK008.jpg',
    '/projects/smokey7/SMK011.jpg',
  ],
  summary:
    'Smokey7 Café needed a brand identity that felt contemporary, inviting, and versatile. As a popular Kingscote café and restaurant, their goal was to create a look that would stand out in both print and digital spaces while enhancing the customer dining experience. We developed a bold flame-inspired logo, a clean typography system, and a striking black-and-green colour palette. The brand was applied across menus, signage, gift vouchers, digital platforms, and marketing materials, ensuring a cohesive presence at every touchpoint. The result is a vibrant identity that reflects Smokey7\'s modern dining atmosphere and creates consistency across their brand journey.',
}

export default function Smokey7Project() {
  return <ProjectDetailTemplate project={project} />
}
