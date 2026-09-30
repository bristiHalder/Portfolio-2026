import { FiArrowUpRight } from 'react-icons/fi'

import type { Project } from '@/data'

/** Body of an opened project card: summary, highlights, README-derived sections, stack, and link. */
export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className='grid gap-8 md:grid-cols-12'>
      <div className='md:col-span-7'>
        <p className='lede'>{project.summary}</p>

        <div className='mt-8 rounded-2xl bg-accent-tint/60 p-5 sm:p-6'>
          <h4 className='text-sm font-semibold text-accent-ink'>Highlights</h4>
          <ul className='mt-3 space-y-2.5 text-[15px] leading-relaxed text-ink'>
            {project.highlights.map((h) => (
              <li key={h} className='flex gap-3'>
                <span className='mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent' aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.sections.map((s) => (
          <section key={s.heading} className='mt-8'>
            <h4 className='text-lg font-semibold'>{s.heading}</h4>
            {s.body && <p className='mt-2 text-[15px] leading-relaxed text-muted'>{s.body}</p>}
            {s.bullets && (
              <ul className='mt-3 space-y-2 text-[15px] leading-relaxed text-muted'>
                {s.bullets.map((b) => (
                  <li key={b} className='flex gap-3'>
                    <span className='mt-[10px] h-1 w-1 shrink-0 rounded-full bg-muted' aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <aside className='md:col-span-5'>
        <div className='card sticky top-6 p-5 sm:p-6'>
          <h4 className='text-sm font-semibold text-muted'>Built with</h4>
          <ul className='mt-3 flex flex-wrap gap-1.5'>
            {project.tags.map((t) => (
              <li key={t} className='chip'>
                {t}
              </li>
            ))}
          </ul>
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-accent'
          >
            View code on GitHub <FiArrowUpRight aria-hidden />
          </a>
        </div>
      </aside>
    </div>
  )
}
