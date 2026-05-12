const team = [
  {
    name: 'Team Member',
    role: 'Founder & Creative Director',
    bio: 'Passionate about helping Tasmanian businesses build brands that stand out.',
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 px-5 bg-eb-100">
      <p
        className="text-eb-600/50 uppercase tracking-widest text-xs mb-10"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        The Team
      </p>
      <h2
        className="text-4xl text-eb-800 mb-16"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        The People Behind Easy Brands
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member) => (
          <div key={member.name}>
            <div className="bg-eb-200 aspect-square rounded-[8px] mb-6" />
            <p
              className="text-eb-800 text-lg mb-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {member.name}
            </p>
            <p
              className="text-eb-600 text-sm uppercase mb-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {member.role}
            </p>
            <p
              className="text-eb-700/60 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
