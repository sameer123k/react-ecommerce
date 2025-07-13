import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Styles from './products.module.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/GridLegacy';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Blazzer from '../../assets/blazzer.jpg';
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


export default function products() {
    return (
        <Container fixed className={Styles.Productssection}>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Card className={Styles.card}>
                        <CardActionArea>
                            <CardMedia className={Styles.cardImg}
                                component="img"
                                height="140"
                                image={Blazzer}
                                alt="green iguana"
                            />
                            <CardContent className={Styles.CardContent}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PETER ENGLAND
                                </Typography>
                                <Typography gutterBottom variant="h4">
                                    Men Solid Single Breasted Formal Blazer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Black Color
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    &#8377; 1799/- <del>3,999/-</del> <mark> 57% off</mark>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                    Size: XL
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={Styles.Btn}>
                                <Link to="/ProductDetail" > Buy Now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Card className={Styles.card}>
                        <CardActionArea>
                            <CardMedia className={Styles.cardImg}
                                component="img"
                                height="140"
                                image={Blazzer}
                                alt="green iguana"
                            />
                            <CardContent className={Styles.CardContent}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PETER ENGLAND
                                </Typography>
                                <Typography gutterBottom variant="h4">
                                    Men Solid Single Breasted Formal Blazer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Black Color
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    &#8377; 1799/- <del>3,999/-</del> <mark> 57% off</mark>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                    Size: XL
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={Styles.Btn}>
                                <Link to="/ProductDetail" > Buy Now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Card className={Styles.card}>
                        <CardActionArea>
                            <CardMedia className={Styles.cardImg}
                                component="img"
                                height="140"
                                image={Blazzer}
                                alt="green iguana"
                            />
                            <CardContent className={Styles.CardContent}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PETER ENGLAND
                                </Typography>
                                <Typography gutterBottom variant="h4">
                                    Men Solid Single Breasted Formal Blazer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Black Color
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    &#8377; 1799/- <del>3,999/-</del> <mark> 57% off</mark>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                    Size: XL
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={Styles.Btn}>
                                <Link to="/ProductDetail" > Buy Now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Card className={Styles.card}>
                        <CardActionArea>
                            <CardMedia className={Styles.cardImg}
                                component="img"
                                height="140"
                                image={Blazzer}
                                alt="green iguana"
                            />
                            <CardContent className={Styles.CardContent}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PETER ENGLAND
                                </Typography>
                                <Typography gutterBottom variant="h4">
                                    Men Solid Single Breasted Formal Blazer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Black Color
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    &#8377; 1799/- <del>3,999/-</del> <mark> 57% off</mark>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                    Size: XL
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={Styles.Btn}>
                                <Link to="/ProductDetail" > Buy Now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Grid container mt={2} spacing={2}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Card className={Styles.card}>
                        <CardActionArea>
                            <CardMedia className={Styles.cardImg}
                                component="img"
                                height="140"
                                image={Blazzer}
                                alt="green iguana"
                            />
                            <CardContent className={Styles.CardContent}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PETER ENGLAND
                                </Typography>
                                <Typography gutterBottom variant="h4">
                                    Men Solid Single Breasted Formal Blazer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Black Color
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    &#8377; 1799/- <del>3,999/-</del> <mark> 57% off</mark>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                    Size: XL
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={Styles.Btn}>
                                <Link to="/ProductDetail" > Buy Now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Card className={Styles.card}>
                        <CardActionArea>
                            <CardMedia className={Styles.cardImg}
                                component="img"
                                height="140"
                                image={Blazzer}
                                alt="green iguana"
                            />
                            <CardContent className={Styles.CardContent}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PETER ENGLAND
                                </Typography>
                                <Typography gutterBottom variant="h4">
                                    Men Solid Single Breasted Formal Blazer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Black Color
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    &#8377; 1799/- <del>3,999/-</del> <mark> 57% off</mark>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                    Size: XL
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={Styles.Btn}>
                                <Link to="/ProductDetail" > Buy Now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Card className={Styles.card}>
                        <CardActionArea>
                            <CardMedia className={Styles.cardImg}
                                component="img"
                                height="140"
                                image={Blazzer}
                                alt="green iguana"
                            />
                            <CardContent className={Styles.CardContent}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PETER ENGLAND
                                </Typography>
                                <Typography gutterBottom variant="h4">
                                    Men Solid Single Breasted Formal Blazer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Black Color
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    &#8377; 1799/- <del>3,999/-</del> <mark> 57% off</mark>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                    Size: XL
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={Styles.Btn}>
                                <Link to="/ProductDetail" > Buy Now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Card className={Styles.card}>
                        <CardActionArea>
                            <CardMedia className={Styles.cardImg}
                                component="img"
                                height="140"
                                image={Blazzer}
                                alt="green iguana"
                            />
                            <CardContent className={Styles.CardContent}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PETER ENGLAND
                                </Typography>
                                <Typography gutterBottom variant="h4">
                                    Men Solid Single Breasted Formal Blazer
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Black Color
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    &#8377; 1799/- <del>3,999/-</del> <mark> 57% off</mark>
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                    Size: XL
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={Styles.Btn}>
                                <Link to="/ProductDetail" > Buy Now</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Container>
    )
}
