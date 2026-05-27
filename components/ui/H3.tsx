type Props = {
  children: React.ReactNode
  className?: string
}

export default function H3({ children, className = '' }: Props) {
  return (
    <h3
      className={`text-xl md:text-2xl font-normal ${className}`}
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {children}
    </h3>
  )
}
