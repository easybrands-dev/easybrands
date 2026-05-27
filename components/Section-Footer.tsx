export default function FooterSection() {
  return (
    <footer className="px-4 bg-eb-800">
      <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row md:justify-between gap-12">

        {/* Company */}
        <div className="md:w-[40%] shrink-0">
          <p
            className="text-xl text-eb-light mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Easy Brands
          </p>
          <p className="text-eb-light/70 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            We acknowledge and pay respect to the past, present and emerging traditional custodians of the land on which we work and live, the Palawa people of lutruwita, Tasmania.
          </p>
        </div>

        {/* Navigation + Talk */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-30 text-left md:text-right">

          {/* Navigation */}
          <div>
            <p className="text-eb-light uppercase text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Navigation
            </p>
            {[
              { label: 'About', href: '/about' },
              { label: 'Brand', href: '/brand' },
              { label: 'Website', href: '/website' },
              { label: 'Print', href: '/print' },
              { label: 'Projects', href: '/projects' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-eb-light/70 hover:text-eb-light transition-colors text-sm mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Talk */}
          <div>
            <p className="text-eb-light uppercase text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Talk
            </p>
            <a
              href="mailto:chat@easybrands.com.au"
              className="block text-eb-light/70 hover:text-eb-light transition-colors text-sm mb-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              chat@easybrands.com.au
            </a>
            <a
              href="tel:+61469074351"
              className="block text-eb-light/70 hover:text-eb-light transition-colors text-sm mb-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              0469 074 351
            </a>
            <div className="flex gap-4 mt-4 md:justify-end">
              <a
                href="https://www.facebook.com/easybrandsau/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eb-light/70 hover:text-eb-light transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/easybrandsau/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eb-light/70 hover:text-eb-light transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-eb-light/20 py-6">
        <p className="text-eb-light/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          © {new Date().getFullYear()} Easy Brands. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
