import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import "./Nav.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/educations" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">

        
        <Link to="/" className="nav-logo">
          Ejaz <span className="spn">Ahmad</span>
        </Link>

        <div className="nav-links">
          {navLinks.map(link => (
           
            <Link key={link.name} to={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* ✅ External link → a tag is CORRECT */}
        <div className="nav-social">
          <a
            href="https://github.com/ejaz-ahmad18"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
          >
            <p><FaGithub className="nav-icon" /></p>
            <p className="git">Github</p>
          </a>
        </div>

        <button
          className="mobile-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
           
            <Link
              key={link.name}
              to={link.href}
              className="mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

       
          <div className="mobile-social">
            <a href="https://github.com/ejaz18" target="_blank" rel="noopener noreferrer">
              <FaGithub className="nav-icon" />
            </a>
            <a href="https://www.linkedin.com/in/ejaz-ahmad-74a002298/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="nav-icon" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
