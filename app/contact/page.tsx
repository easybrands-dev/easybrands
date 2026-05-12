'use client'

import { useState, useEffect, useRef } from 'react'

type Package = {
  name: string
  price: string
  description: string
}

type Category = {
  id: string
  name: string
  description: string
  packages: Package[]
}

const categories: Category[] = [
  {
    id: 'brand-identity',
    name: 'Brand Identity',
    description: 'Logos, guides, and visual systems',
    packages: [
      { name: 'Logo Design', price: '$300', description: 'Clean, professional logo tailored to your brand' },
      { name: 'Logo Design & Ideation', price: '$500', description: 'Concept exploration and final logo design' },
      { name: 'Brand Guide', price: '$750', description: 'Comprehensive visual identity guidelines' },
      { name: 'Brand Guide & Mockups', price: '$1,000', description: 'Full brand guidelines with real-world mockup presentations' },
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Landing pages and full websites',
    packages: [
      { name: 'Landing Page', price: '$500', description: 'A single, high-converting page for your product or service' },
      { name: 'Starter Website', price: '$1,000', description: 'A clean multi-page website to establish your online presence' },
    ],
  },
  {
    id: 'print-signage',
    name: 'Print & Signage',
    description: 'Cards, brochures, signage, and wraps',
    packages: [
      { name: 'Business Cards', price: '$100', description: 'Print-ready business card design' },
      { name: 'Stickers', price: '$100', description: 'Custom sticker design for any shape or size' },
      { name: 'Brochure', price: '$300', description: 'Professionally designed folded or flat brochure' },
      { name: 'Signage', price: '$300', description: 'Indoor or outdoor signage design' },
      { name: 'Vehicle Wrap', price: '$500', description: 'Full or partial vehicle wrap design' },
    ],
  },
  {
    id: 'brand-packages',
    name: 'Brand Packages',
    description: 'Bundled services at a better rate',
    packages: [
      { name: 'Brand Guide + Landing Page', price: '$1,000', description: 'Visual identity paired with a conversion-focused web presence' },
      { name: 'Brand Guide + Stationery Suite', price: '$1,000', description: 'Brand guidelines with business card and stationery design' },
    ],
  },
  {
    id: 'custom',
    name: 'Custom Request',
    description: 'Something unique? Let\'s talk.',
    packages: [],
  },
]

type View = 'step1' | 'step2' | 'step3' | 'calendly' | 'submitted'

const stepLabels = ['Service', 'Package', 'Details']

export default function ContactPage() {
  const [view, setView] = useState<View>('step1')
  const [visible, setVisible] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', description: '' })
  const calendlyRef = useRef<HTMLDivElement>(null)

  const transition = (next: () => void) => {
    setVisible(false)
    setTimeout(() => {
      next()
      setVisible(true)
    }, 200)
  }

  const handleSelectCategory = (cat: Category) => {
    setSelectedCategory(cat)
    setSelectedPackage(null)
    transition(() => setView(cat.id === 'custom' ? 'step3' : 'step2'))
  }

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg)
    transition(() => setView('step3'))
  }

  const handleBack = () => {
    if (view === 'step2' || view === 'calendly') {
      transition(() => setView('step1'))
    } else if (view === 'step3') {
      transition(() => setView(selectedCategory?.id === 'custom' ? 'step1' : 'step2'))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
    })
    transition(() => setView('submitted'))
  }

  // Load Calendly assets and initialise widget when entering that view
  useEffect(() => {
    if (view !== 'calendly') return

    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }

    const init = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Calendly = (window as any).Calendly
      if (Calendly && calendlyRef.current) {
        Calendly.initInlineWidget({
          url: 'https://calendly.com/your-username',
          parentElement: calendlyRef.current,
        })
      }
    }

    const existing = document.querySelector('script[src*="calendly"]')
    if (existing) {
      init()
    } else {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = init
      document.head.appendChild(script)
    }
  }, [view])

  const stepNumber = view === 'step1' ? 1 : view === 'step2' ? 2 : view === 'step3' ? 3 : 3

  return (
    <main className="min-h-screen bg-eb-50 pt-32 pb-24 px-5">
      <div className="max-w-2xl mx-auto">

        {/* Page header */}
        {view !== 'submitted' && (
          <div className="mb-14">
            <p
              className="text-eb-600/50 uppercase tracking-widest text-xs mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get Started
            </p>
            <h1
              className="text-5xl text-eb-800 font-normal"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let&apos;s Build Something
            </h1>
          </div>
        )}

        {/* Progress indicator */}
        {view !== 'submitted' && view !== 'calendly' && (
          <div className="flex items-center gap-3 mb-12">
            {stepLabels.map((label, i) => {
              const n = i + 1
              const active = stepNumber >= n
              return (
                <div key={n} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-colors duration-300 ${
                        active ? 'bg-eb-600 text-white' : 'bg-eb-200 text-eb-600/40'
                      }`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {n}
                    </div>
                    <span
                      className={`text-sm transition-colors duration-300 ${active ? 'text-eb-700' : 'text-eb-700/30'}`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {label}
                    </span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div
                      className={`h-px w-8 transition-colors duration-300 ${stepNumber > n ? 'bg-eb-600' : 'bg-eb-200'}`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Animated step content */}
        <div
          className={`transition-all duration-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >

          {/* ── Step 1: Category ── */}
          {view === 'step1' && (
            <div>
              <p
                className="text-eb-700/60 mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                What can we help you with?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat)}
                    className="text-left p-6 bg-white border border-eb-200 rounded-[8px] hover:border-eb-600 hover:bg-eb-50 transition-all"
                  >
                    <p
                      className="text-eb-800 mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {cat.name}
                    </p>
                    <p
                      className="text-eb-700/50 text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {cat.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Not sure option */}
              <button
                onClick={() => transition(() => setView('calendly'))}
                className="w-full p-6 border border-dashed border-eb-400/50 rounded-[8px] text-left hover:border-eb-400 hover:bg-eb-orange-light/5 transition-all"
              >
                <p
                  className="text-eb-400 mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Not sure where to start?
                </p>
                <p
                  className="text-eb-400/70 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Book a free discovery call and we&apos;ll figure it out together.
                </p>
              </button>
            </div>
          )}

          {/* ── Step 2: Package ── */}
          {view === 'step2' && selectedCategory && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={handleBack}
                  className="text-eb-600/50 hover:text-eb-600 transition-colors text-sm uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  ← Back
                </button>
                <span className="text-eb-300">|</span>
                <p
                  className="text-eb-700/60 text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {selectedCategory.name}
                </p>
              </div>
              <p
                className="text-eb-700/60 mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Choose a package
              </p>
              <div className="flex flex-col gap-3">
                {selectedCategory.packages.map((pkg) => (
                  <button
                    key={pkg.name}
                    onClick={() => handleSelectPackage(pkg)}
                    className="text-left p-6 bg-white border border-eb-200 rounded-[8px] hover:border-eb-600 hover:bg-eb-50 transition-all flex justify-between items-start gap-6"
                  >
                    <div>
                      <p
                        className="text-eb-800 mb-1"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {pkg.name}
                      </p>
                      <p
                        className="text-eb-700/50 text-sm"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {pkg.description}
                      </p>
                    </div>
                    <p
                      className="text-eb-600 font-medium shrink-0 text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {pkg.price}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 3: Contact details ── */}
          {view === 'step3' && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={handleBack}
                  className="text-eb-600/50 hover:text-eb-600 transition-colors text-sm uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  ← Back
                </button>
              </div>

              {/* Selection summary */}
              <div className="bg-eb-800 rounded-[8px] p-6 mb-8">
                <p
                  className="text-white/40 text-xs uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Your selection
                </p>
                <p
                  className="text-white text-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {selectedCategory?.name}
                  {selectedPackage && ` — ${selectedPackage.name}`}
                </p>
                {selectedPackage && (
                  <p
                    className="text-eb-400 mt-1 text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {selectedPackage.price}
                  </p>
                )}
                {selectedCategory?.id === 'custom' && (
                  <p
                    className="text-white/40 text-sm mt-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Pricing discussed after consultation
                  </p>
                )}
              </div>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="category" value={selectedCategory?.name ?? ''} />
                <input type="hidden" name="package" value={selectedPackage?.name ?? ''} />
                <input type="hidden" name="price" value={selectedPackage?.price ?? 'Custom'} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-eb-700/60 text-xs uppercase tracking-wide mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-eb-200 rounded-[8px] text-eb-800 focus:outline-none focus:border-eb-600 transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-eb-700/60 text-xs uppercase tracking-wide mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-eb-200 rounded-[8px] text-eb-800 focus:outline-none focus:border-eb-600 transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-eb-700/60 text-xs uppercase tracking-wide mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-eb-200 rounded-[8px] text-eb-800 focus:outline-none focus:border-eb-600 transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div className="mb-8">
                  <label
                    className="block text-eb-700/60 text-xs uppercase tracking-wide mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-eb-200 rounded-[8px] text-eb-800 focus:outline-none focus:border-eb-600 transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-eb-400 text-white rounded-[8px] font-medium text-sm uppercase hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          )}

          {/* ── Calendly path ── */}
          {view === 'calendly' && (
            <div>
              <div className="flex items-center gap-4 mb-10">
                <button
                  onClick={handleBack}
                  className="text-eb-600/50 hover:text-eb-600 transition-colors text-sm uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  ← Back
                </button>
              </div>
              <p
                className="text-eb-600/50 uppercase tracking-widest text-xs mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Discovery Call
              </p>
              <h2
                className="text-4xl text-eb-800 font-normal mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Book a Free 30-Minute Call
              </h2>
              <p
                className="text-eb-700/60 mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Not sure where to start? Let&apos;s have a no-pressure chat about your
                brand and figure out what&apos;s right for you.
              </p>
              <div
                ref={calendlyRef}
                className="calendly-inline-widget bg-white rounded-[8px] overflow-hidden"
                data-url="https://calendly.com/your-username"
                style={{ minHeight: '700px' }}
              />
            </div>
          )}

          {/* ── Thank you ── */}
          {view === 'submitted' && (
            <div className="py-32 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-eb-600 rounded-full flex items-center justify-center mb-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2
                className="text-4xl text-eb-800 font-normal mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Enquiry Received
              </h2>
              <p
                className="text-eb-700/60 max-w-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Thanks for reaching out. Easy Brands will be in touch within 1–2
                business days.
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
