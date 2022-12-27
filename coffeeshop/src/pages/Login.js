import {useFormik} from 'formik';
import React from "react";
import * as Yup from 'yup';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import {
    Link,
    useNavigate
} from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
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
            navigate('/menu');
        }
    });

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
                    <form onSubmit={formik.handleSubmit}>
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
                                Sign in as customer
                            </Typography>
                        </Box>
                        <Grid
                            container
                            spacing={3}
                        >
                        </Grid>
                        <Box
                            sx={{
                                pb: 1,
                                pt: 3
                            }}
                        >
                            <Typography
                                align="center"
                                color="textSecondary"
                                variant="body1"
                            >
                                or sign in as
                                {' '}

                                <Link
                                    to="/admin/login"
                                    color="primary"
                                    underline="always"
                                    variant="subtitle2"
                                >
                                    an Admin
                                </Link>

                            </Typography>
                        </Box>
                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            fullWidth
                            helperText={formik.touched.password && formik.errors.password}
                            label="Password"
                            margin="normal"
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.password}
                            variant="outlined"
                        />
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign In Now
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
        </>
    );
};

export default Login;
