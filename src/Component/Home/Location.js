import React from 'react'
import Map from '../Map/Map'

function Location() {
  return (
    <section className='lg:flex lg:py-5'>
      <div className="location__text text-center my-5 flex flex-col justify-center lg:w-4/5">
        <h1 className='text-lively-orange text-xl font-semibold lg:pb-5'>Come Check Us Out!</h1>
        <p>123 W A St <br />
           West Odess, TX <br />
           79705 </p>
      </div>
      <Map />
    </section>
  )
}

export default Location
