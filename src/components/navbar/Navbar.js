import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Modal from '../modal/Modal';
import "./Navbar.css"
import { Grid, InputAdornment, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <Box sx={{ flexGrow: 1, display: 'flex'}}>
            <AppBar position="static" className="navbar">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src="logo.png" alt="" className='logo-blog' />
                    </IconButton>
                    <TextField id="outlined-basic"
                        placeholder="Tìm kiếm trên Blog"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <div className='icons-nav'>
                        <Grid container spacing={4}>
                            <Grid item >
                                <HomeIcon fontSize="large" sx={{ color: "black" }} />
                            </Grid>
                            <Grid item >
                                <PeopleOutlineIcon fontSize="large" sx={{ color: "black" }} />
                            </Grid>
                            <Grid item >
                                <OndemandVideoIcon fontSize="large" sx={{ color: "black" }} />
                            </Grid>
                        </Grid>
                    </div>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex' } }}>
                        <Button color="inherit" onClick={handleOpen}><AccountCircleIcon fontSize="large" sx={{ color: "black" }} /></Button>
                    </Box>
                </Toolbar>
                <Modal open={open} setOpen={setOpen} />
            </AppBar>
        </Box>
    );
}