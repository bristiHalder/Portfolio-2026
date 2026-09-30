import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

export function Button({
  href,
  children,
  variant = 'primary',
  external,
  className,
}: Props) {
  const styles = cn(
    'inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors',
    variant === 'primary'
      ? 'bg-ink text-white hover:bg-accent'
      : 'border border-line bg-surface text-ink hover:border-ink',
    className
  )
  if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={styles}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  )
}
