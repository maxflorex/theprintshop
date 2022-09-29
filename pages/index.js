import Cards from './components/Cards'
import HeroSection from './components/Hero'
import Section from './components/Section'
import About from './components/About'
import SameDayPrint from './components/SameDayPrint'
import Head from 'next/head'


export default function Home() {

  return (
    <div>
                  <Head>
                <title>The Printshop - By ACC</title>
            </Head>
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
