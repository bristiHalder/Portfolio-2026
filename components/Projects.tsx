'use client'

import { projects, profile } from '@/data'
import { Carousel, Card } from './ui/apple-cards-carousel'
import { ProjectDetail } from './ProjectDetail'
import { SectionHeader } from './ui/SectionHeader'

export default function Projects() {
  const cards = projects.map((p, index) => (
    <Card
      key={p.id}
      index={index}
      card={{
        src: p.cover,
        title: p.title,
        category: p.category,
        content: <ProjectDetail project={p} />,
      }}
    />
  ))

  return (
    <section id='projects' className='scroll-mt-16 py-20 sm:py-28'>
      <div className='container-x'>
        <SectionHeader
          title='Selected projects'
          lede='Retrieval systems, fine-tuned models, and a few full-stack builds. Open a card for the full story and a link to the code.'
        />
      </div>

      <div className='mt-4'>
        <Carousel items={cards} />
      </div>

      <div className='container-x'>
        <p className='mt-8 text-sm text-muted'>
          More on{' '}
          <a
            href={profile.github}
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  )
}
