import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
<<<<<<< HEAD
import Stats from './components/Stats'
import About from './components/About'
import ImpactStats from './components/ImpactStats'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
=======
import About from './components/About'
import Skills from './components/Skills'
import ImpactStats from './components/ImpactStats'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Projects from './components/Projects'
>>>>>>> 75fb0f2f431f0892c454065b3655ad6835e18e61
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
<<<<<<< HEAD
        <Stats />
=======
>>>>>>> 75fb0f2f431f0892c454065b3655ad6835e18e61
        <About />
        <ImpactStats />
        <Skills />
        <Timeline />
        <Services />
        <Projects />
<<<<<<< HEAD
        <Experience />
        <Testimonials />
=======
>>>>>>> 75fb0f2f431f0892c454065b3655ad6835e18e61
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
