import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

import { heroStats, profile, socialLinks } from '@/data'
import { Button } from './ui/Button'
import { Tilt } from './ui/Tilt'
import { CountUp } from './ui/CountUp'
import { RevealGroup, RevealItem } from './ui/Reveal'

export default function Hero() {
  return (
    <section id='about' className='relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28'>
      <div className='container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8'>
        <div className='lg:col-span-7'>
          <p className='animate-rise text-sm font-medium text-muted'>
            {profile.role}. Based in {profile.location}.
          </p>
          <h1
            className='display mt-5 animate-rise text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]'
            style={{ animationDelay: '80ms' }}
          >
            Turning data into decisions with AI, machine learning, and{' '}
            <em className='text-accent-ink'>pipelines that scale.</em>
          </h1>
          <p
            className='lede mt-6 max-w-xl animate-rise'
            style={{ animationDelay: '160ms' }}
          >
            Hi, I&apos;m Bristi Halder. I build retrieval systems, fine-tune open language models, and
            write the data pipelines that feed them. Most recently an SDE Intern at Walmart Global Tech.
          </p>

          <div
            className='mt-8 flex flex-wrap items-center gap-3 animate-rise'
            style={{ animationDelay: '240ms' }}
          >
            <Button href={profile.resume} external>
              View resume <FiArrowUpRight aria-hidden />
            </Button>
            <Button href='#projects' variant='secondary'>
              See projects
            </Button>
            <div className='ml-1 flex items-center gap-2'>
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={s.name}
                  className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface transition-colors hover:border-ink'
                >
                  <Image src={s.img} alt='' width={20} height={20} className='h-5 w-5 invert' />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='lg:col-span-5 animate-rise' style={{ animationDelay: '200ms' }}>
          <Tilt className='group relative mx-auto max-w-sm lg:ml-auto'>
            <div className='absolute -inset-3 rounded-[2rem] bg-accent-tint transition-transform duration-500 group-hover:rotate-2' aria-hidden />
            <div className='relative overflow-hidden rounded-[1.6rem] border border-line bg-surface shadow-lift'>
              <Image
                src={profile.photo}
                alt='Portrait of Bristi Halder'
                width={720}
                height={720}
                priority
                className='aspect-square w-full object-cover'
              />
            </div>
          </Tilt>
        </div>
      </div>

      <div className='container-x relative mt-16 sm:mt-24'>
        <RevealGroup as='dl' className='grid gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-8'>
          {heroStats.map((s) => (
            <RevealItem key={s.value} className='flex flex-col gap-1.5'>
              <dt className='display text-4xl sm:text-5xl'>
                <CountUp value={s.value} />
              </dt>
              <dd className='max-w-[26ch] text-sm leading-snug text-muted'>{s.label}</dd>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
