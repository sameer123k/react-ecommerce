import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Styles from './footer.module.css';
import Logo from '../../assets/logo.png';
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
export default function footer() {
    return (<>

        <Box className={Styles.Footer}>
            <Container fixed>
                <Grid container spacing={2}>

                    <Grid size={3}>
                        <Box className={Styles.FooterLogo}>
                            <img src={Logo} alt="newlogo" />
                            <h6> Everything You Need, Just a Click Away </h6>
                            <p> Discover a seamless online shopping experience with top deals, fast shipping, and a wide range of products</p>
                        </Box>
                    </Grid>

                    <Grid size={2}>
                        <Box className={Styles.footermenu}>
                            <h5>About</h5>
                            <ul>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Manufacture</a>
                                </li>
                                <li>
                                    <a href="#">Wholesale</a>
                                </li>
                                <li>
                                    <a href="#">Retail</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    <Grid size={2}>
                        <Box className={Styles.footermenu}>
                            <h5>Usefull Links</h5>
                            <ul>
                                <li>
                                    <a href="#">Usefull Links </a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Manufacture</a>
                                </li>
                                <li>
                                    <a href="#">Wholesale</a>
                                </li>
                                <li>
                                    <a href="#">Retail</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    <Grid size={2}>
                        <Box className={Styles.footermenu}>
                            <h5>Monsoon Offers </h5>
                            <ul>
                                <li>
                                    <a href="#">Men's Fashion </a>
                                </li>
                                <li>
                                    <a href="#">Women's Fashion </a>
                                </li>
                                <li>
                                    <a href="#">Sports Wear</a>
                                </li>
                                <li>
                                    <a href="#">Sports Shoes</a>
                                </li>
                                <li>
                                    <a href="#">Party Wear</a>
                                </li>
                                <li>
                                    <a href="#">Child's Fashion</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    <Grid size={3}>
                        <Box className={Styles.footermenu}>
                            <h5>Get In Touch</h5>
                            <Box>
                                <ul>
                                    <li><b>Contact:</b>+91 9991303458</li>
                                    <li><b>Whatsapp:</b>+91 9991303458</li>
                                    <li><b>Email Id:</b> skmart@gmail.com</li>
                                    <li><b>Email Id:</b> skmart@gmail.com</li>
                                    <li><b>Location:</b>&nbsp;Jaipur, Rajasthan 302012</li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>

                    {/* copyright  */}

                    <Grid size={12}>
                        <Box className={Styles.copyright}>
                            <p>© 2025 | Made by Sameer Khan</p>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    </>
    )
}
