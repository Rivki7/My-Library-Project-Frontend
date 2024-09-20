import { Button, TextField, Container, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSignInMutation } from '../services/userApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { useState } from 'react';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short').required('Required'),
});

const SignIn = () => {
  const [signIn, { isLoading, isSuccess, isError, error: signInError }] =
    useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const handleSingIn = async (values) => {
    try {
      const user = await signIn(values).unwrap();
      if (user) {
        dispatch(loginUser(user));
        navigate('/user');
        console.log('Sign In successful:', user);
      } else {
        setError('Invalid email or password');
        console.error('Sign In failed: User is null');
      }
      // if (response.status === 200) {
      //   dispatch(loginUser(response.data));
      //   navigate('/user');
      //   console.log('Sign In successful:', response);
      // } else {
      //   setError('One or more of the fields are invalid');
      //   console.error('Sign In failed:', response);
      // }
    } catch (error) {
      //  try {
      //   const response = await signIn(values);
      //   console.log(response);
      //   if (response.status === 200) {
      //     dispatch(loginUser(response.data));
      //     navigate('/user');
      //     console.log('Sign In successful:', response);
      //   } else {
      //     setError('One or more of the fields are invalid');
      //     console.error('Sign In failed:', response);
      //   }
      // }
      setError(signInError?.data?.message || 'Sign In failed');
      console.error('Sign In failed:', error);
    }
  };
  return (
    <Container component='main' maxWidth='xs'>
      <div>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <Formik
          initialValues={{ email: 'Errol@Harrison.com', password: '12345678' }}
          validationSchema={SignInSchema}
          onSubmit={(values) => handleSingIn(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                variant='outlined'
                margin='normal'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                variant='outlined'
                margin='normal'
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              {error && <Typography>{error}</Typography>}{' '}
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                {isLoading ? 'signing in...' : 'Sign In'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignIn;
