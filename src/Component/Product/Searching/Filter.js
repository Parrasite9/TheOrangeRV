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
          <RangeSlider value={priceRange} onChange={handlePriceChange} label="Price Range" min={0} max={50000} />
          <RangeSlider value={yearRange} onChange={handleYearChange} label="Year Range" min={2000} max={2024} />
          <RangeSlider value={sleepsRange} onChange={handleSleepsChange} label="Sleeps Range" min={1} max={20} />
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={handleReset} className="text-blue-500">Reset</Button>
          <Button onClick={handleApply} className="text-blue-500">Apply</Button>
        </AccordionActions>
      </Accordion>
      <div className="mt-4">
        {filteredInventory.map(rv => (
          <div key={rv.id} className="mb-4">
            <h2 className="text-xl font-semibold">{rv.name}</h2>
            <p className="text-lg">Price: ${rv.price}</p>
            <p className="text-lg">Year: {rv.year}</p>
            <p className="text-lg">Sleeps: {rv.sleeps}</p>
            <img src={rv.image} alt={rv.name} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;

