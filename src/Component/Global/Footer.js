import React from 'react'
import { useScreenWidth } from './ScreenWidthContext'

// MUI ICONS 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNavLinks } from './NavContext';
import { Link } from 'react-router-dom';

function Footer() {

  const isMobile = useScreenWidth()

  const { navLinks } = useNavLinks()

  return (
    <>
      {isMobile ? (
        <div className='footer__container bg-lively-orange text-white py-10 flex justify-center text-center'>

          <div className='mobile__footer flex flex-col'>
            <div className="footer_logo">
            <h2 className='font-bold text-xl mb-5'>The Orange RV</h2>
          </div>

          <div className="footer__phone mb-5">
            <LocalPhoneIcon />
            <a href="#">+1 (432) 301-9668</a>
          </div>
          

          <div className="footer__navlinks mb-5">
            <ul>
              {navLinks.map((item, index) => (
                <li className='mb-2'>
                  <Link className={item.className} to={item.href}>
                  {item.linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="copyright">
            <p>© All Rights Reserved 2024 The Orange RV</p>
          </div>
        </div>
        </div>
      ) : (
        <>
        </>
      )}
      </>
    
  )
}



export default Footer
