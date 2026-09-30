'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

/** Tilts its content toward the pointer, with a soft spring back to rest. */
export function Tilt({ children, className, max = 8 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 18 })
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 18 })
  const gx = useTransform(px, [0, 1], ['0%', '100%'])
  const gy = useTransform(py, [0, 1], ['0%', '100%'])
  const glow = useTransform(
    [gx, gy],
    ([x, y]) => `radial-gradient(360px circle at ${x} ${y}, rgba(255,255,255,0.35), transparent 60%)`
  )

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
      <motion.div
        aria-hidden
        className='pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        style={{ background: glow }}
      />
    </motion.div>
  )
}
