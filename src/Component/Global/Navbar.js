import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScreenWidth } from '../Global/ScreenWidthContext.js'

// MUI ICONS 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {


  const isMobile = useScreenWidth()
  const [menuOpen, setMenuOpen] = useState(false)

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

  const showNavLinks = () => {
    return navLinks.map((item, index) => (
      <Link key={index} className={item.className} to={item.href}>
        {item.linkName}
      </Link>
    ));
  }

  const activateMenu = () => {
    setMenuOpen(true)
    console.log(!menuOpen);

    console.log('Menu is Open');
  }

  const exitMenu = () => {
    setMenuOpen(false)
    console.log(menuOpen);
    console.log('Menu is Closed');
  }
  


  return (
    <nav className='flex py-2'>
      <div className="flex w-3/4 justify-center md:w-1/4 pl-2">
        THE ORANGE RV
      </div>

      {isMobile ? (
        <div className="menu__icon__container flex w-full justify-end pr-2">
          {menuOpen ? (
            <>
            <CloseIcon className='flex flex-end' onClick={exitMenu} />

            </>
          ) : (
            <>
            <MenuIcon className='flex flex-end' onClick={activateMenu} />
            </>
          )}
        </div>
      ) : (
      <div className="flex w-full pl-20 justify-evenly">
        {showNavLinks()}
      </div>
      )}

    </nav>  
  
  )
}

export default Navbar
