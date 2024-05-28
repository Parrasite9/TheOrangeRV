import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './CSS/output.css';
import Home from './Component/Home/Home'
import { ScreenWidthProvider } from './Component/Global/ScreenWidthContext';
import { NavProvider } from './Component/Global/NavContext';
import Browse from './Component/Product/Browse';
import { inventoryWithIds, inventory} from './Component/Product/Inventory';
import Description from './Component/Product/Description';


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
            </Routes>
          </BrowserRouter>
        </NavProvider>
      </ScreenWidthProvider>
    </div>
  )
}

export default App
