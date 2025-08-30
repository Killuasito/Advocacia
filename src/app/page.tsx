import Hero from './components/Hero'
import About from './components/About'
import AboutMe from './components/AboutMe'
import PracticeAreas from './components/PracticeAreas'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <AboutMe />
      <PracticeAreas />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}