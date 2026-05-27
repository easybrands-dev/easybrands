import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function CTABannerSection() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 md:py-40 flex items-center">
      <Image
        src="/CTA001.webp"
        alt="CTA background"
        fill
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-eb-400/70 via-eb-accent/30 to-eb-text/80" />
      <div className="relative z-10 w-full px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-end text-right">
          <h2 className="text-white text-4xl leading-none font-normal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Elevate your brand the easy way</h2>
          <p className="mb-8 text-sm md:text-base text-white/80 max-w-xl" style={{ fontFamily: 'var(--font-body)' }}>
            Start your journey with Easy Brands today. Get started with a message
          </p>
          <Button href="/contact">Let&apos;s Start</Button>
        </div>
      </div>
    </section>
  )
}
