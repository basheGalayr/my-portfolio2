// src/components/home/Home.jsx

import React from 'react'
import Hero from '../hero/Hero'
import About from '../about/About'
import Projects1 from '../projects1/Projects1'
import Testimonials from '../testimonials/Testimonials'
import Blogs from '../blogs/Blogs'
import Footer from '../footer/Footer'
import Context from '../context1/Context'


function Home() {
  return (
    <div>

      <Context>
        <Hero />
        <About />
        <Projects1 />
        <Testimonials />
        <Blogs />
      </Context>
      {/* <Hero />
      <About />
      <Projects1 />
      <Testimonials />
      <Blogs /> */}
    </div>
  )
}

export default Home
