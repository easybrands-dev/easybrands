import ServicesHeroSection from '@/components/Services/01_Hero'
import ServiceListSection from '@/components/Services/02_ServiceList'
import ProcessSection from '@/components/Services/03_Process'
import ServicesCTASection from '@/components/Services/04_CTA'

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServiceListSection />
      <ProcessSection />
      <ServicesCTASection />
    </main>
  )
}
