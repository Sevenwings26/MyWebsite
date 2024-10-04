import React, { useEffect } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Hero.css'
import herobg from "../assets/persona/herobg.jpg";  // For Large Screen
import herobgSmallScreen1 from "../assets/persona/herobgSmallScreen1.jpg"; // For Small Screen
import { FaXTwitter, FaFacebookF, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import DateTime from '../components/DateTime';


const Hero = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 1000 });

    // Initialize Typed.js for the typing effect
    const typed = new Typed('.typed', {
      strings: ["Freelance Partner", "React | Django Specialist", "Software Developer", "Database Engineer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup
    };
  }, []);

  return (
    <section id="hero" className="hero">
      {/* image for small screen */}
      <img
        src={herobgSmallScreen1}
        alt="Iyanu-Arowosola"
        className="md:hidden"
        data-aos="fade-in"
      />

      <img
        src={herobg}
        alt="Iyanu-Arowosola"
        className="hidden md:block"
        data-aos="fade-in"
      />
      <div className="container" data-aos="zoom-out" data-aos-delay="100">        
      <div className="datetime">
        <DateTime/>
      </div>
          <h2 className="text-white">Iyanu Arowosola</h2>
          <p className="your">Your <span className="typed text-white">Your Freelance Tech Partner</span>
          <span className="typed-cursor typed-cursor--blink"></span>
          </p>
        <div className="social-links">
          <a href="#" className='s-link'><FaLinkedin /></a>
          <a href="#" className='s-link'><FaGithub /></a>
          <a href="#" className='s-link'><FaXTwitter/></a>
          <a href="#" className='s-link'><FaWhatsapp/></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

