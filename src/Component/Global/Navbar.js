import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScreenWidth } from '../Global/ScreenWidthContext.js'
import '../../CSS/output.css'

// MUI ICONS 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavLinks } from './NavContext.js'

function Navbar() {


  const isMobile = useScreenWidth()
  const [menuOpen, setMenuOpen] = useState(false)

  const { navLinks } = useNavLinks()

  const showNavLinks = () => {
    return navLinks.map((item, index) => (
      <Link key={index} className={item.className} to={item.href}>
        {item.linkName}
      </Link>
    ));
  }

  const activateMenu = () => {
    setMenuOpen(true)
  }

  const exitMenu = () => {
    setMenuOpen(false)
  }
  


  return (
    <nav className='flex py-2 bg-lively-orange text-ivory-white'>
      <div className="flex w-3/4 justify-center md:w-1/4 pl-2">
        <Link to='/'>THE ORANGE RV</Link>
      </div>

      {isMobile ? (
        <div className="menu__icon__container flex w-full justify-end pr-2">
          {menuOpen ? (
            <div className='fixed inset-0 bg-lively-orange text-ivory-white  z-50 flex flex-col items-center justify-center'>
              <div className='absolute top-0 right-0 p-5'>
                <CloseIcon className='cursor-pointer' onClick={exitMenu} />
              </div>
              <div className="mobile__menu flex flex-col items-center justify-center py-5 px-10 space-y-4">
                <ul className='space-y-6 text-center'>
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      <Link className={item.className} to={item.href}>
                        {item.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
