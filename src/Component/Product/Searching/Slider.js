import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

function valuetext(value) {
  return `${value}`;
}

function RangeSlider({ value, onChange, label, min, max, className }) {
  const handleInputChange = (index, event) => {
    const newValue = [...value];
    newValue[index] = event.target.value === '' ? '' : Number(event.target.value);
    onChange(null, newValue);
  };

  return (
    <Box sx={{ width: '100%', padding: '10px' }} className="flex flex-col items-center">
      <label className={`w-full text-center mb-2 ${className}`}>{label}</label>
      <Box className="w-full flex justify-between items-center mb-2">
        <TextField
          value={value[0]}
          onChange={(e) => handleInputChange(0, e)}
          inputProps={{
            step: 1,
            min: min,
            max: value[1],
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
          sx={{ width: '40%' }}
        />
        <TextField
          value={value[1]}
          onChange={(e) => handleInputChange(1, e)}
          inputProps={{
            step: 1,
            min: value[0],
            max: max,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
          sx={{ width: '40%' }}
        />
      </Box>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        sx={{
          color: '#FFA500', // lively-orange
          '& .MuiSlider-thumb': {
            color: '#FFA500', // lively-orange
          },
          '& .MuiSlider-track': {
            color: '#FF4500', // sunset-orange
          },
          '& .MuiSlider-rail': {
            color: '#FF4500', // sunset-orange
          },
        }}
        className="w-full"
      />
    </Box>
  );
}

export default RangeSlider;
