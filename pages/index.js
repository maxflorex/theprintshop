import Head from 'next/head'
import Cards from './components/Cards'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'
import About from './components/About'
import Order from './components/Order'
import Layout from './components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="By Art Cayman Co" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet" />
        <title>The Printshop</title>
      </Head>

      <main>
        <HeroSection />
        <Cards />
        <Section />
        <About />
        <Order />
      </main>
    </div>
  )
}
