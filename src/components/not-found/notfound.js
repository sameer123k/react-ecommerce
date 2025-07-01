import React from 'react';
import NotFound from '../../assets/notfound.png';
import Styles from './notfound.module.css';
import { Box } from '@mui/material';
export default function notfound() {
    return (
        <Box className={Styles.notfound}>
            <img src={NotFound} alt="notfound" />
        </Box>
    )
}
