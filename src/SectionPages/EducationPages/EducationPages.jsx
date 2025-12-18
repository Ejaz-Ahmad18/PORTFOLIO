import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import Contacts from '../../Components/Contacts/Contacts'
import Footer from '../../Components/Footer/Footer'
import Education from '../../Components/Educations/Educations'


const EducationPages = () => {
  return (
  <>
   <Navbar/>
    <Education/>
    <Contacts/>
    <Footer/>
  </>
  )
}

export default EducationPages