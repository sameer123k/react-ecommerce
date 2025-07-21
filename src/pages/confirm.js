import React from 'react';
import { Container, Grid, Typography, Box, Paper, Button, Divider } from '@mui/material';
import '../App.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';

export default function confirm() {
    return (
        <Grid>
            <Grid item sx={12}>
                <Header />
            </Grid>
            <Grid item sx={12}>
                <Box className="ConfirmOrder">
                    <Container sx={{ padding: 3 }}>
                        <Typography variant="h4" gutterBottom>
                            Review & Confirm Your Order
                        </Typography>

                        <Box mb={4}>
                            <Typography variant="h6" gutterBottom>
                                Shipping Address
                            </Typography>
                            <Paper sx={{ padding: 2, backgroundColor: '#f9f9f9' }}>
                                <Typography variant="body1">John Doe</Typography>
                                <Typography variant="body1">1234 Elm Street</Typography>
                                <Typography variant="body1">Springfield, IL</Typography>
                                <Typography variant="body1">United States</Typography>
                                <Typography variant="body1">62701</Typography>
                            </Paper>
                        </Box>

                        <Divider sx={{ marginBottom: 4 }} />

                        <Box mb={4}>
                            <Typography variant="h6" gutterBottom>
                                Billing Information
                            </Typography>
                            <Paper sx={{ padding: 2, backgroundColor: '#f9f9f9' }}>
                                <Typography variant="body1">Visa **** 1234</Typography>
                                <Typography variant="body1">Expiry Date: 11/24</Typography>
                            </Paper>
                        </Box>

                        <Divider sx={{ marginBottom: 4 }} />

                        {/* Confirmation Button */}
                        <Box textAlign="center">
                            <Button className='submitBtn'>
                                <Link to="../Success">   Submit Order</Link>
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Grid>
            <Grid item sx={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}
