import HeroSection from '@/components/Home/01_Hero'
import ProjectsPreviewSection from '@/components/Home/03_Projects'
import AboutPreviewSection from '@/components/Home/03b_AboutPreview'
import ServicesSection from '@/components/Home/04_Services'
import CTABannerSection from '@/components/Home/05_CTAContact'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsPreviewSection />
      <AboutPreviewSection />
      <ServicesSection />
      <CTABannerSection />
    </main>
  )
}
