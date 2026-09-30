'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/** Counts a numeric string like "38,000+" or "85%+" up from zero when it scrolls into view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const match = value.match(/^([\d,]+)(.*)$/)
    if (!match || reduce || !inView) return
    const target = Number(match[1].replace(/,/g, ''))
    const suffix = match[2]
    const start = performance.now()
    const duration = 1400
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const n = Math.round(target * eased)
      setDisplay(n.toLocaleString('en-US') + suffix)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    setDisplay('0' + suffix)
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, reduce])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
