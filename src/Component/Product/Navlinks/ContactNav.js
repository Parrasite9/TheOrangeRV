import React from 'react'
import Footer from '../../Global/Footer'
import Navbar from '../../Global/Navbar'
import ContactUs from '../../Home/ContactUs'

function ContactNav() {
  return (
    <div className='contactUs'>
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default ContactNav
