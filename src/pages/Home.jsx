import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className='bg-teal-900'>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home