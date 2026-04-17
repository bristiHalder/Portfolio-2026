'use client'
import { cn } from '@/lib/utils'
import React from 'react'

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  /**
   * 0.1 - slower
   * 1.0 - faster
   */
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}) => {
  return (
    <div className={cn('h-full relative bg-white w-full', containerClassName)}>
      <div className='h-full w-full flex items-center justify-center'>
        <div className='text-center'>
          <div className='text-4xl mb-4'>✨</div>
          <h3 className='text-lg font-semibold mb-2'>Canvas Effect</h3>
          <p className='text-sm opacity-80'>Loading animation...</p>
        </div>
      </div>
      {showGradient && (
        <div className='absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]' />
      )}
    </div>
  )
}

interface DotMatrixProps {
  colors?: number[][]
  opacities?: number[]
  totalSize?: number
  dotSize?: number
  shader?: string
  center?: ('x' | 'y')[]
}

const DotMatrix: React.FC<DotMatrixProps> = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='text-center text-white'>
        <div className='text-2xl mb-2'>🎨</div>
        <p className='text-sm'>Dot Matrix Effect</p>
      </div>
    </div>
  )
}

type Uniforms = {
  [key: string]: {
    value: number[] | number[][] | number
    type: string
  }
}

const ShaderMaterial = () => {
  return null
}

interface ShaderProps {
  source: string
  uniforms: {
    [key: string]: {
      value: number[] | number[][] | number
      type: string
    }
  }
  maxFps?: number
}

const Shader: React.FC<ShaderProps> = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='text-center text-white'>
        <div className='text-2xl mb-2'>⚡</div>
        <p className='text-sm'>Shader Effect</p>
      </div>
    </div>
  )
}
