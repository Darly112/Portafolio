// App.js
import React from 'react';
import { CssBaseline, Container, Grid, Typography, Box } from '@mui/material';
import Navbar from './atoms/NavBar';
import ContactInfo from './atoms/ContactInfo';
import SocialMedia from './atoms/SocialMedia';
import Objectives from './molecules/Objectives';
import WorkExperience from './molecules/WorkExperience';
import Education from './molecules/Education';




function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <Box sx={{ borderRadius:'5px', mb: 2, backgroundColor: 'red', color: 'white', p: 1 , width: '70vh' , marginTop: '40px'}}>
              <Typography variant="h4" sx={{ color: 'gold' }}>Cristhian Rodriguez Hernandez </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <ContactInfo />
          </Grid>
          <Grid item xs={6}>
            <SocialMedia />
          </Grid>
          <Grid item xs={12}>
            <Objectives />
          </Grid>
          <Grid item xs={12}>
            <WorkExperience />
          </Grid>
          <Grid item xs={12}>
            <Education />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;