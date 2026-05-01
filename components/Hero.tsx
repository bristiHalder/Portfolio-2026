import { FaLocationArrow } from 'react-icons/fa6'
import { useState } from 'react'
import Image from 'next/image'

import MagicButton from './MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { socialMediaHero } from '@/data'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="about">
      <div className='pt-36'>
        {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
        <div>
          <Spotlight
            className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
            fill='white'
          />
          <Spotlight
            className='h-[80vh] w-[50vw] top-10 left-full'
            fill='purple'
          />
          <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
        </div>

        {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
        <div
          className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
          />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>

            </p>

            {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
            <TextGenerateEffect
              words='Turning Data into Decisions with AI, ML & Scalable Pipelines'
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
            />

            <p className='text-center md:tracking-wider mt-4 mb-4 text-sm md:text-lg lg:text-3xl'>
              Hi! I&apos;m Bristi Halder, an AI/ML Engineer &amp; Data Scientist <br /> building intelligent, data-driven solutions.
            </p>

            <div
              className='flex items-center justify-center relative group mt-10 p-10'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Profile Image - Slides in from left */}
              <Image
                src="/profile photo bristi.png"
                alt="profile photo"
                width={144}
                height={144}
                className={`
                w-36 h-36 rounded-full border-2 border-violet-300 transition-all duration-500 ease-out
                ${isHovered
                    ? 'opacity-100 transform translate-x-0 scale-100'
                    : 'opacity-0 transform -translate-x-8 scale-90'
                  }
                absolute left-0 z-10
              `}
              />

              {/* Resume Button - Shifts to the right when image appears */}
              <div
                className={`
                transition-all duration-500 ease-out
                ${isHovered ? 'transform translate-x-16' : 'transform translate-x-0'}
              `}
              >
                <a
                  href='https://drive.google.com/file/d/1LeO9Zve9v9WMKKRxXTAXrwO75uOD1vCJ/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MagicButton
                    title='Resume'
                    icon={<FaLocationArrow />}
                    position='right'
                  />
                </a>
              </div>
            </div>
            <div className='flex items-center md:gap-3 gap-6 mt-10'>
              {socialMediaHero.map((info) => (
                <div
                  key={info.id}
                  onClick={() => window.open(info.link)}
                  className='w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                >
                  <Image src={info.img} alt='icons' width={25} height={25} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
