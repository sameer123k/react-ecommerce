import React from 'react';
import Styles from './products.module.css';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import Shirt from '../../assets/blazzer.jpg';
import OfferImg from "../../assets/offer.png";

export default function products() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} className={Styles.productHero}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box className={Styles.ProductImages}>
                            <Box className={Styles.productImg}>
                                <Box className={Styles.images}>
                                    <ul>
                                        <li>
                                            <img onclick="document.getElementById('myImage').src='../images/Product/actual/'" src={Shirt} alt="" />
                                        </li>
                                        <li>
                                            <img onclick="document.getElementById('myImage').src='../images/Product/actual/'" src={Shirt} alt="" />
                                        </li>
                                        <li>
                                            <img onclick="document.getElementById('myImage').src='../images/Product/actual/'" src={Shirt} alt="" />
                                        </li>
                                        <li>
                                            <img onclick="document.getElementById('myImage').src='../images/Product/actual/'" src={Shirt} alt="" />
                                        </li>
                                        <li>
                                            <img onclick="document.getElementById('myImage').src='../images/Product/actual/'" src={Shirt} alt="" />
                                        </li>

                                    </ul>
                                </Box>
                                <Box className={Styles.imagesShow}>
                                    <div class={Styles.heartDiv}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>
                                    </div>

                                    <img id="myImage" className={Styles.imgresponsive} src={Shirt} />
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={Styles.productDetail}>
                            <h4>
                                <span>Men Solid Single Breasted Formal Blazer</span>
                            </h4>
                            <h5 autofocus="true" role="heading">
                                PETER ENGLAND </h5>

                            <Box className={Styles.mrp}>
                                <label>
                                    <span>MRP </span>
                                    <small>(Including all taxes)</small>
                                </label>
                                <Box className={Styles.popularProductsPrice}>
                                    <label for="">
                                        <strong><span>&#8377; 2,192</span>
                                        </strong>
                                        <del>
                                            <span>₹3,999</span>
                                        </del>
                                        <span className="offSpan">
                                            <span>45% off</span>
                                        </span>
                                    </label>
                                </Box>
                            </Box>


                            <Box className={Styles.benefits}>
                                <ul>
                                    <li>
                                        <img src={Shirt} alt="" />
                                        <span>White</span>
                                    </li>
                                    <li>
                                        <img src={Shirt} alt="" />
                                        <span>Blue</span>
                                    </li>
                                    <li>
                                        <img src={Shirt} alt="" />
                                        <span>Dark</span>
                                    </li>
                                    <li>
                                        <img src={Shirt} alt="" />
                                        <span>Light Gray</span>
                                    </li>
                                </ul>
                            </Box>


                            <Box className={Styles.size}>
                                <span>size</span>
                                <Box className={Styles.buttons}>

                                    <button className={Styles.active}>
                                        <a href="#">
                                            <span>M</span>
                                        </a>
                                    </button>

                                    <button className={Styles.active}>
                                        <a href="#">
                                            <span>L</span>
                                        </a>
                                    </button>

                                    <button className={Styles.active}>
                                        <a href="#">
                                            <span>XL</span>
                                        </a>
                                    </button>

                                    <button className={Styles.active}>
                                        <a href="#">
                                            <span>XXL</span>
                                        </a>
                                    </button>

                                </Box>
                            </Box>

                            <Box className={Styles.size}>
                                <span>Quality : </span>
                                <select>
                                    <option selected="selected" value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>

                                </select>
                            </Box>

                            <Box className={Styles.buybtns}>

                                <input type="submit" value="Add to Cart" className={Styles.addtoCart} />

                                <input type="submit" value="Buy Now" className={Styles.buyNow} />
                            </Box>
                            <Box className={Styles.psproductdesc}>
                                <mark>Available offers</mark>
                                <ul className={Styles.pslistdot}>
                                    <li>
                                        <img src={OfferImg} />
                                        <b>Bank Offer </b>5% Unlimited Cashback on Flipkart Axis Bank Credit Card </li>
                                    <li>
                                        <img src={OfferImg} />
                                        <b>Bank Offer </b>15% Unlimited Cashback on Flipkart Axis Bank Credit Card </li>
                                    <li>
                                        <img src={OfferImg} />
                                        <b>Bank Offer </b>5% Unlimited Cashback on Flipkart Axis Bank Credit Card </li>
                                    <li>
                                        <img src={OfferImg} />
                                        <b>Bank Offer </b>5% Unlimited Cashback on Flipkart Axis Bank Credit Card </li>
                                    <li>
                                        <img src={OfferImg} />
                                        <b>Bank Offer </b>5% Unlimited Cashback on Flipkart Axis Bank Credit Card </li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
