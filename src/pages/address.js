import React from 'react';
import { Box, Grid, FormControlLabel, Checkbox, Button } from '@mui/material';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '../App.css';
export default function address() {
    return (
        <Box>
            <Grid spacing={0}>
                <Grid item lg={12}>
                    <Header />
                </Grid>
                <Grid item lg={12}>
                    <Box className="AddressPage">

                        <Box sx={{ padding: 3 }}>
                            <Typography variant="h4" gutterBottom>
                                Address & Billing Details*
                            </Typography>

                            {/* Address Section */}
                            <Box mb={4}>
                                <Typography variant="h6" gutterBottom>
                                    Shipping Address
                                </Typography>
                                <Grid container spacing={3}>
                                    {/* Name */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Full Name" variant="outlined" />
                                    </Grid>

                                    {/* Street Address */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Street Address" variant="outlined" />
                                    </Grid>

                                    {/* City */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="City" variant="outlined" />
                                    </Grid>

                                    {/* State */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="State" variant="outlined" />
                                    </Grid>

                                    {/* Country */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Country" variant="outlined" />
                                    </Grid>

                                    {/* Postal Code */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Postal Code" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Box>

                            {/* Billing Section */}
                            <Box mb={4}>
                                <Typography variant="h6" gutterBottom>
                                    Billing Information
                                </Typography>
                                <Grid container spacing={3}>
                                    {/* Card Number */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Card Number" variant="outlined" type="number" />
                                    </Grid>

                                    {/* Expiry Date */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Expiry Date (MM/YY)" variant="outlined" type="text" />
                                    </Grid>

                                    {/* CVV */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="CVV" variant="outlined" type="password" />
                                    </Grid>

                                    {/* Billing Address Checkbox */}
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Billing address is same as shipping address"
                                        />
                                    </Grid>

                                    {/* Billing Address (If Different) */}
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Billing Address" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Box>

                            {/* Submit Button */}
                            <Box textAlign="center">
                                <Button className='submitBtn' href='../Confirm'>
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    )
}
