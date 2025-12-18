import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import Home from '../../Components/Home/Home'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Projects from '../../Components/Projects/Projects'
import Education from '../../Components/Educations/Educations'
import Contact from '../../Components/Contacts/Contacts'
import Footer from '../../Components/Footer/Footer'

const HomePages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education/>
      <Contact />
      <Footer />
    </>
  )
}

export default HomePages
