import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Bristi Halder | AI/ML Engineer & Data Scientist",
  description: 'Portfolio of Bristi Halder — AI/ML Engineer, Data Scientist, and SDE Intern at Walmart Global Tech. Specializing in LLMs, RAG systems, and scalable data pipelines.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/Avatar-favicon.png' sizes='any' />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
