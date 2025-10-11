import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Educations from '../../Components/Educations/Educations'
import Skills from '../../Components/Skills/Skills'
import About from '../../Components/About/About'
import Projects from '../../Components/Projects/Projects'
import Navbar from '../../Components/Navbar/Nav'
import Home from '../../Components/Home/Home'
import Contact from '../../Components/Contacts/Contacts'


const HomePages = () => {
  return (
    <>
    <Navbar/>
    <Home/>
     <About/>
    <Skills/>
   <Projects/>
    <Educations/>
    <Contact/>
    <Footer/>
    
    
    </>
  )
}

export default HomePages