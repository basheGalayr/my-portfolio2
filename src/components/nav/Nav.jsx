import React, { useState } from 'react';
import styles from './Nav.module.css';
import { MdEmail } from "react-icons/md";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link to='/'> <img src="bile.png" alt="Logo" /></Link>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={styles.navbar}>
        <ul className={styles.nav_links}>
          <li><Link to='/'>Home</Link></li>
          <li><a href="#About">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#Testimonia">Testimonials</a></li>
          <li><Link>Blogs</Link></li>
          <li><Link>Footer</Link></li>
          <li>
            <Link to="/contact" className={styles.contact}>
              Contact Me
             </Link>             
          </li>
          <li><a href=""><MdEmail className={styles.icon} />  galayryare@gmail.com</a> </li>
          <li><a href=""><FaPhone className={styles.icon} /> 254796741054</a></li>
        </ul>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.menu}>
            <li><a href="#home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Testimonia">Testimonials</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#footer1">Footer</a></li>
            <li><MdEmail className={styles.icon} /> galayryare@gmail.com</li>
            <li><FaPhone className={styles.icon} /> +254796741054</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
