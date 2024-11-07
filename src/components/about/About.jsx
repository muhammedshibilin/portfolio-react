import React, { useRef } from 'react';
import MeImg from '../../assets/me/heroImage.png';
import styles from '../about/About.module.css';

const About = () => {

  return (
    <section>
      <div className="d-flex flex-column flex-md-row align-items-center">
        <div className="text-center">
          <img src={MeImg} alt="Profile" className="img-fluid" />
        </div>
        <div>
            I'm an undergraduate student at MANUU University, Hyderabad, pursuing a BA in English. I have experience in backend development with Node.js and Nest.js,
             and in frontend development with Angular and React. I'm also skilled in working with SQL and MongoDB. My goal is to grow as a developer and gain 3 more international 
             experience in the field.
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/6282699250?text=Hi%20Shibili,%20I%20want%20a%20help%20from%20you" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammed-shibili-n/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
