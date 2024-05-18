import React from 'react'
import Navbar from '../Global/Navbar'
import Hero from './Hero'
import Footer from '../Global/Footer.js'
import ModelType from './ModelType.js'
import About from './About'
import FAQ from './FAQ'
import Location from './Location'
import ContactUs from './ContactUs'
function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero />
      <div className="home__components">
        <ModelType />
        <About />
        <Location />
        <FAQ />
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default Home
