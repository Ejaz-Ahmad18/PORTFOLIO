import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePages from './SectionPages/HomePage/HomePages'
import AboutPages from './SectionPages/AboutPage/AboutPages'
import ProjectPages from './SectionPages/ProjectPage/ProjectPages'
import EducationPages from './SectionPages/EducationPages/EducationPages'
import ContactsPages from './SectionPages/ContactPage/ContactsPages'
import FooterPages from './SectionPages/FooterPage/FooterPages'
import SkillsPages from './SectionPages/SkillPage/SkillsPages'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/'element={<HomePages/>}/>
<Route path='/about'element={<AboutPages/>}/>
<Route path='/skills'element={<SkillsPages/>}/>
<Route path='/projects'element={<ProjectPages/>}/>
<Route path='/educations'element={<EducationPages/>}/>
<Route path='/contacts'element={<ContactsPages/>}/>
<Route path='/footer'element={<FooterPages/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App