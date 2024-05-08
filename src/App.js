import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './CSS/output.css';
import Home from './Component/Home/Home'
import { ScreenWidthProvider } from './Component/Global/ScreenWidthContext';
import { NavProvider } from './Component/Global/NavContext';


function App() {
  return (
    <div className='App'>
      <ScreenWidthProvider>
        <NavProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </NavProvider>
      </ScreenWidthProvider>
    </div>
  )
}

export default App
