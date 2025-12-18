import React from 'react'
import Skills from '../../Components/Skills/Skills'
import Navbar from '../../Components/Navbar/Nav'
import Projects from '../../Components/Projects/Projects'
import Contacts from '../../Components/Contacts/Contacts'
import Footer from '../../Components/Footer/Footer'
import Education from '../../Components/Educations/Educations'



const SkillsPages = () => {
  return (
   <>
   <Navbar/>
    <Skills/>
   <Projects/>
    <Education/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default SkillsPages