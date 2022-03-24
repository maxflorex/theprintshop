import Head from 'next/head'
import Cards from './components/Cards'
import HeroSection from './components/Hero'
import Section from './components/Section'
import About from './components/About'
import SameDayPrint from './components/SameDayPrint'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="By Art Cayman Co" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>The Printshop</title>
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
