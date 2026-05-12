import AboutHeroSection from '@/components/About/01_Hero'
import StorySection from '@/components/About/02_Story'
import TeamSection from '@/components/About/03_Team'
import ValuesSection from '@/components/About/04_Values'
import AboutCTASection from '@/components/About/05_CTA'

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <StorySection />
      <TeamSection />
      <ValuesSection />
      <AboutCTASection />
    </main>
  )
}
