import React from 'react'
import { Link } from 'react-router-dom'
import { useScreenWidth } from '../Global/ScreenWidthContext'

function ModelType() {

  const models = [
    {
      name: 'Pop Campers',
      image: '/images/models/popup.png',
      href: '#',
    },
    {
      name: 'Travel Trailers',
      image: '/images/models/travelTrailer.png',
      href: '#',
    },
    {
      name: 'Fifth Wheels',
      image: '/images/models/fifthWheel.png',
      href: '#',
    },
    {
      name: 'Toy Haulers',
      image: '/images/models/toyHauler.png',
      href: '#',
    },
    // {
    //   name: 'Class A',
    //   image: '/images/models/classA.png',
    //   href: '#',
    // },
    // {
    //   name: 'Class B',
    //   image: '/images/models/classB.png',
    //   href: '#',
    // },
    // {
    //   name: 'Class C',
    //   image: '/images/models/classC.png',
    //   href: '#',
    // },
  ]

  const isMobile = useScreenWidth()

  return (
    <>
      {isMobile ? (
        <>
          <div className='modelType__container'>
            <h2 className='text-center font-semibold text-sunset-orange text-xl mt-5'>Select Your Style</h2>
            <div className="modelType grid grid-cols-2 gap-4 m-8">
              {models.map((item, index) => (
                <Link className={`${item.className} border rounded border-sunset-orange`} to={item.href}>
                  <img src={item.image} alt={item.name} />
                  <p className='text-center bg-peach py-1'>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='modelType__container'>
            <h2 className='text-center font-semibold text-sunset-orange text-xl mt-5'>Select Your Style</h2>
            <div className="modelType flex m-8
                            xl:px-[2.5%] 
                            2xl:px-[4%]">
              {models.map((item, index) => (
                <Link className={`${item.className} border rounded border-sunset-orange mx-4`} to={item.href}>
                  <img src={item.image} alt={item.name} />
                  <p className='text-center bg-peach py-1'>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ModelType
