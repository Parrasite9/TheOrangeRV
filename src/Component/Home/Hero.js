import React from 'react'
import { useScreenWidth } from '../Global/ScreenWidthContext'

function Hero() {

  const isMobile = useScreenWidth()

  return (
    <div className="hero__container h-screen">
      {isMobile ? (
        <>
          <div className="flex flex-col justify-center bg-cover h-screen bg-lively-orange bg-center text-white text-center p-12">
              <h3 className="font-semibold text-lg mb-3">Adventure Starts Here:</h3> 
              <h1 className='text-4xl font-bold mb-4'>Experience the Freedom of the Open Road</h1>
              <img src="/images/hero/test.png" alt="bumper-pull" />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 mt-4 rounded">
                  Browse Our Collection
              </button>
          </div>
        </>
      ) : (
        <>
        DES
        </>
      )}
    </div>

  )
}

export default Hero
