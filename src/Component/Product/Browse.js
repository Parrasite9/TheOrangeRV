import React from 'react'
import Footer from '../Global/Footer'
import Navbar from '../Global/Navbar'
import Filter from './Searching/Filter'
import Search from './Searching/Search'

function Browse() {
  return (
    <div>
        <Navbar />
        <h1>Search</h1>
        <Filter />
      <Search />
      <Footer />
    </div>
  )
}

export default Browse
