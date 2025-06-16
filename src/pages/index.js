import React from 'react';
import Header from '../components/header/header';
import { Box } from '@mui/material';
import Hero from '../components/hero/hero';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import Footer from '../components/footer/footer';
import Products from '../components/products/products';
// seo library 
import { Helmet } from 'react-helmet';

export default function index() {
    document.title = "Index Page";
    return (
        <>
           
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <Hero />
                </Grid>
                <Grid item xs={12}>
                    <Products />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    )
}
