import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import CartData from '../components/cart-page/cart';

export default function Cart() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <CartData />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    )
}
