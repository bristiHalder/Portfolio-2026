'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { navItems, profile } from '@/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [overDark, setOverDark] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        // Probe what sits just below the header at the horizontal centre.
        const el = document.elementFromPoint(window.innerWidth / 2, 72)
        setOverDark(Boolean(el?.closest('.dark-panel, [data-dark]')))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector<HTMLElement>(n.link))
      .filter((el): el is HTMLElement => Boolean(el))
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] }
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        overDark && 'nav-dark',
        open
          ? overDark
            ? 'border-b border-white/10 bg-ink'
            : 'border-b border-line bg-paper'
          : scrolled
            ? overDark
              ? 'border-b border-white/10 bg-ink/85 backdrop-blur-md'
              : 'border-b border-line bg-paper/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className='container-x flex h-16 items-center justify-between'>
        <Link href='#' className='flex items-center gap-2.5 text-[15px] font-semibold text-ink'>
          <span className='inline-block h-2.5 w-2.5 rounded-full bg-accent' aria-hidden />
          {profile.name}
        </Link>

        <nav className='hidden items-center gap-7 md:flex' aria-label='Primary'>
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={cn(
                'relative text-sm font-medium transition-colors hover:text-ink',
                active === item.link ? 'nav-active text-ink' : 'text-muted'
              )}
            >
              {item.name}
              {active === item.link && (
                <motion.span
                  layoutId='nav-active'
                  className='absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent'
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a
            href={profile.resume}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full border border-ink px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white'
          >
            Resume
          </a>
        </nav>

        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden'
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <nav className='container-x border-t border-line pb-6 pt-2 md:hidden' aria-label='Mobile'>
          <ul className='flex flex-col'>
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className='block py-3 text-lg font-medium text-ink'
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className='pt-3'>
              <a
                href={profile.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white'
              >
                View resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
