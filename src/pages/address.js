import React from 'react';
import { Box, Grid } from '@mui/material';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
export default function address() {
    return (
        <Box>
            <Grid spacing={0}>
                <Grid item lg={12}>
                    <Header />
                </Grid>
                <Grid item lg={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    )
}
