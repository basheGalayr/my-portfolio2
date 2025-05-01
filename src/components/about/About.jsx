import React from 'react'
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.containerabout} id='About'>
    <div className={styles.Aboutimg}>
      <img src="BLE1.png" alt="" />
    </div>
    <div className={styles.aboutdiv2}>
      <h1>HI THERE, <br />I'M BILE</h1>
      <p>
      Hi, my name is BILE GALAYR, and I’m a passionate front-end developer. 
      I specialize in building beautiful and responsive websites using HTML, CSS, 
      JavaScript, and React. I enjoy turning ideas into real websites that are fast, 
      clean, and easy to use. <br />
      
          Over time, I have worked on different projects like personal websites,
           landing pages, and small online stores. I love solving problems with code
            and making designs come to life in the browser. <br />
            I’m always learning and improving my skills. Recently, 
         I’ve been exploring more about JavaScript frameworks and building
          more advanced React apps. I also pay attention to writing clean code 
          and following best practices. <br />
          My goal is to find a front-end developer job where I can grow, work with
          a great team, and build useful websites that help people.
            
      </p>
    </div>
  </div>
  )
}

export default About
