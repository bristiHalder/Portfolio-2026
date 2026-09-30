'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Fades and lifts its children into view as they scroll on screen. */
export function Reveal({
  children,
  className,
  as = 'div',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'figure' | 'header'
  delay?: number
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView='show'
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      variants={item}
      transition={{ delay }}
    >
      {children}
    </Comp>
  )
}

/** Staggers the reveal of each direct child. Children should be RevealItem. */
export function RevealGroup({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol' | 'dl'
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView='show'
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={container}
    >
      {children}
    </Comp>
  )
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li' | 'article' | 'figure'
}) {
  const Comp = motion[as]
  return (
    <Comp className={cn(className)} variants={item}>
      {children}
    </Comp>
  )
}
