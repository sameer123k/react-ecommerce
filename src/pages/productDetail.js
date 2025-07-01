import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Products from '../components/cart-products/products';
import { Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


export default function ProductDetail() {
  document.title = "Cart";
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>

          <Grid item xs={12}>
            <Products />
          </Grid>
      

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
