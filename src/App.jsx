import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import Resume from './components/resume.jsx'
import BackgroundEffects from './components/BackgroundEffects.jsx'
import Footer from './components/footer.jsx'


function App() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>

        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Footer />
      </main>

    </>
  )
}

export default App
