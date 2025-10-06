import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import Home from '../../Components/Home/Home'
import Footer from '../../Components/Footer/Footer'
import Contacts from '../../Components/Contacts/Contacts'
import Educations from '../../Components/Educations/Educations'
import Skills from '../../Components/Skills/Skills'
import About from '../../Components/About/About'
import Projects from '../../Components/Projects/Projects'


const HomePages = () => {
  return (
    <>
    <Navbar/>
    <Home/>
     <About/>
    <Skills/>
   <Projects/>
    <Educations/>
    <Contacts/>
    <Footer/>
    
    
    </>
  )
}

export default HomePages