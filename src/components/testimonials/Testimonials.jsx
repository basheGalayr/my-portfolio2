import React from 'react'
import styles from './Testimonials.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppContext } from '../context1/Context';

// const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

function Testimonials() {
  const {settings} = useAppContext() 
  return (
    <div  className={styles.Testimonials} id='Testimonia'>
      <p className={styles.Testimonialsh1}>"The best experience I’ve had with a developer! <br /> Clear communication and quick results."</p>
      <Slider {...settings}>
        <div className={styles.Testimonialdiv1}>
          <img src="abiye.jpg" alt="" />
          <p className="text-lg italic">"Hey, I just wanted to say thank you! Your work was amazing. I didn’t have to explain much — you just understood everything quickly. Keep going, you're talented!"</p>

          <h4>-Abiye Ahmed</h4>
        </div>
        <div className={styles.Testimonialdiv1}>
          <img src="farmajo.jpg" alt="" />
          <p className="text-lg italic">"Working with you was so smooth. You delivered fast, and the design was exactly what I had in mind. Honestly, I’ll come back to you again for my next project."</p>

          <h4>- Mohamed Farmajo</h4>
        </div>
        <div className={styles.Testimonialdiv1}>
          <img src="fahad.jpg" alt="" />
          <p className="">"You really impressed me. The code was clean, and everything worked perfectly. I’ve worked with many developers before, but you are one of the best!""</p>

          <h4 >- Fahad Yaasin</h4>

        </div>
        <div className={styles.Testimonialdiv1}>
          <img src="hassan.jpg" alt="" />
          <p className="">"Thanks for your help! You’re patient, kind, and easy to work with. You explained things to me in a simple way. I felt confident the whole time."</p>

          <h4 className="mt-4 font-semibold">- Hassan Sheikh</h4>

        </div>
        <div className={styles.Testimonialdiv1}>
          <img src="rutto.jpg" alt="" />
          <p className="">"I’m so happy I chose you. My website looks professional and works great on phones too. You're not just a developer — you're a creative partner."</p>

          <h4 className="mt-4 font-semibold">- Wiallyem rutto</h4>

        </div>
      </Slider>
    </div>
  )
}

export default Testimonials
