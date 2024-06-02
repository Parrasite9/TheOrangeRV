import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './CSS/output.css';
import Home from './Component/Home/Home'
import { ScreenWidthProvider } from './Component/Global/ScreenWidthContext';
import { NavProvider } from './Component/Global/NavContext';
import Browse from './Component/Product/Browse';
import { inventoryWithIds, inventory} from './Component/Product/Inventory';
import Description from './Component/Product/Description';
import ContactNav from './Component/Product/Navlinks/ContactNav';
import Trade from './Component/Product/Navlinks/Trade';
import About from './Component/Home/About';
import AboutNav from './Component/Product/Navlinks/AboutNav';


function App() {
  return (
    <div className='App'>
      <ScreenWidthProvider>
        <NavProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search' element={<Browse />} />
              <Route path={`/browse/:id/:year/:type/:name`} element={<Description inventory={inventoryWithIds} /> } />
              <Route path='/trade-and-sell' element={<Trade />} />
              <Route path='/about' element={<AboutNav />} />
              <Route path='/contact-us' element={<ContactNav />} />            
            </Routes>
          </BrowserRouter>
        </NavProvider>
      </ScreenWidthProvider>
    </div>
  )
}

export default App
