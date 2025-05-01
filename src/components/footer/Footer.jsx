import React from 'react'
import styles from './Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.footer1} id='footer1'>
       <footer className={styles.footer2}>
        <div className={styles.footer2}>
            <div className={styles.footersection}>
            <h3>About</h3>
            <p>I’m a Front-End Developer passionate about creating responsive and user-friendly websites using React, HTML, CSS, and JavaScript.</p>
           </div>
                <div className={styles.footersection}>
                    <h3>Quick Links</h3>
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Testimonials</a></li>
                    </ul>
              </div>
                     <div className={styles.footersectioncontact}>
                        <h3>Contact Info</h3>
                        <p>Email: galyryare@gmail.com</p>
                        <p>Phone: +254796741055</p>
                     </div>
                       <div className={styles.footersection1}> 
                            <h3>Follow Me</h3>
                            <div className={styles.socialicons}>
                            <a href="#"><i className="fab fa-facebook"><FaFacebook /></i></a>
                            <a href="#"><i className="fab fa-twitter"><FaXTwitter /></i></a>
                            <a href="#"><i className="fab fa-github"><FaGithub /></i></a>
                            <a href="#"><i className="fab fa-linkedin"><FaLinkedin /></i></a>
                            <a href="#"><i className="fab fa-whatsup"><BsWhatsapp /></i></a>
                            </div>
                    </div>
                 <div className={styles.footerbottom}>
                <p>&copy; {new Date().getFullYear()} Galaye Developer. All rights reserved.</p>
                </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
