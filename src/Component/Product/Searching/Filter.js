import React, { useState } from 'react';
import inventory from '../Inventory';
import RangeSlider from './Slider'; // Assuming you save the RangeSlider component in the same directory

function Filter() {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [yearRange, setYearRange] = useState([2000, 2024]);
  // Add more state variables for other filters

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleYearChange = (event, newValue) => {
    setYearRange(newValue);
  };

  const filteredInventory = inventory.filter(item => 
    item.price >= priceRange[0] && item.price <= priceRange[1] &&
    item.year >= yearRange[0] && item.year <= yearRange[1]
    // Add more filter conditions
  );

  return (
    <div>
      <h2>Filter RVs</h2>
      <div>
        <label>Price Range</label>
        <RangeSlider value={priceRange} onChange={handlePriceChange} label="Price" />
      </div>
      <div>
        <label>Year Range</label>
        <RangeSlider value={yearRange} onChange={handleYearChange} label="Year" />
      </div>
      {/* Add more filter options */}
      <div>
        {filteredInventory.map(rv => (
          <div key={rv.id}>
            <h2>{rv.name}</h2>
            <p>Price: ${rv.price}</p>
            <p>Year: {rv.year}</p>
            <img src={rv.image} alt={rv.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
