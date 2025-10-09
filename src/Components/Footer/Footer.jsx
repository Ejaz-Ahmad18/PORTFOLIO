import React from 'react';
import './Footer.css';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

function Footer() {
    return (
        <footer>
            <h1 className='Footer-h1'>Ejaz Ahmad</h1>
            <p className='Footer-p'>&copy; 2025 All rights reserved by Ejaz Ahmad.</p>
             <div className="social-btns">
                    <a href="" style={{ "--i": 6 }}><CiFacebook /></a>
                    <a href="" style={{ "--i": 7 }}><FaInstagram /></a>
                    <a href="" style={{ "--i": 8 }}><FaWhatsapp /></a>
                    <a href="" style={{ "--i": 9 }}><CiLinkedin /></a>
                    </div>
        </footer>
    );
}

export default Footer;
