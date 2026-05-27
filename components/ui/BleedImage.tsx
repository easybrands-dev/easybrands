import Image from 'next/image'

type Props = {
  src: string
  alt: string
  aspectClass?: string
  bleed?: 'left' | 'right' | 'none'
  rounded?: boolean
}

export default function BleedImage({
  src,
  alt,
  aspectClass = 'aspect-square',
  bleed = 'left',
  rounded = true,
}: Props) {
  // On mobile (single column) bleed is disabled — offset only kicks in at md+
  const innerClass =
    bleed === 'left'
      ? 'absolute top-0 bottom-0 right-0 left-0 md:-left-[25%]'
      : bleed === 'right'
        ? 'absolute top-0 bottom-0 left-0 right-0 md:-right-[25%]'
        : 'absolute inset-0'

  const roundedClass =
    !rounded ? ''
    : bleed === 'left' ? 'rounded-br-[100px]'
    : bleed === 'right' ? 'rounded-bl-[100px]'
    : ''

  return (
    <div className={`relative ${aspectClass}`}>
      <div className={`${innerClass} overflow-hidden ${roundedClass}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  )
}
