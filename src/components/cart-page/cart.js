import React, { useState } from 'react';
import { Box } from '@mui/material';
import Styles from './cart.module.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/GridLegacy';
import img1 from '../../assets/blazzer.jpg';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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

export default function Cart() {

    const [finalVal, setValue] = useState(1);

    function minus() {
        setValue(finalVal - 1);
    }

    function plus() {
        setValue(finalVal + 1);
    }

    return (
        <Box className={Styles.shoppingCart} sx={{ padding: 0 }}>
            <Container>
                <Grid container spacing={2} sx={{ paddingTop: 3, paddingBottom: 3 }}>
                    <Grid item lg={8}>
                        <Box className={Styles.product1}>
                            <Box className={Styles.leftCol}>
                                <Box>
                                    <img src={img1} />
                                </Box>
                                <Box>
                                    <h5>
                                        Men Solid Single Breasted Formal Blazer
                                    </h5>
                                    <h6>PETER ENGLAND</h6>
                                    <p> Black Color       </p>
                                    <h4 className={Styles.PriceSection}>₹ 1799/- <del>3,999/-</del> <mark> 57% off</mark></h4>

                                    <Box className={Styles.quantity}>
                                        <input type="button" value="-" onClick={minus} />
                                        <h6> {finalVal} </h6>
                                        <input type="button" value="+" onClick={plus} />
                                    </Box>
                                </Box>

                            </Box>
                            <Box className={Styles.rightCol}>

                                <Button startIcon={<DeleteIcon />}> Remove Cart</Button>

                            </Box>
                        </Box>
                        <Box className={Styles.product1}>
                            <Box className={Styles.leftCol}>
                                <Box>
                                    <img src={img1} />
                                </Box>
                                <Box>
                                    <h5>
                                        Men Solid Single Breasted Formal Blazer
                                    </h5>
                                    <h6>PETER ENGLAND</h6>
                                    <p> Black Color       </p>
                                    <h5 className={Styles.PriceSection}>₹ 1799/- <del>3,999/-</del> <mark> 57% off</mark></h5>

                                    <Box className={Styles.quantity}>
                                        <input type="button" value="-" />
                                        <h6> 1</h6>
                                        <input type="button" value="+" />
                                    </Box>
                                </Box>

                            </Box>
                            <Box className={Styles.rightCol}>

                                <Button startIcon={<DeleteIcon />}> Remove Cart</Button>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4}>
                        <Box className={Styles.cartPricing}>
                            <h4>Price Details</h4>
                            <Box className={Styles.price}>
                                <h5>Price (
                                    <span>2-</span>
                                    item ) </h5>
                                <p>
                                    ₹<span>3598.00</span>
                                </p>
                            </Box>
                            <Box className={Styles.price}>
                                <h5>Discount </h5>
                                <p>
                                    <span>10.00</span>%
                                </p>
                            </Box>
                            <Box className={Styles.price}>
                                <h5>Delivery Charges </h5>
                                <p>
                                    <span>0.00</span>
                                </p>
                            </Box>

                            <hr />
                            <Box className={Styles.total}>
                                <h5>Total Amount </h5>
                                <p>
                                    ₹<span>3,238/-</span>
                                </p>
                            </Box>
                            <Box>
                                <strong>You will save ₹<span>4,760/-</span>
                                    on this order</strong>
                            </Box>
                            <Box class="col-lg-12">
                                <Box className={Styles.btnsuccess}>
                                    <Link to="../Address">Place Order</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
