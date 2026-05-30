'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { H1, H2, H3 } from '@/components/ui'
import Button from '@/components/ui/Button'
import BleedImage from '@/components/ui/BleedImage'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#included' },
  { label: 'Projects', href: '#work' },
  { label: 'FAQ', href: '#faq' },
]

const whyPoints = [
  'A website that turns visitors into real enquiries',
  'Original photos that show your business at its best',
  'A professional first impression that builds instant trust',
  'Consistent branding across your website and socials',
  'Stand out from every competitor still using stock images',
]

const pricingItems = [
  'Custom designed website for your business',
  'Mobile friendly & fast loading',
  'Up to 5 pages',
  'Contact form included',
  'SEO ready setup',
  'On-location photography shoot in Hobart',
  '20+ high-res images delivered',
]

const whyCards = [
  {
    title: 'Locally Based',
    body: "We're a Hobart-based design studio that works with local businesses every day. We meet you in person, understand your market, and know what resonates with Tasmanian customers — because we live and work here too.",
  },
  {
    title: 'Fast Turnaround',
    body: 'From initial brief to a live website in just 4–6 weeks. We keep things moving efficiently so you\'re not left waiting months to get online. The sooner you launch, the sooner you start generating enquiries.',
  },
  {
    title: 'You Own Everything',
    body: 'Every design file, photograph, and line of code we create belongs entirely to you. No lock-in contracts, no ongoing licensing fees — full ownership handed over the moment we deliver.',
  },
]

const faqs = [
  {
    q: "What's included in the website?",
    a: "You get a fully custom-designed website built for your business — up to 5 pages, mobile-friendly, fast loading, SEO ready, and with a contact form. We handle the design, build, and launch.",
  },
  {
    q: "What does the photography session involve?",
    a: "We come to your location in Hobart for up to 2 hours and photograph your business, team, products, or space — whatever tells your story best. You'll receive 20+ professionally edited, high-resolution images ready to use on your website and social media.",
  },
  {
    q: "How long does it take from start to finish?",
    a: "Most projects are completed within 4–6 weeks from the initial brief. We move fast without cutting corners.",
  },
  {
    q: "Do I need to provide my own content?",
    a: "We'll guide you through what we need. The photography is handled by us, and we can work with the information you have — just bring your business knowledge and we'll take care of the rest.",
  },
  {
    q: "Will I own the website and photos?",
    a: "Absolutely. Everything we create is yours. You own the website files, the images, and all the content. No lock-in contracts or ongoing fees unless you choose them.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We work closely with you throughout the process and include revision rounds so you can give feedback before anything is finalised. We don't launch until you're happy.",
  },
]

const row1 = [
  '/projects/brewster/BRW001.webp',
  '/projects/smokey7/SMK001.jpg',
  '/projects/sandy-bay-garden-co/SBG001.webp',
  '/projects/motor-cycle-city/MCC001.webp',
  '/projects/brewster/BRW003.webp',
  '/projects/smokey7/SMK002.jpg',
  '/projects/sandy-bay-garden-co/SBG002.webp',
  '/projects/motor-cycle-city/MCC003.webp',
]

const row2 = [
  '/projects/brewster/BRW004.webp',
  '/projects/sandy-bay-garden-co/SBG003.webp',
  '/projects/smokey7/SMK003.jpg',
  '/projects/motor-cycle-city/MCC004.webp',
  '/projects/brewster/BRW006.webp',
  '/projects/sandy-bay-garden-co/SBG005.webp',
  '/projects/smokey7/SMK004.jpg',
  '/projects/motor-cycle-city/MCC006.webp',
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eb-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
)

export default function HobartPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `[Hobart $1,500 Deal] New enquiry from ${data.get('name')}`,
        from_name: data.get('name'),
        email: data.get('email'),
        Phone: data.get('phone'),
        Description: data.get('description'),
      }),
    })

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .carousel-left { animation: scrollLeft 40s linear infinite; }
        .carousel-right { animation: scrollRight 40s linear infinite; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-eb-50">
        <div className="w-full px-6 md:px-20 h-18 flex items-center justify-between">
          <Link href="/">
            <Image src="/Logo.svg" alt="Easy Brands" width={140} height={36} className="h-8 w-auto md:h-10" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[.8em] text-eb-600/70 font-bold uppercase hover:text-eb-600 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact">Claim Your Spot</Button>
          </nav>
          <div className="md:hidden"><Button href="#contact">Get Started</Button></div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-eb-50 to-white px-6 md:px-20 pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-eb-500 uppercase tracking-widest text-xs mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Hobart Business Starter Pack
            </p>
            <H1 className="mb-8">Get online, Look pro</H1>
            <p className="text-eb-700/60 text-lg md:text-xl mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              A professional website and photography package built for Hobart businesses ready to make their mark. Everything you need to launch — in one simple deal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact">Claim Your Spot</Button>
              <Button href="#included" variant="outline">See What&apos;s Included</Button>
            </div>
          </div>
          <BleedImage
            src="/SVC001.webp"
            alt="Easy Brands — Professional photography and web design for Hobart businesses"
            bleed="right"
            aspectClass="aspect-square"
          />
        </div>
      </section>

      {/* Why section */}
      <section className="bg-eb-50 px-6 md:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <H2 className="mb-8">Why Hobart businesses need a website that actually works.</H2>
            <p className="text-eb-700/60 leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)' }}>
              Every referral you earn, every social post you share, every flyer you hand out — they all lead back to your website. For Hobart businesses, your website isn&apos;t just an online brochure, it&apos;s your hardest working salesperson.
            </p>
            <p className="text-eb-700/60 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              And when your website is backed by professional photography, it tells a completely different story. Real photos of your business, your team, your space — not stock images — build trust instantly and make you stand out from every competitor still using generic visuals.
            </p>
          </div>
          <ul className="flex flex-col divide-y divide-eb-200">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-4 py-4" style={{ fontFamily: 'var(--font-body)' }}>
                <CheckIcon />
                <span className="text-eb-700/70 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section id="included" className="bg-white px-6 md:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-eb-500 uppercase tracking-widest text-xs mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Simple pricing
          </p>
          <H2 className="mb-16">One package. Everything included.</H2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-eb-200 rounded-xl overflow-hidden text-left">
              <div className="px-10 py-10">
                <p className="text-eb-500 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Hobart Starter Pack
                </p>
                <H3 className="mb-2">Website + Pro Photos</H3>
                <p className="text-eb-700/50 text-sm mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  Everything you need to get your Hobart business online and looking great.
                </p>
                <p className="text-eb-600 font-normal leading-none mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem' }}>
                  $1,500
                </p>
                <p className="text-eb-700/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Once-off, all inclusive
                </p>
              </div>
              <div className="bg-eb-50 border-t border-eb-200 px-10 py-8">
                <p className="text-eb-700 text-sm font-medium mb-5" style={{ fontFamily: 'var(--font-body)' }}>
                  Includes:
                </p>
                <ul className="flex flex-col gap-1.5">
                  {pricingItems.map((item) => (
                    <li key={item} className="flex items-start gap-3" style={{ fontFamily: 'var(--font-body)' }}>
                      <CheckIcon />
                      <span className="text-eb-700/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-eb-50 border-t border-eb-200 px-10 py-6 flex flex-col gap-3">
                <a
                  href="#contact"
                  className="w-full py-4 bg-eb-800 text-white text-sm uppercase tracking-wider hover:bg-eb-600 transition-colors text-center block"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Claim Your Spot
                </a>
                <p className="text-center text-eb-700/50 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                  No lock-in contracts or surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects carousel */}
      <section id="work" className="bg-eb-50 py-20 md:py-28 overflow-hidden">
        <div className="px-6 md:px-20 max-w-7xl mx-auto mb-12">
          <p className="text-eb-500 uppercase tracking-widest text-xs mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Recent projects
          </p>
          <H2>Work we&apos;re proud of.</H2>
        </div>
        <div className="overflow-hidden mb-4">
          <div className="flex gap-4 carousel-left" style={{ width: 'max-content' }}>
            {[...row1, ...row1].map((src, i) => (
              <div key={i} className="relative w-96 h-96 shrink-0 overflow-hidden">
                <Image src={src} alt="Project" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 carousel-right" style={{ width: 'max-content' }}>
            {[...row2, ...row2].map((src, i) => (
              <div key={i} className="relative w-96 h-96 shrink-0 overflow-hidden">
                <Image src={src} alt="Project" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Easy Brands */}
      <section id="about" className="bg-eb-800 px-6 md:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-eb-400 uppercase tracking-widest text-xs mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Based in Hobart
            </p>
            <H2 className="text-white mb-6">Local designers who know your market.</H2>
            <p className="text-white/60 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              We&apos;re a Hobart-based design studio that works with local businesses every day. We understand what works here — and what doesn&apos;t.
            </p>
            <p className="text-white/60 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              This package is designed to get you up and running fast, without the usual agency price tag. We handle everything — the design, the photos, and the launch.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-white/10 border border-white/10 p-6 rounded-xl">
                <H3 className="text-white mb-3">{card.title}</H3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-white px-6 md:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-[40%] shrink-0">
            <p className="text-eb-500 uppercase tracking-widest text-xs mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Get in touch
            </p>
            <H2 className="mb-6">Let&apos;s get started.</H2>
            <p className="text-eb-700/60 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Fill out the form and we&apos;ll be in touch within one business day to lock in your spot and discuss next steps.
            </p>
            <a href="tel:+61469074351" className="block text-eb-800 underline underline-offset-4 mb-2 hover:text-eb-600 transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              0469 074 351
            </a>
            <a href="mailto:chat@easybrands.com.au" className="block text-eb-800 underline underline-offset-4 hover:text-eb-600 transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              chat@easybrands.com.au
            </a>
          </div>

          <div className="flex-1 bg-eb-50 rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <H2>Thanks — we&apos;ll be in touch!</H2>
                <p className="text-eb-700/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  We&apos;ve received your enquiry and will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Name <span className="text-eb-400">(required)</span>
                  </label>
                  <input type="text" name="name" required className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors" style={{ fontFamily: 'var(--font-body)' }} />
                </div>
                <div>
                  <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Email <span className="text-eb-400">(required)</span>
                  </label>
                  <input type="email" name="email" required className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors" style={{ fontFamily: 'var(--font-body)' }} />
                </div>
                <div>
                  <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Phone <span className="text-eb-400">(required)</span>
                  </label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors" style={{ fontFamily: 'var(--font-body)' }} />
                </div>
                <div>
                  <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Brief description about your project <span className="text-eb-400">(required)</span>
                  </label>
                  <textarea name="description" rows={4} required className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors resize-none" style={{ fontFamily: 'var(--font-body)' }} />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-eb-800 text-white text-sm uppercase tracking-wider hover:bg-eb-600 transition-colors disabled:opacity-60"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {loading ? 'Sending…' : 'Claim Your Spot'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-eb-50 py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <BleedImage
            src="/ABT001.webp"
            alt="Easy Brands — Hobart design studio"
            bleed="left"
            aspectClass="aspect-[3/4]"
            rounded={false}
          />
          <div className="px-6 md:pr-20 md:pl-0 py-4">
            <p className="text-eb-500 uppercase tracking-widest text-xs mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Common questions
            </p>
            <H2 className="mb-6">Everything you need to know.</H2>
            <p className="text-eb-700/60 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Got a question not answered here? Reach out and we&apos;ll get back to you fast.
            </p>
            <div className="flex flex-col divide-y divide-eb-200">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary
                    className="flex justify-between items-center cursor-pointer list-none text-eb-800 font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {faq.q}
                    <span className="ml-4 shrink-0 text-eb-400 group-open:rotate-45 transition-transform duration-200 text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 text-eb-700/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-eb-800 px-6 md:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-eb-400 uppercase tracking-widest text-xs mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Limited spots available
            </p>
            <H2 className="text-white">Ready to get your business online?</H2>
          </div>
          <div className="shrink-0">
            <Button href="#contact" variant="outlineDark">Claim Your Spot</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-eb-900 px-6 md:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-eb-light/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Easy Brands — Hobart, Tasmania
          </p>
          <div className="flex gap-6">
            <a href="mailto:chat@easybrands.com.au" className="text-eb-light/70 hover:text-eb-light transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              chat@easybrands.com.au
            </a>
            <a href="tel:+61469074351" className="text-eb-light/70 hover:text-eb-light transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              0469 074 351
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
