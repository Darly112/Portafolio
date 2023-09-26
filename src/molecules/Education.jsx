// components/molecules/Education.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function Education() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'red', color: 'white', width: '144vh' , p: 2 }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Educación</Typography>
      <Typography variant="body1">Mi educación sigue en curso en la Universidad Politécnica de Chiapas  en la cual dia a dia me impulsa a seguir mejorando en las tecnología aprendidas y lenguajes</Typography>
    </Box>
  );
}

export default Education;
