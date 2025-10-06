import React from 'react'
import Skills from '../../Components/Skills/Skills'
import Navbar from '../../Components/Navbar/Nav'
import Projects from '../../Components/Projects/Projects'
import Educations from '../../Components/Educations/Educations'
import Contacts from '../../Components/Contacts/Contacts'
import Footer from '../../Components/Footer/Footer'


const SkillsPages = () => {
  return (
   <>
   <Navbar/>
    <Skills/>
   <Projects/>
    <Educations/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default SkillsPages