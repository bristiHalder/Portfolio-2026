import { Reveal } from './Reveal'

type Props = {
  title: string
  lede?: string
}

export function SectionHeader({ title, lede }: Props) {
  return (
    <Reveal className='grid gap-4 border-t border-line pt-8 md:grid-cols-12 md:gap-8'>
      <h2 className='section-title md:col-span-6'>{title}</h2>
      {lede && <p className='lede max-w-md md:col-span-5 md:col-start-8'>{lede}</p>}
    </Reveal>
  )
}
