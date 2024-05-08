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
        <div className="desktop__hero__container bg-lively-orange h-screen flex justify-center">
          <div className="hero__container__desktop flex">
            <div className="text__container flex flex-col justify-center text-white px-10 w-1/2
                            xl:px-[5.5%] 
                            2xl:px-[6.5%]">
              <h3 className="font-semibold mb-3 text-xl 2xl:text-2xl">Adventure Starts Here:</h3> 
              <h1 className='text-5xl 2xl:text-6xl font-bold mb-4'>Experience the Freedom of the Open Road</h1>
              <button className="text-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 mt-4 rounded 2xl:w-4/5">
                  Browse Our Collection
              </button>

            </div>

            <div className="desktop__img__container flex justify-center items-center px-10 2xl:px-0">
              <img src="/images/hero/hero_img.png" alt="bumper-pull" className='w-100%' />
            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default Hero
