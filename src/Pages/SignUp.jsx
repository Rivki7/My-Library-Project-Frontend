import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Typography, Link, TextField, Button, Grid } from '@mui/material';
import { useSignUpMutation } from '../services/userApi';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phoneNumber1: Yup.string().required('Primary Phone Number is required'),
  phoneNumber2: Yup.string().required('Secondary Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  birthDate: Yup.date().required('Birth Date is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUp = () => {
  const [signUp] = useSignUpMutation();
  const handleSignUp = async (values) => {
    console.log(values);
    try {
      const response = await signUp(values).unwrap();
      console.log('Signup successful:', response);
      // You can handle redirection or display a success message here
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle the error accordingly
    }
  };
  return (
    <Formik
      initialValues={{
        firstName: 'Dorian',
        lastName: 'Vincent',
        phoneNumber1: '5269857458',
        phoneNumber2: '5896521478',
        email: 'dorian@vincent.com',
        birthDate: '',
        address: 'street',
        city: '',
        password: '123456789',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        handleSignUp(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name='firstName'
                label='First Name'
                fullWidth
                error={touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name='lastName'
                label='Last Name'
                fullWidth
                error={touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name='phoneNumber1'
                label='Primary Phone Number'
                fullWidth
                error={touched.phoneNumber1 && !!errors.phoneNumber1}
                helperText={touched.phoneNumber1 && errors.phoneNumber1}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name='phoneNumber2'
                label='Secondary Phone Number'
                fullWidth
                error={touched.phoneNumber2 && !!errors.phoneNumber2}
                helperText={touched.phoneNumber2 && errors.phoneNumber2}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name='email'
                label='Email'
                fullWidth
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name='birthDate'
                label='Birth Date'
                type='date'
                InputLabelProps={{ shrink: true }}
                fullWidth
                error={touched.birthDate && !!errors.birthDate}
                helperText={touched.birthDate && errors.birthDate}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name='address'
                label='Address'
                fullWidth
                error={touched.address && !!errors.address}
                helperText={touched.address && errors.address}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name='city'
                label='City'
                fullWidth
                error={touched.city && !!errors.city}
                helperText={touched.city && errors.city}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name='password'
                label='Password'
                type='password'
                fullWidth
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
              >
                Sign Up
              </Button>
              <Grid item xs={12}>
                <Typography
                  variant='body2'
                  align='center'
                  style={{ marginTop: '16px' }}
                >
                  Already have an account?{' '}
                  <Link href='/signin' underline='hover'>
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
