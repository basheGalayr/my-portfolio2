import React from "react";
import styles from "./Projects1.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// import htmlIcon from '../about/images/html.jpg';
// import cssIcon from '../about/images/css.jpg';
// import jsIcon from '../About/images/javascript.jpg';
// import reactIcon from '../About/images/react.jpg';
// import reduxIcon from '../About/images/redux.jpg';
// import tailwindIcon from '../About/images/Tailwind.jpg';
// import bootStrapIcon from '../about/images/bootstrap.jpg';
// import gitIcon from '../About/images/git-githup.jpg';
// import { style } from 'framer-motion/client';
import { useAppContext } from "../context1/Context";

// const techs = [
//   { name: 'HTML', image: htmlIcon },
//   { name: 'CSS', image: cssIcon },
//   { name: 'JavaScript', image: jsIcon },
//   { name: 'React', image: reactIcon },
//   { name: 'Redux', image: reduxIcon },
//   { name: 'Tailwind', image: tailwindIcon },
//   { name: 'bootstrap', image: bootStrapIcon },
//   { name: 'githup', image: gitIcon },
// ];

function Projects1() {
  const { techs } = useAppContext();
  return (
    <div id='projects' className={styles.conproject}>
      <div className={styles.project1}>
        <h1 className='text-xl font-semibold mb-4 text-center'>MY PROJECTS</h1>
        <h3> What I Do in My Projects</h3>
        <p>
          I design and develop responsive websites using HTML, CSS, JavaScript,
          and React. <br />
          I build user interfaces, add interactive features, and make sure the
          website works <br />
          on all devices. I also use tools like Redux, Tailwind CSS, and GitHub
          to manage state, <br />
          style the app, and track my code.
        </p>
      </div>

      <div className={styles.swipper_container}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
        >
          {techs.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className={styles.techslide}>
                <img
                  src={tech.image}
                  alt={tech.name}
                  className={styles.techimage}
                />
                <span className={styles.techname}>{tech.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects1;
