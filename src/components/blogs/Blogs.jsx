import React from 'react'
import styles from './Blogs.module.css';
import { useAppContext } from '../context1/Context';


// const blogs = [
//     {
//       title: 'Starting with the Basics',
//       description:
//         'I began with HTML and CSS. It was exciting to build static sites, but I soon realized I needed more interactivity.',
//     },
//     {
//       title: 'The Transition to Dynamic Development',
//       description:
//         'JavaScript was tough. I struggled with functions and arrays, but slowly, things started to click.',
//     },
//     {
//       title: 'Leveling Up: From JavaScript to Frameworks',
//       description:
//         'React was overwhelming at first. But once I understood components, it transformed how I build interfaces.',
//     },
//     {
//       title: 'Mastering Version Control and Collaboration',
//       description:
//         'Learning Git and GitHub helped me work with teams and manage code efficiently.',
//     },
//     {
//       title: 'The Challenge of Problem-Solving',
//       description:
//         'Debugging taught me to think like a developer. It’s not just about fixing bugs—it’s about problem-solving.',
//     },
//     {
//       title: 'Keeping Up with New Tools and Technologies',
//       description:
//         'The tech world evolves fast. I make time to explore tools and keep learning new skills.',
//     },
//     {
//       title: 'Contributing to Open-Source Projects',
//       description:
//         'Open-source has taught me real-world coding standards and collaboration with developers globally.',
//     },
//     {
//       title: 'Conclusion: The Ongoing Journey',
//       description:
//         'This journey is just beginning. Every challenge is a chance to learn and grow.',
//     },
//     {
//       title: 'Call to Action:',
//       description:
//         'If you’re learning to code, don’t give up. Be curious, keep building, and believe in yourself.',
//     },
//   ];

function Blogs() {
  const {blogs} = useAppContext() 
  return (
    <div className= {styles.blogscontainer} id='blogs'>
       <h1>My Developer Journey</h1>
      <div className={styles.bloggrid}>
        {blogs.map((item, index) => (
          <div className={styles.blogcard} key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
