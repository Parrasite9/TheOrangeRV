import React from 'react'
import Navbar from '../Global/Navbar'
import Hero from './Hero'
import Footer from '../Global/Footer.js'
import ModelType from './ModelType.js'
import About from './About'
function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero />
      <ModelType />
      <About />
      <Footer />
    </div>
  )
}

export default Home
