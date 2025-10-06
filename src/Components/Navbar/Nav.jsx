import React, { useState } from "react";
import './Nav.css';

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
    <a href="/contacts" style={{ "--i": 5 }}>Contacts</a> 
    </ul>
     <div>
          <button className="nav-btn">Github</button>
        </div>
</nav>

     </header>
  )
}

export default Navbar;
