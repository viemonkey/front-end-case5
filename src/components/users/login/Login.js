import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Login.css";
import { Formik } from "formik"
import { useDispatch } from 'react-redux';
import { login } from '../../../services/users/UserService';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const defaultTheme = createTheme();

export default function Login({ setLogin, handleClose }) {
    const changeLogin = () => {
        setLogin(false)
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        try {
            const response = await dispatch(login(data))
            console.log(response);
            if (response.payload.data === "Password is wrong") {
                alert("sai mk")
                navigate("/")
            } else if (response.payload.data === "User is not exist") {
                alert("sai tk mk")
                navigate("/")
            }
            else {
                setLogin(true)
                handleClose()
                navigate("/home")
            }
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <Formik >
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Box

                    className="form-login"
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}
                        initialValues={{ username: '', password: '' }}
                        onSubmit={(values) => {
                            handleLogin(values)
                        }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            LogIn
                        </Button>

                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={changeLogin}>
                                    {"Don't have an account? Register"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </ThemeProvider>
        </Formik >
    );
}

