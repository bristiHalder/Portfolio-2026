import Image from 'next/image'

import { testimonials, tools } from '@/data'
import { SectionHeader } from './ui/SectionHeader'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'

export default function Recognition() {
  return (
    <section id='recognition' className='scroll-mt-16 pt-20 sm:pt-28'>
      <div className='container-x'>
        <SectionHeader
          title='Recognition'
          lede='Notes from the teams and programmes I have worked with.'
        />

        <RevealGroup className='mt-12 grid gap-5 lg:grid-cols-3'>
          {testimonials.map((t) => (
            <RevealItem as='figure' key={t.name} className='card card-lift flex flex-col p-6 sm:p-7'>
              <blockquote className='display flex-1 text-[1.35rem] leading-snug'>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className='mt-7 flex items-center gap-3 border-t border-line pt-5'>
                <span
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-accent-tint text-sm font-semibold text-accent-ink'
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </span>
                <span className='flex flex-col'>
                  <span className='text-sm font-semibold'>{t.name}</span>
                  <span className='text-sm text-muted'>{t.title}</span>
                </span>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className='dark-panel mt-16 py-12 sm:mt-20 sm:py-16'>
        <Reveal className='container-x'>
          <p className='text-sm font-medium text-white/60'>Daily tools</p>
          <ul className='mt-4 flex flex-wrap items-center gap-2'>
            {tools.map((tool) => (
              <li
                key={tool.id}
                className='flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] py-1.5 pl-2 pr-3.5 text-sm font-semibold text-white/90 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent'
              >
                {tool.img ? (
                  <Image
                    src={tool.img}
                    alt=''
                    width={22}
                    height={22}
                    className={`h-[22px] w-[22px] object-contain ${tool.img === '/openai.svg' ? 'invert' : ''}`}
                  />
                ) : (
                  <span className='flex h-[22px] w-[22px] items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white' aria-hidden>
                    {tool.name.charAt(0)}
                  </span>
                )}
                {tool.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
