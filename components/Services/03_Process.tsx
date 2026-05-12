// TODO(human): Define the process steps data and choose a layout approach.
// Add your steps array and implement the steps rendering below.
// See guidance in the Learn by Doing prompt.

export default function ProcessSection() {
  return (
    <section className="py-24 px-5 bg-eb-50">
      <div className="max-w-4xl">
        <p
          className="text-eb-600/50 uppercase tracking-widest text-xs mb-10"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          How We Work
        </p>
        <h2
          className="text-4xl text-eb-800 mb-16"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          A Simple Process, Seriously
        </h2>

        {/* TODO(human): Render your steps here */}
      </div>
    </section>
  )
}
