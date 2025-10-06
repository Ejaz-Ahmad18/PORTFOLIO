import React from 'react'
import Contacts from '../../Components/Contacts/Contacts'
import Navbar from '../../Components/Navbar/Nav'
import Projects from '../../Components/Projects/Projects'
import Educations from '../../Components/Educations/Educations'
import Footer from '../../Components/Footer/Footer'

const ProjectPages = () => {
  return (
    <>
    <Navbar/>
   <Projects/>
    <Educations/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default ProjectPages