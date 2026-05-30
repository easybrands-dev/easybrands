'use client'

import { useState } from 'react'
import { H1, H2 } from '@/components/ui'


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `New enquiry from ${data.get('name')}`,
        from_name: data.get('name'),
        email: data.get('email') || undefined,
        Mobile: data.get('mobile') || undefined,
        Message: data.get('message'),
        'How they heard': data.get('referral'),
      }),
    })
    setSubmitted(true)
  }

  return (
    <main>

      {/* Hero */}
      <section className="bg-eb-800 px-4 pt-20 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <H1 className="text-white max-w-3xl">Contact</H1>
        </div>
      </section>

      <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

        {/* Left — contact info */}
        <div className="md:w-[38%] shrink-0">
          <H2 className="text-eb-600 mb-6">Tell us your vision</H2>
          <p className="text-eb-700/60 mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            We&apos;re eager to collaborate on your next project. Fill out the form or reach out directly.
          </p>

          <a
            href="tel:+61469074351"
            className="block text-eb-800 underline underline-offset-4 mb-3 hover:text-eb-accent transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            0469 074 351
          </a>
          <a
            href="mailto:chat@easybrands.com.au"
            className="block text-eb-800 underline underline-offset-4 mb-10 hover:text-eb-accent transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            chat@easybrands.com.au
          </a>

          <p className="text-eb-800 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
            Based in Tasmania and working globally.
          </p>
          <p className="text-eb-700/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            We&apos;re locally based and love meeting in person if you&apos;re nearby. If you&apos;re further afield, we&apos;re always happy to jump on a video call wherever you are.
          </p>
        </div>

        {/* Right — form */}
        <div className="flex-1 bg-eb-50 rounded-2xl p-8 md:p-10">
          <p className="text-xl text-eb-700/60 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
            Leave us a message and we&apos;ll get back to you as soon as possible.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            {/* Name */}
            <div>
              <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Name <span className="text-eb-400">(required)</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Email <span className="text-eb-400">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Mobile
              </label>
              <input
                type="tel"
                name="mobile"
                className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Leave us a message <span className="text-eb-400">(required)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors resize-none"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>

            {/* How did you hear */}
            <div>
              <label className="block text-eb-700/60 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                How did you hear about us?
              </label>
              <input
                type="text"
                name="referral"
                className="w-full px-4 py-3 bg-white border border-eb-200 text-eb-800 focus:outline-none focus:border-eb-600 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>

            {submitted && (
              <p
                className="text-xs text-eb-700/60 bg-eb-100 px-4 py-3 border border-eb-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Thanks for contacting us. We&apos;ll get back to you as soon as possible.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-eb-800 text-white text-sm hover:bg-eb-600 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Send
            </button>
          </form>
        </div>

      </div>
      </div>
    </main>
  )
}
