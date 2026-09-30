import type { Metadata } from 'next'
import { Manrope, Instrument_Serif } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bristi Halder | AI/ML Engineer & Data Scientist',
  description:
    'Portfolio of Bristi Halder, an AI/ML engineer and data scientist building RAG systems, fine-tuned LLMs, and scalable data pipelines. SDE Intern at Walmart Global Tech.',
  icons: { icon: '/favicon.png', apple: '/apple-touch-icon.png' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body className='font-sans'>{children}</body>
    </html>
  )
}
