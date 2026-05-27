type Props = {
  children: React.ReactNode
  className?: string
}

export default function H1({ children, className = '' }: Props) {
  return (
    <h1
      className={`text-eb-600 text-4xl md:text-5xl leading-none font-normal ${className}`}
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {children}
    </h1>
  )
}
