import {useFormik} from 'formik';
import React from "react";
import { useState } from 'react';
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AdminLogin = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            console.log("enter")
            submitLogin()
        }
    }

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

            navigate('/admin/menu')
        }).catch(e => {
            setError(true)
            console.log(e)
        })
    }

    /*
    const formik = useFormik({
        initialValues: {
            email: 'sgunumber1@gmail.com',
            password: 'akuCintaSGU123'
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required')
        }),
        onSubmit: () => {
            navigate('/admin/menu');
        }
    });
    */

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
                    <Link
                        to="/"
                    >
                        <Button
                            startIcon={<ArrowBackIcon fontSize="small"/>}
                            sx={{
                                mb: -2
                            }}
                            to
                        >
                            Oops, bring me Back!
                        </Button>
                    </Link>
                    <form onSubmit={submitLogin}>
                        <Box sx={{ my: 5,  }}>
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
                                Sign in as an Admin
                            </Typography>
                        </Box>
                        <Grid
                            container
                            spacing={3}
                        >
                        </Grid>
                        <TextField
                            fullWidth
                            label="Username"
                            margin="normal"
                            name="username"
                            onChange={(e) => {setUsername(e.target.value)}}
                            type="text"
                            value={username}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            name="password"
                            onChange={(e)=>setPassword(e.target.value)}
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
                                Sign In as Admin
                            </Button>
                        </Box>
                    </form>
                </Container>
                <Snackbar open={error} autoHideDuration={5000} onClose={()=>{
                setError(false)
            }}>
                <Alert severity="error">
                    Wrong username or password!
                </Alert>
            </Snackbar>
            </Box>
        </>
    );
};

export default AdminLogin;
