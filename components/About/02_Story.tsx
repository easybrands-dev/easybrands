export default function StorySection() {
  return (
    <section className="py-24 px-5 bg-eb-50">
      <div className="max-w-4xl">
        <p
          className="text-eb-600/50 uppercase tracking-widest text-xs mb-10"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Our Story
        </p>
        <h2
          className="text-4xl text-eb-800 mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          We Started Small and We Like It That Way
        </h2>
        <p
          className="text-eb-700/60 text-base leading-relaxed mb-6"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Easy Brands was born in Tasmania out of a simple frustration — too many businesses with great products and terrible branding. We set out to change that by offering the kind of thoughtful, strategic creative work that was previously only available to big-city clients with big budgets.
        </p>
        <p
          className="text-eb-700/60 text-base leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          We keep our team small on purpose. Fewer projects means more focus, more care, and better outcomes for every client we work with.
        </p>
      </div>
    </section>
  )
}
