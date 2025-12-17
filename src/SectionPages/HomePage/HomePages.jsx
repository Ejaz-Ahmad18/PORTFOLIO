import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Educations from '../../Components/Educations/Educations'
import Skills from '../../Components/Skills/Skills'

import Projects from '../../Components/Projects/Projects'
import Navbar from '../../Components/Navbar/Nav'

import Contact from '../../Components/Contacts/Contacts'
import About from '../../Components/About/About'
import Home from '../../Components/Home/Home'


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