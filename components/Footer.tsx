import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

import { profile, socialLinks } from '@/data'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'

export default function Footer() {
  return (
    <footer id='contact' className='scroll-mt-16 pb-10 pt-20 sm:pt-28'>
      <div className='container-x'>
        <Reveal className='relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white sm:px-12 sm:py-20'>
          <div
            className='pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl'
            aria-hidden
          />
          <div className='relative grid gap-10 md:grid-cols-12 md:items-end'>
            <div className='md:col-span-8'>
              <h2 className='display text-4xl leading-[1.05] sm:text-6xl'>
                Have a data problem worth solving? Let&apos;s talk.
              </h2>
              <p className='mt-5 max-w-lg text-base leading-relaxed text-white/70'>
                I&apos;m open to AI/ML and data science roles, research collaborations, and interesting side
                projects. Email is the fastest way to reach me.
              </p>
            </div>
            <div className='flex flex-col gap-3 md:col-span-4 md:items-end'>
              <Button
                href={`mailto:${profile.email}`}
                className='w-full bg-white text-ink hover:bg-accent-tint hover:text-accent-ink md:w-auto'
              >
                Email me <FiArrowUpRight aria-hidden />
              </Button>
              <a
                href={profile.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white'
              >
                or view the resume
              </a>
            </div>
          </div>
        </Reveal>

        <div className='mt-10 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center'>
          <div>
            <p className='text-sm font-semibold'>{profile.name}</p>
            <p className='mt-1 text-sm text-muted'>
              {profile.role}. {profile.location}. &copy; {new Date().getFullYear()}
            </p>
          </div>
          <ul className='flex items-center gap-2'>
            {socialLinks.map((s) => (
              <li key={s.id}>
                <a
                  href={s.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={s.name}
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface transition-colors hover:border-ink'
                >
                  <Image src={s.img} alt='' width={18} height={18} className='h-[18px] w-[18px] invert' />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
