import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import RangeSlider from './Slider';
import inventory from '../Inventory';


function Filter() {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [yearRange, setYearRange] = useState([2000, 2024]);
  const [sleepsRange, setSleepsRange] = useState([1, 20]);
  const [expanded, setExpanded] = useState(true);

  const defaultPriceRange = [0, 50000];
  const defaultYearRange = [2000, 2024];
  const defaultSleepsRange = [1, 20];

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleYearChange = (event, newValue) => {
    setYearRange(newValue);
  };

  const handleSleepsChange = (event, newValue) => {
    setSleepsRange(newValue);
  };

  const handleReset = () => {
    setPriceRange(defaultPriceRange);
    setYearRange(defaultYearRange);
    setSleepsRange(defaultSleepsRange);
    setExpanded(false);
  };

  const handleApply = () => {
    setExpanded(false);
  };

  const filteredInventory = inventory.filter(item => 
    item.price >= priceRange[0] && item.price <= priceRange[1] &&
    item.year >= yearRange[0] && item.year <= yearRange[1] &&
    item.sleeps >= sleepsRange[0] && item.sleeps <= sleepsRange[1]
  );

  return (
    <div className="w-full p-4">
      <Accordion expanded={expanded} className='border border-lively-orange' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-lively-orange' />}
          aria-controls="panel1-content"
          id="panel1-header"
          onClick={() => setExpanded(!expanded)}
          className='font-lively-orange'
        >
          <span className="text-lg font-semibold">Filter RVs</span>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col items-center">
          <RangeSlider className='font-semibold' value={priceRange} onChange={handlePriceChange} label="Price Range" min={0} max={50000} />
          <RangeSlider className='font-semibold' value={yearRange} onChange={handleYearChange} label="Year Range" min={2000} max={2024} />
          <RangeSlider className='font-semibold' value={sleepsRange} onChange={handleSleepsChange} label="Sleeps Range" min={1} max={20} />
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={handleReset} className="text-blue-500">Reset</Button>
          <Button onClick={handleApply} className="text-blue-500">Apply</Button>
        </AccordionActions>
      </Accordion>
      <div className="mt-4">
        {filteredInventory.map(rv => (
          <div key={rv.id} className="mb-4 border rounded-md border-lively-orange bg-cool-white">
            <div className="rv__img">
                <img src={rv.image} alt={rv.name} className="w-full h-auto mb-5" />
            </div>

            <div className="rv__info mx-2">
                <div className="year__and__model flex mb-5">
                    <p className="text-lg font-semibold">{rv.year}</p>
                    <h2 className="text-xl font-semibold ml-2">{rv.name}</h2>
                </div>

                {/* PRICE AND SLEEPS  */}
                <div className="price__and__sleeps flex justify-between">
                    <div className="condition__and__sleeps">
                        <p className='font-semibold '>USED</p>
                        {/* <p className="text-lg">Sleeps: {rv.sleeps}</p> */}
                    </div>

                    {/* PRICE AND PRICE TEXT  */}
                    <div className="price__and__priceText flex flex-col flex-end">
                        <p>Sale Price</p>
                        <p className="text-lg">${rv.price}</p>
                    </div>              
                </div>

                {/* BUTTONS  */}
                <div className="offer__and__available flex justify-between mb-5">
                    <button className='bg-blue-500 text-white p-2 w-[40%]'>Confirm Availability</button>    
                    <button className='bg-fresh-green text-white p-2 w-[40%]'>Make An Offer</button>    
                </div> 

                {/* RV SPECS  */}
                <div className="rv__specs flex justify-between mx-2 text-center text-sm">
                    {/* LENGTH  */}
                    <div className="spec__data">
                        <p>Length (ft)</p>
                        <p>{rv.length}</p>
                    </div>

                    {/* WEIGHT */}
                    <div className="spec__data">
                        <p>Weight (lbs)</p>
                        <p>{rv.weight}</p>
                    </div>

                    {/* SLIDES  */}
                    <div className="spec__data">
                        <p>Slides</p>
                        <p>{rv.slides}</p>
                    </div>   

                    {/* SLEEPS  */}
                    <div className="spec__data">
                        <p>Sleeps</p>
                        <p>{rv.sleeps}</p>
                    </div>
 
                </div> 

                {/* VIEW DETAILS  */}
                <div className="details__button border rounded border-lively-orange bg-sunset-orange hover:bg-lively-orange text-white text-center p-2 my-5">
                    <button>View Details</button>
                </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;

