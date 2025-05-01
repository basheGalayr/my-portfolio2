import React from 'react';
import { motion } from 'framer-motion'; // Import framer motion
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.containerhero} id="home">
      {/* .herodiv1 with motion */}
      <motion.div
        className={styles.herodiv1}
        initial={{ y: -50, opacity: 0 }} // Start position (offscreen with opacity 0)
        animate={{ y: 0, opacity: 1 }}   // End position (original position with opacity 1)
        transition={{ duration: 2 }}      // Animation duration (2 seconds)
      >
        <h1>Hi, I'm Bile Abdullahi Galayr</h1>
        <p className={styles.herop1}>
          "As a Front-End Developer, I turn ideas into interactive,
          responsive <br /> websites using modern tools like HTML,
           CSS, JavaScript,
          React, and Redux."
        </p>
      </motion.div>

      {/* .herodiv2 with motion */}
      <motion.div
        className={styles.herodiv2}
        initial={{ y: 50, opacity: 0 }} // Start position (below with opacity 0)
        animate={{ y: 0, opacity: 1 }}  // End position (original position with opacity 1)
        transition={{ duration: 2 }}     // Animation duration (2 seconds)
      >
        <img src="BLE1.png" alt="Hero" />
      </motion.div>
    </div>
  );
}

export default Hero;
