import React from 'react'

function Map() {
  return (
    <div className="map relative w-full h-96">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3391.480031244745!2d-102.50672892367972!3d31.78466497409411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDQ3JzA0LjgiTiAxMDLCsDMwJzE1LjAiVw!5e0!3m2!1sen!2sus!4v1715838648115!5m2!1sen!2sus"          frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  </div>
  )
}

export default Map
