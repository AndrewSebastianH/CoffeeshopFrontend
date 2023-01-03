import {useFormik} from 'formik';
import React from "react";
import { useState, useContext } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    Snackbar,
    Alert
} from '@mui/material';
import {
    Link,
    useNavigate
} from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import UserModel from '../models/User';
import { set } from 'date-fns';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitLogin = async () => {
        const body = {
            username: username,
            password: password
           }

        await axios.post('http://localhost:8080/auth/signin', body)
        .then(async (res) => {
            console.log(res.data.token)
            const result = res.data
            localStorage.token = result.token
            localStorage.email = result.email
            sessionStorage.token = result.token
            sessionStorage.role = result.roles

       //     await ability.update(sessionStorage.role)
            if(sessionStorage.role == "ROLE_ADMIN") {
                navigate('/admin/menu')
            } else if (sessionStorage.role == "ROLE_CUSTOMER") {
                navigate('/menu')

            }
        }).catch(e => {
            setError(true)
            console.log(e)
        })

/*
        try {
           // const result = await UserModel.login(username, password)
            
          if (!result) {
                console.log("ERROR")
            } else if (result.token) {
                console.log(result)
                localStorage.token = result.token
                localStorage.email = result.email
                sessionStorage.token = result.token
                sessionStorage.role = result.role
                sessionStorage.setItem('ability', JSON.stringify(result.ability))
                navigate('/menu')
            }
        } catch (e) {
            console.error(e)
        }
*/
    }

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            console.log("enter")
            submitLogin()
        }
    }


    return (
        <>

            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100vh',
                    margin: -1
                }}
            >
                <Container maxWidth="sm">
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        submitLogin()
                    }}>
                        <Box sx={{ my: 3 }}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Sign in
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                Sign in using your account
                            </Typography>
                        </Box>
                        <Grid
                            container
                            spacing={3}
                        >
                        </Grid>
                        {/*<Box*/}
                        {/*    sx={{*/}
                        {/*        pb: 1,*/}
                        {/*        pt: 3*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <Typography*/}
                        {/*        align="center"*/}
                        {/*        color="textSecondary"*/}
                        {/*        variant="body1"*/}
                        {/*    >*/}
                        {/*        or sign in as*/}
                        {/*        {' '}*/}

                        {/*        <Link*/}
                        {/*            to="/admin/login"*/}
                        {/*            color="primary"*/}
                        {/*            underline="always"*/}
                        {/*            variant="subtitle2"*/}
                        {/*        >*/}
                        {/*            an Admin*/}
                        {/*        </Link>*/}
                        {/*    </Typography>*/}
                        {/*</Box>*/}
                        <TextField
                            fullWidth
                            label="Username"
                            margin="normal"
                            name="username"
                            onChange={(e)=> { setUsername(e.target.value)}}
                            type="text"
                            value={username}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            name="password"
                            onChange={(e) => { setPassword(e.target.value)}}
                            onKeyPress={handleKeyPress}
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            variant="outlined"
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                            }}
                        />
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign In
                            </Button>
                        </Box>
                        <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            Don&apos;t have an account?
                            {' '}
                            <Link
                                to="/signup"
                                variant="subtitle2"
                                underline="hover"
                                sx={{
                                    cursor: 'pointer'
                                }}
                            >
                                Sign Up
                            </Link>
                        </Typography>
                    </form>
                </Container>
            </Box>
            <Snackbar open={error} autoHideDuration={5000} onClose={()=>{
                setError(false)
            }}>
                <Alert severity="error">
                    Wrong username or password!
                </Alert>
            </Snackbar>
 
        </>
    );
};

export default Login;
