import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Projects from '../../Components/Projects/Projects'
import Educations from '../../Components/Educations/Educations'
import Contacts from '../../Components/Contacts/Contacts'
import Footer from '../../Components/Footer/Footer'

const AboutPages = () => {
  return (
    <>
     <Navbar/>
     <About/>
    <Skills/>
   <Projects/>
    <Educations/>
    <Contacts/>
    <Footer/>
    
    
    </>
  )
}

export default AboutPages