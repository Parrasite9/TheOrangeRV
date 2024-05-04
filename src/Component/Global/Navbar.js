import React from 'react'
import { Link } from 'react-router-dom'

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
    <nav className='flex flex-1'>
      {navLinks.map((item, index) => (
        <Link key={index} className={item.className} to={item.href}>
            {item.linkName}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
