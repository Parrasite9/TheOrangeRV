import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScreenWidth } from '../Global/ScreenWidthContext.js'

// MUI ICONS 
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {


  const isMobile = useScreenWidth()

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
      <div className="flex w-3/4 justify-center md:w-1/4 pl-2">
        THE ORANGE RV
      </div>

      {isMobile ? (
        <div className="menu__icon__container flex w-full justify-end pr-2">
          <MenuIcon className='flex flex-end' />
        </div>
      ) : (
      <div className="flex w-full pl-20 justify-evenly">
        {navLinks.map((item, index) => (
          <Link key={index} className={item.className} to={item.href}>
            {item.linkName}
          </Link>
        ))}
      </div>
      )}
    </nav>



  )
}

export default Navbar
