import React, { useState } from "react";
import './Nav.css';
import { FaGithub } from "react-icons/fa6";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
     <header className="header">
        <a href="#" className="logo">Ejaz Ahmad</a>
         <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>
      
          <nav className={`navbar ${isOpen ? "active" : ""}`}>
             <ul>
    <a href="/" style={{ "--i": 1 }} className="active">Home</a>
    <a href="/about" style={{ "--i": 2 }}>About</a>
    <a href="/skills" style={{ "--i": 3 }}>Skills</a>
    <a href="/projects" style={{ "--i": 4 }}>Projects</a>
    <a href="/educations" style={{ "--i": 5 }}>Educations</a>
    <a href="/contacts" style={{ "--i": 6}}>Contacts</a> 
    </ul>
     <div className="nav-btn">
          {/* <  button className="nav-btn">Github</button> */}
           <a href="https://github.com/Ejaz-Ahmad18" target="_blank" rel="noopener noreferrer" className="git-btn" ><FaGithub/>  Github</a>
          
        </div>
</nav>

     </header>
  )
}

export default Navbar;
