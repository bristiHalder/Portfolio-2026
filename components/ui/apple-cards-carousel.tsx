'use client'
import React, { useEffect, useRef, useState, createContext, useContext } from 'react'
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useOutsideClick } from '@/hooks/use-outside-click'

/**
 * Apple-style cards carousel, adapted from Aceternity UI for this site's
 * light theme. Cards open into a full detail panel.
 */

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

export type CarouselCard = {
  src: string
  title: string
  category: string
  content: React.ReactNode
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollBy = (dx: number) => {
    carouselRef.current?.scrollBy({ left: dx, behavior: 'smooth' })
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const isMobile = window.innerWidth < 768
      const cardWidth = isMobile ? 230 : 384
      const gap = isMobile ? 4 : 8
      carouselRef.current.scrollTo({ left: (cardWidth + gap) * index, behavior: 'smooth' })
      setCurrentIndex(index)
    }
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className='relative w-full'>
        <div
          className='flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:py-12'
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className='carousel-inset flex flex-row justify-start gap-4 md:gap-6'>
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
                key={'card' + index}
                className='rounded-3xl last:pr-[5%] md:last:pr-[33%]'
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className='container-x flex items-center justify-between gap-4'>
          <p className='text-sm text-muted'>Tap a card to read the full story.</p>
          <div className='flex gap-2'>
            <button
              type='button'
              className='flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-40'
              onClick={() => scrollBy(-400)}
              disabled={!canScrollLeft}
              aria-label='Scroll projects left'
            >
              <IconArrowNarrowLeft className='h-5 w-5' />
            </button>
            <button
              type='button'
              className='flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-40'
              onClick={() => scrollBy(400)}
              disabled={!canScrollRight}
              aria-label='Scroll projects right'
            >
              <IconArrowNarrowRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CarouselCard
  index: number
  layout?: boolean
}) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { onCardClose } = useContext(CarouselContext)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') handleClose()
    }
    document.body.style.overflow = open ? 'hidden' : 'auto'
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useOutsideClick(containerRef, () => handleClose())

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    onCardClose(index)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className='fixed inset-0 z-[100] h-screen overflow-auto'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 h-full w-full bg-ink/60 backdrop-blur-md'
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              role='dialog'
              aria-modal='true'
              aria-label={card.title}
              className='relative z-[110] mx-auto my-6 h-fit max-w-4xl rounded-3xl border border-line bg-paper p-5 shadow-lift sm:my-10 sm:p-8 md:p-12'
            >
              <button
                type='button'
                className='sticky right-0 top-4 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-accent'
                onClick={handleClose}
                aria-label='Close'
              >
                <IconX className='h-5 w-5' />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className='text-sm font-semibold text-accent-ink'
              >
                {card.category}
              </motion.p>
              <motion.h3
                layoutId={layout ? `title-${card.title}` : undefined}
                className='display mt-3 max-w-2xl text-3xl leading-[1.05] text-ink sm:text-5xl'
              >
                {card.title}
              </motion.h3>
              <div className='pt-8 sm:pt-10'>{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        type='button'
        data-dark
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className='group relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-ink text-left shadow-soft md:h-[36rem] md:w-96'
      >
        <div className='pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/60 via-black/10 to-transparent' />
        <div className='relative z-40 p-6 md:p-8'>
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className='text-left text-sm font-medium text-white/80 md:text-base'
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className='mt-2 max-w-xs text-left text-xl font-semibold text-white [text-wrap:balance] md:text-3xl'
          >
            {card.title}
          </motion.p>
        </div>
        <Image
          src={card.src}
          alt=''
          fill
          sizes='(min-width: 768px) 384px, 224px'
          className='absolute inset-0 z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]'
        />
      </motion.button>
    </>
  )
}
