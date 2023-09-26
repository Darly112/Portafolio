// components/molecules/Objectives.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function Objectives() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'red', color: 'white', width: '144vh' ,p: 2 }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Objetivos</Typography>
      <Typography variant="body1">Pues mejorar mi capacidad de entendimiento y la implementación de las tecnológicas tanto en Front-end y Back-end. Esto incluye los lenguajes tales como Java, c++ y JavaScript..</Typography>
     
    </Box>
  );
}

export default Objectives;
