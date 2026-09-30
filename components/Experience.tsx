'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { profile } from '@/data'
import { SectionHeader } from './ui/SectionHeader'
import { Reveal } from './ui/Reveal'

type Entry = {
  period: string
  heading: string
  org: string
  bullets: string[]
  images?: { src: string; alt: string; wide?: boolean }[]
}

const entries: Entry[] = [
  {
    period: 'Jun to Aug 2025',
    heading: 'SDE Intern',
    org: 'Walmart Global Tech, Bengaluru',
    bullets: [
      'Developed PySpark and SQL pipelines for large-scale data, improving storage efficiency on GCP by 42%.',
      'Optimized data transformation workflows for faster query execution and better pipeline throughput.',
      'Integrated GenAI APIs into internal tools to automate workflows and add intelligent, data-driven features.',
      'Handled API keys and credentials securely, following best practices for authentication and access control.',
    ],
    images: [
      { src: '/experience/walmart1.jpeg', alt: 'At the Walmart Global Tech office' },
      { src: '/experience/walmart2.jpeg', alt: 'Walmart Global Tech intern cohort' },
      { src: '/experience/walmart3.jpeg', alt: 'Walmart Global Tech campus', wide: true },
    ],
  },
  {
    period: '2023 to 2025',
    heading: 'Recognition and community',
    org: 'Google, GDSC, RGIPT',
    bullets: [
      'Top finalist in Google Girl Hackathon 2025 among more than 38,000 participants.',
      'Contributed to more than ten open-source projects, improving development workflows by around 20%.',
      'Student-Team Relationship Coordinator at Google Developer Student Club, September 2023 to August 2024.',
      'Designing Team Executive at the Science and Technology Club, RGIPT, August 2023 to August 2024.',
    ],
  },
  {
    period: '2022 to 2026',
    heading: 'B.Tech in Computer Science',
    org: 'Rajiv Gandhi Institute of Petroleum Technology, Bengaluru',
    bullets: [
      'Specializing in AI/ML, data science, and software engineering with a strong research focus.',
      'Key coursework: data structures, algorithms, generative AI, machine learning, deep learning, DBMS, computer networks.',
      'Earlier schooling at Father Agnel School, Noida (CBSE, 2020 to 2021).',
    ],
    images: [
      { src: '/experience/rgipt1.jpeg', alt: 'RGIPT campus' },
      { src: '/experience/rgipt2.jpeg', alt: 'Campus activities at RGIPT' },
    ],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id='experience' className='scroll-mt-16 py-20 sm:py-28'>
      <div className='container-x'>
        <SectionHeader
          title='Experience and education'
          lede='Where I have worked, what I have been recognised for, and where I study.'
        />

        <div ref={ref} className='relative mt-12'>
          <div className='absolute bottom-0 left-[7px] top-2 w-px bg-line md:left-[calc(25%-1px)]' aria-hidden>
            <motion.div
              style={{ scaleY: lineScale }}
              className='h-full w-full origin-top bg-accent'
            />
          </div>

          <ol className='space-y-16'>
            {entries.map((e) => (
              <Reveal as='li' key={e.heading} className='relative grid gap-4 md:grid-cols-4 md:gap-8'>
                <div className='pl-8 md:pl-0 md:pr-10'>
                  <span
                    className='absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-paper bg-accent md:left-[calc(25%-8px)]'
                    aria-hidden
                  />
                  <p className='text-sm font-semibold text-accent-ink'>{e.period}</p>
                </div>

                <div className='pl-8 md:col-span-3 md:pl-10'>
                  <h3 className='text-xl font-semibold leading-snug sm:text-2xl'>{e.heading}</h3>
                  <p className='mt-1 text-sm text-muted'>{e.org}</p>
                  <ul className='mt-5 space-y-2.5 text-[15px] leading-relaxed text-ink/85'>
                    {e.bullets.map((b) => (
                      <li key={b} className='flex gap-3'>
                        <span className='mt-[11px] h-1 w-1 shrink-0 rounded-full bg-muted' aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {e.images && (
                    <div className='mt-6 grid grid-cols-2 gap-3'>
                      {e.images.map((img) => (
                        <Image
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          width={800}
                          height={500}
                          className={`h-36 w-full rounded-xl border border-line object-cover transition-transform duration-500 hover:scale-[1.02] sm:h-48 ${
                            img.wide ? 'col-span-2 sm:h-60' : ''
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <p className='mt-12 text-sm text-muted'>
          Full details are in the{' '}
          <a
            href={profile.resume}
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink'
          >
            resume
          </a>
          .
        </p>
      </div>
    </section>
  )
}
