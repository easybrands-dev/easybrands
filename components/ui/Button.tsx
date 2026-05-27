type Props = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'outlineDark'
}

const base =
  'px-6 py-3 text-xs md:text-sm uppercase rounded-[8px] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl'

const variants = {
  primary: 'bg-eb-400 text-eb-50 hover:bg-eb-700',
  outline: 'border border-eb-700/20 text-eb-700 hover:border-eb-700 hover:bg-eb-700 hover:text-eb-50',
  outlineDark: 'border border-eb-100/30 text-eb-100 hover:border-eb-700 hover:bg-eb-700 hover:text-eb-50',
}

export default function Button({ href, children, variant = 'primary' }: Props) {
  return (
    <a href={href} className={`${base} ${variants[variant]}`} style={{ fontFamily: 'var(--font-body)' }}>
      {children}
    </a>
  )
}
