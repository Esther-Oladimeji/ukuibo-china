import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import '../styles/Header.css';

const Header = () => {
  return (
    <AppBar position="fixed" className="custom-app-bar">
      <Toolbar className="custom-toolbar">
        <IconButton edge="start"color= "inherit" aria-label="menu"> MUI Navbar
        </IconButton>
    
        <div className='links'>
        <Button color="inherit" className='link'>Home</Button>
        <Button color="inherit" className='link'>Link</Button>
        <Button color="inherit" className='link'>Link</Button>
        <Button color="inherit" className='link'>Link</Button>
        </div>
        <button>
        <div color="inherit" className='button'>GET IN TOUCH</div>
        </button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
