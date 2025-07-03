import React from 'react';
import { Box, Button, ButtonBase, Grid, Paper, TextField } from '@mui/material';
import '../App.css';
import { Link } from 'react-router-dom';
export default function adminlogin() {
  document.title = "Admin Login";
  return (
    <Box className="adminLogin">
      <Box className="formcontainer">
        <p className="title">Admin Login</p>
        <form className="form">
          <Box className="inputgroup">
            <label for="email">Email Address / UserId</label>
            <input type="email" name="email" id="email" required placeholder="" />
          </Box>
          <Box className="inputgroup">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required placeholder="" />
          </Box>
          <button className="sign"><Link to="#">Login </Link></button>
        </form>
      </Box>
    </Box>
  )
}
