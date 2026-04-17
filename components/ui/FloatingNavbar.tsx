'use client'
import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FaBars, FaTimes } from 'react-icons/fa'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!
      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <>
      {/* Hamburger/Close Icon absolutely at the left on mobile */}
      <button
        className='md:hidden block text-white ml-3 mt-2 text-2xl focus:outline-none fixed top-10 left-4 z-[6001]'
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence mode='wait'>
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            'flex max-w-fit md:min-w-[70vw] justify-center lg:min-w-fit fixed z-[5000] top-10 px-6 md:px-10 py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] space-x-4',
            'left-4 right-auto mx-0 md:inset-x-0 md:mx-auto',
            className
          )}
          style={{
            backdropFilter: 'blur(16px) saturate(180%)',
            backgroundColor: 'rgba(17, 25, 40, 0.75)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.125)',
          }}
        >
          {/* Regular Nav Links (hidden on mobile) */}
          <div className='hidden md:flex items-center space-x-4'>
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
                )}
              >
                <span className='block sm:hidden'>{navItem.icon}</span>
                <span className=' text-sm !cursor-pointer'>{navItem.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Overlay - opens from the top, opacity 1 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-[6000] bg-black h-[60vh] w-screen flex flex-col items-start md:hidden'
          >
            <nav className='flex flex-col items-center w-full mt-20 space-y-8'>
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`mobile-link=${idx}`}
                  href={navItem.link}
                  className='text-white text-2xl font-semibold py-2 px-6 w-full text-center hover:bg-white/10 transition rounded-lg'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navItem.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
