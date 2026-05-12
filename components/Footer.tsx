export default function FooterSection() {
  return (
    <footer className="px-5 bg-eb-800">
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-50">

        {/* Company */}
        <div>
          <p
            className="text-xl text-eb-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Easy Brands
          </p>
          <p className="text-eb-primary/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            We acknowledge and pay respect to the past, present and emerging traditional custodians of the land on which we work and live, the Palawa people of lutruwita, Tasmania.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-eb-primary uppercase text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Navigation
          </p>
          {[
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-eb-primary/60 hover:text-eb-primary transition-colors text-sm mb-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Talk */}
        <div>
          <p className="text-eb-primary uppercase text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Talk
          </p>
          <a
            href="mailto:chat@easybrands.com.au"
            className="block text-eb-primary/60 hover:text-eb-primary transition-colors text-sm mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            chat@easybrands.com.au
          </a>
          <a
            href="tel:+61469074351"
            className="block text-eb-primary/60 hover:text-eb-primary transition-colors text-sm mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            0469 074 351
          </a>
          <a
            href="https://www.facebook.com/easybrandsau/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-eb-primary/60 hover:text-eb-primary transition-colors text-sm mb-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/easybrandsau/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-eb-primary/60 hover:text-eb-primary transition-colors text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Instagram
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-eb-primary/10 py-6">
        <p className="text-eb-primary/30 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          © {new Date().getFullYear()} Easy Brands. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
