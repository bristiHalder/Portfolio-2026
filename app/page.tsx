import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Recognition from '@/components/Recognition'
import Approach from '@/components/Approach'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-clip'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Recognition />
        <Approach />
      </main>
      <Footer />
    </>
  )
}
