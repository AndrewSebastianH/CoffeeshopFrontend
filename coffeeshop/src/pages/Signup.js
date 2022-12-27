import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    TextField,
    Typography
} from '@mui/material';
import {
    Link,
    useNavigate
} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Signup = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            firstName: '',
            password: '',
            policy: false
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required(
                    'Email is required'),
            firstName: Yup
                .string()
                .max(255)
                .required('First name is required'),
            username: Yup
                .string()
                .max(255)
                .required('Username is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required'),
            policy: Yup
                .boolean()
                .oneOf(
                    [true],
                    'This field must be checked'
                )
        }),
        onSubmit: () => {
            navigate('/signin');
        }
    });

    return (
        <>
            <Box
                component="main"
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

                        >
                            Back
                        </Button>
                    </Link>
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{my: 3}}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Create a new account
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                Use your email to create a new account
                            </Typography>
                        </Box>
                        <TextField
                            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                            fullWidth
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            label="First Name"
                            margin="normal"
                            name="firstName"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.username && formik.errors.username)}
                            fullWidth
                            helperText={formik.touched.username && formik.errors.username}
                            label="Username"
                            margin="normal"
                            name="username"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            variant="outlined"
                        />
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
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                ml: -1
                            }}
                        >
                            <Checkbox
                                checked={formik.values.policy}
                                name="policy"
                                onChange={formik.handleChange}
                            />
                            <Typography
                                color="textSecondary"
                                variant="body2"
                            >
                                I have read the
                                {' '}
                                <Link
                                    to="#"
                                    color="primary"
                                    underline="always"
                                    variant="subtitle2"
                                >
                                    Terms and Conditions
                                </Link>
                            </Typography>
                        </Box>
                        {Boolean(formik.touched.policy && formik.errors.policy) && (
                            <FormHelperText error>
                                {formik.errors.policy}
                            </FormHelperText>
                        )}
                        <Box sx={{py: 2}}>
                            <Button
                                color="primary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign Up Now
                            </Button>
                        </Box>
                        <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            Have an account?
                            {' '}
                            <Link
                                to="/"
                                variant="subtitle2"
                                underline="hover"
                            >
                                Sign In
                            </Link>
                        </Typography>
                    </form>
                </Container>
            </Box>
        </>
    );
};

export default Signup;
