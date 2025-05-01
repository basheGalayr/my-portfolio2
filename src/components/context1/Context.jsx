import React, { createContext, useContext } from 'react';
import htmlIcon from '../About/images/html.jpg';
import cssIcon from '../About/images/css.jpg';
import jsIcon from '../About/images/javascript.jpg';
import reactIcon from '../About/images/react.jpg';
import reduxIcon from '../About/images/redux.jpg';
import tailwindIcon from '../About/images/Tailwind.jpg';
import bootStrapIcon from '../About/images/bootstrap.jpg';
import gitIcon from '../About/images/git-githup.jpg';


const AppContext = createContext();



function Context({ children }) {
  // projects
  const techs = [
    { name: 'HTML', image: htmlIcon },
    { name: 'CSS', image: cssIcon },
    { name: 'JavaScript', image: jsIcon },
    { name: 'React', image: reactIcon },
    { name: 'Redux', image: reduxIcon },
    { name: 'Tailwind', image: tailwindIcon },
    { name: 'bootstrap', image: bootStrapIcon },
    { name: 'githup', image: gitIcon },
  ];

  // Testimonials
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // blogs
  const blogs = [
    {
      title: 'Starting with the Basics',
      description:
        'I began with HTML and CSS. It was exciting to build static sites, but I soon realized I needed more interactivity.',
    },
    {
      title: 'The Transition to Dynamic Development',
      description:
        'JavaScript was tough. I struggled with functions and arrays, but slowly, things started to click.',
    },
    {
      title: 'Leveling Up: From JavaScript to Frameworks',
      description:
        'React was overwhelming at first. But once I understood components, it transformed how I build interfaces.',
    },
    {
      title: 'Mastering Version Control and Collaboration',
      description:
        'Learning Git and GitHub helped me work with teams and manage code efficiently.',
    },
    {
      title: 'The Challenge of Problem-Solving',
      description:
        'Debugging taught me to think like a developer. It’s not just about fixing bugs—it’s about problem-solving.',
    },
    {
      title: 'Keeping Up with New Tools and Technologies',
      description:
        'The tech world evolves fast. I make time to explore tools and keep learning new skills.',
    },
    {
      title: 'Contributing to Open-Source Projects',
      description:
        'Open-source has taught me real-world coding standards and collaboration with developers globally.',
    },
    {
      title: 'Conclusion: The Ongoing Journey',
      description:
        'This journey is just beginning. Every challenge is a chance to learn and grow.',
    },
    {
      title: 'Call to Action:',
      description:
        'If you’re learning to code, don’t give up. Be curious, keep building, and believe in yourself.',
    },
  ];

  return (
    <AppContext.Provider value={{
         settings,
          blogs,
         // projects    
            techs, 
        
         }}>
      {children}
    </AppContext.Provider>
  );
}

export default Context;

export function useAppContext() {
  return useContext(AppContext);
}
