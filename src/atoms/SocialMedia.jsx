// components/atoms/SocialMedia.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function SocialMedia() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'red', color: 'white', width:'58vh' , p: 2, marginLeft: '100px'  }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Redes sociales</Typography>
      <Typography variant="body1">ID WZ: NO NAME</Typography>
      <Typography variant="body1">Insta: christian.hdz</Typography>
       <Typography variant='body1'>Id epic: crisgopr117</Typography>
    </Box>
  );
}

export default SocialMedia;
