import Cards from './components/Cards'
import HeroSection from './components/Hero'
import Section from './components/Section'
import About from './components/About'
import SameDayPrint from './components/SameDayPrint'

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Cards />
        <Section />
        <About />
        <SameDayPrint />
      </main>
    </div>
  )
}
