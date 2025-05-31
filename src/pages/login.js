import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import Loginomponent from '../components/loginform/loginform';
export default function login() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12}>
          <Loginomponent />
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  )
}
