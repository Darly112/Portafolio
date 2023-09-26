// components/atoms/ContactInfo.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function ContactInfo() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'red', color: 'white', width: '80vh' , p: 2 }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Información de contacto</Typography>
      <Typography variant="body1">Cristhian Rodriguez Hernandez</Typography>
      <Typography variant="body1">NO NAME108@gmail.com</Typography>
      <Typography variant="body1">+52 961 087 1175</Typography>
    </Box>
  );
}

export default ContactInfo;
