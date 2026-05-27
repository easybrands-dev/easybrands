type Props = {
  children: React.ReactNode
  className?: string
}

export default function H2({ children, className = '' }: Props) {
  return (
    <h2
      className={`text-2xl md:text-4xl font-normal text-eb-600 ${className}`}
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {children}
    </h2>
  )
}
