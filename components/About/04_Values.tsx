const values = [
  {
    title: 'Quality Over Quantity',
    description: 'We take on fewer clients so we can give more to each one.',
  },
  {
    title: 'Honest Collaboration',
    description: 'We work with you, not just for you. Your input shapes every decision.',
  },
  {
    title: 'Built for the Long Run',
    description: 'Everything we create is designed to grow with your business.',
  },
  {
    title: 'Local at Heart',
    description: 'Proud to support Tasmanian businesses and the communities they serve.',
  },
]

export default function ValuesSection() {
  return (
    <section className="py-24 px-5 bg-eb-700">
      <p
        className="text-white/30 uppercase tracking-widest text-xs mb-10"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        What We Believe
      </p>
      <h2
        className="text-4xl text-white mb-16"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {values.map((value) => (
          <div key={value.title} className="border-t border-white/10 pt-8">
            <h3
              className="text-white text-xl mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {value.title}
            </h3>
            <p
              className="text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
