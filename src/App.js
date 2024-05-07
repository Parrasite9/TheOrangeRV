import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './CSS/output.css';
import Home from './Component/Home/Home'
import { ScreenWidthProvider } from './Component/Global/ScreenWidthContext';


function App() {
  return (
    <div className='App'>
      <ScreenWidthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ScreenWidthProvider>
    </div>
  )
}

export default App
