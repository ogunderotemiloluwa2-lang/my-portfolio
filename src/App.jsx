import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ImpactStats from './components/ImpactStats'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ImpactStats />
        <Skills />
        <Timeline />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
