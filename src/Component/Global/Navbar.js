import React from 'react'
import { Link } from 'react-router-dom'
// import '../../CSS/Global/Navbar.css'

function Navbar() {

  const navLinks = [
    {
        linkName: "home",
        href: '/',
        className: "navbar-link",
    },
    {
        linkName: "About",
        href: '/about',
        className: "navbar-link",
    },
    {
        linkName: "Contact Us",
        href: '/contact-us',
        className: "navbar-link",
    },

  ]

  return (
    <nav className='flex py-2'>
      <div className="flex w-1/4 justify-center">
        THE ORANGE RV
      </div>

      {/* NAVLINKS CONTAINER */}
      <div className="flex w-full pl-20 justify-evenly">
        {navLinks.map((item, index) => (
          <Link key={index} className={item.className} to={item.href}>
            {item.linkName}
          </Link>
        ))}
      </div>
    </nav>



  )
}

export default Navbar
