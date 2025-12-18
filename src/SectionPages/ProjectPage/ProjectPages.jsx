import React from 'react'
import Contacts from '../../Components/Contacts/Contacts'
import Navbar from '../../Components/Navbar/Nav'
import Projects from '../../Components/Projects/Projects'
import Footer from '../../Components/Footer/Footer'
import Education from '../../Components/Educations/Educations'


const ProjectPages = () => {
  return (
    <>
    <Navbar/>
   <Projects/>
    <Education/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default ProjectPages