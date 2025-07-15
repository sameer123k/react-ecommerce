import React from 'react';
import { Container, Typography, Box, Paper, Button, Grid, Divider } from '@mui/material';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import '../App.css';
import Success from '../assets/success.png';
export default function success() {
    return (
        <Grid>
            <Grid item sx={12}>
                <Header />
            </Grid>
            <Grid item sx={12}>
                <Box className="Ordersuccess">
                    <Container maxWidth="md" sx={{ padding: 3 }}>
                        <Box textAlign='center'>
                            <img src={Success} height={120} alt="success" />
                            <Typography variant="h4" align="center" gutterBottom>
                                Thank You for Your Order!
                            </Typography>
                        </Box>

                        {/* Order Confirmation Message */}
                        <Box mb={4} textAlign="center">
                            <Typography variant="h6" mb={1}>
                                Your order has been successfully placed. We'll notify you once it's shipped.
                            </Typography>
                            <Typography variant="body1">
                                If you have any questions or need assistance, feel free to reach out to our customer service.
                            </Typography>
                        </Box>

                        <Divider sx={{ marginBottom: 4 }} />

                        {/* Estimated Delivery */}
                        <Box mb={4} textAlign="center">
                            <Typography variant="h6">
                                Estimated Delivery Date:
                                <strong> July 20, 2025</strong>
                            </Typography>
                        </Box>

                        {/* Customer Support Info */}
                        <Box mb={4} textAlign="center">
                            <Typography variant="body1">
                                Need help? Reach out to our customer support team at abc@gmail.com or call us at +91 9991303458.
                            </Typography>
                        </Box>

                        <Box textAlign="center">
                            <Button className='submitBtn' href='/' sx={{ marginRight: 2 }}>
                                Back to Home
                            </Button>
                            <Button className='continueBtn' href='/ProductDetail'>
                                Continue Shopping
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
