// components/molecules/WorkExperience.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function WorkExperience() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'red', color: 'white', width: '144vh' , p: 2 }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Experiencia laboral</Typography>
      <Typography variant="body1">Participé en la realización de pruebas unitarias y pruebas de integración para garantizar que el software fuera robusto y libre de errores .Aprendí a comunicarme eficazmente con mi equipo y a gestionar las expectativas del cliente</Typography>
    </Box>
  );
}

export default WorkExperience;
