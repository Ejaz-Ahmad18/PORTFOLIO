import React, { useEffect } from "react";
import './Home.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import Typed from "typed.js";

function Home() {


    useEffect(() => {
        const typed = new Typed(".text", {
            strings: ["Frontend Developer", "Designer", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <div className="home">
            <span className="bg-dot dot1"></span>
            <span className="bg-dot dot2"></span>
            <span className="bg-star star1">✦</span>
            <span className="bg-star star2">✦</span>

            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Ejaz Ahmad</h1>
                <h3>And I'm a <span className="text"></span> </h3>
                <p>I'm a web Designer with extensive experience for over 3 years.</p>

                <div className="home-social">
                    <a href="" style={{ "--i": 7 }}><CiFacebook /></a>
                    <a href="" style={{ "--i": 8 }}><FaInstagram /></a>
                    <a href="" style={{ "--i": 9 }}><FaWhatsapp /></a>
                    {/* <a href="https://www.linkedin.com/in/ejaz-ahmad-1599112b9/" style={{ "--i": 9 }}><CiLinkedin /></a> */}
                    <a
                        href="https://www.linkedin.com/in/ejaz-ahmad-1599112b9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ "--i": 9 }}
                    >
                        <CiLinkedin />
                    </a>


                </div>
                <a href="#" className="btn-box"> Resume </a>
            </div>
        </div>
    );
}

export default Home;
