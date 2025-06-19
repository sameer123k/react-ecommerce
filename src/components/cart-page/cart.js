import React from 'react';
import { Box } from '@mui/material';
import Styles from './cart.module.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/GridLegacy';
import img1 from '../../assets/blazzer.jpg';


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
    return (
        <Box sx={{ flexGrow: 1 }} className={Styles.shoppingCart}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box className={Styles.product1}>
                        <Box className={Styles.leftCol}>
                            <Box>
                                <img src={img1} />
                            </Box>
                            <Box>
                                <h5>
                                    Ashirwad Aata
                                </h5>
                                <p>
                                    <label>Color : White</label>

                                    <label>Size : 1KG</label>
                                </p>
                                <h6>


                                    <del>₹59.00</del><strong>₹53.10</strong><span>10.00% off </span>

                                </h6>

                                <Box className={Styles.quantity}>
                                    <input className={Styles.quantity__minus} type="button" value="-" />
                                    <input id="quantity" name="quantity" type="text" class="quantity__input" value="1" readonly="readonly" />
                                    <input class="quantity__minus" type="button" onclick="fn_quantityplus(this,1,1)" value="+" />
                                </Box>
                            </Box>

                        </Box>
                        <Box className={Styles.rightCol}>

                            <input type="submit" value="Remove Cart" />
                            <input type="hidden" value="1" />

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={Styles.cartPricing}>
                        <h4>Price Details</h4>
                        <Box className={Styles.price}>
                            <h5>Price (
                                <span id="ctl00_ContentPlaceHolder1_lbltotalitem">1</span>
                                item ) </h5>
                            <p>
                                ₹<span id="ctl00_ContentPlaceHolder1_lbltotalprice">59.00</span>
                            </p>
                        </Box>
                        <Box className={Styles.price}>
                            <h5>Discount </h5>
                            <p>
                                <span id="ctl00_ContentPlaceHolder1_lblTotalDiscount">10.00</span>%
                            </p>
                        </Box>
                        <Box className={Styles.price}>
                            <h5>Delivery Charges </h5>
                            <p>
                                <span id="ctl00_ContentPlaceHolder1_lbldeliverycharge">0.00</span>
                            </p>
                        </Box>


                        <Box className={Styles.total}>
                            <h5>Total Amount </h5>
                            <p>
                                ₹<span id="ctl00_ContentPlaceHolder1_lbltotalprice1">53.10</span>
                            </p>
                        </Box>


                        <Box>
                            <strong>You will save ₹<span>5.90</span>
                                on this order</strong>
                        </Box>

                        <Box class="col-lg-12">

                            <p class="w-100 btn btn-success" id="placeorder">Place Order</p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
