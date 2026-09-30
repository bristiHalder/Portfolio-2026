import { approach } from '@/data'
import { SectionHeader } from './ui/SectionHeader'
import { RevealGroup, RevealItem } from './ui/Reveal'

export default function Approach() {
  return (
    <section className='py-20 sm:py-28'>
      <div className='container-x'>
        <SectionHeader
          title='How I work'
          lede='The same three steps whether the output is a dashboard or a fine-tuned model.'
        />

        <RevealGroup as='ol' className='mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3'>
          {approach.map((a, i) => (
            <RevealItem as='li' key={a.step} className='group flex flex-col gap-6 bg-surface p-7 transition-colors duration-300 hover:bg-accent-tint/40 sm:p-8'>
              <span className='display text-5xl text-accent-ink transition-transform duration-300 group-hover:-translate-y-1' aria-hidden>
                {i + 1}
              </span>
              <div>
                <h3 className='text-xl font-semibold'>{a.step}</h3>
                <p className='mt-3 text-sm leading-relaxed text-muted'>{a.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
