import React from 'react'
import Navbar from '../Global/Navbar'
import Hero from './Hero'
import Footer from '../Global/Footer.js'
import ModelType from './ModelType.js'
function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero />
      <ModelType />
      <Footer />
    </div>
  )
}

export default Home
