import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

function RangeSlider({ value, onChange, label }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => `${label} range`}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
          color: 'lively-orange', // Adjust to your custom theme colors
          '& .MuiSlider-thumb': {
            color: 'lively-orange', // Adjust to your custom theme colors
          },
          '& .MuiSlider-track': {
            color: 'sunset-orange', // Adjust to your custom theme colors
          },
          '& .MuiSlider-rail': {
            color: 'sunset-orange', // Adjust to your custom theme colors
          },
        }}
      />
    </Box>
  );
}

export default RangeSlider;
