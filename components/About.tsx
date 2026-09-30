'use client'

import { useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'

import { focusAreas, profile, techStack } from '@/data'
import { SectionHeader } from './ui/SectionHeader'
import { RevealGroup, RevealItem } from './ui/Reveal'

export default function About() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className='dark-panel py-20 sm:py-28'>
      <div className='container-x'>
        <SectionHeader
          title='What I work on'
          lede='B.Tech Computer Science graduate (2026) and former Walmart Global Tech SDE Intern, specialising in generative AI, LLMs, retrieval-augmented generation, multi-agent systems, and PySpark data engineering.'
        />

        <RevealGroup className='mt-12 grid gap-4 md:grid-cols-6'>
          {focusAreas.map((f) => (
            <RevealItem as='article' key={f.title} className='card-lift rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:col-span-2'>
              <h3 className='text-lg font-semibold leading-snug'>{f.title}</h3>
              <p className='mt-3 text-sm leading-relaxed text-white/65'>{f.text}</p>
            </RevealItem>
          ))}

          <RevealItem className='card-lift rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8 md:col-span-4'>
            <h3 className='text-lg font-semibold'>Tools I reach for</h3>
            <div className='mt-6 grid gap-5 sm:grid-cols-2'>
              {Object.entries(techStack).map(([group, items]) => (
                <div key={group}>
                  <p className='text-sm font-medium text-white/55'>{group}</p>
                  <ul className='mt-2 flex flex-wrap gap-1.5'>
                    {items.map((t) => (
                      <li key={t} className='inline-flex items-center rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[13px] font-medium text-white/90 transition-colors hover:border-accent hover:bg-accent hover:text-white'>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealItem>

          <RevealItem className='card-lift flex flex-col justify-between gap-6 rounded-2xl bg-accent-tint p-6 text-ink sm:p-8 md:col-span-2'>
            <div>
              <p className='text-sm text-accent-ink'>Right now</p>
              <p className='display mt-2 text-2xl leading-tight sm:text-3xl'>
                Building RAG, multi-agent, and GenAI systems for real products. B.Tech graduate, class of 2026, open to full-time roles.
              </p>
            </div>
            <div>
              <p className='text-sm text-accent-ink'>Say hello</p>
              <button
                type='button'
                onClick={copyEmail}
                className='mt-2 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent'
              >
                {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
                {copied ? 'Email copied' : profile.email}
              </button>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
