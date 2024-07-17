import { Button, TextField, Container, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSignInMutation } from '../services/userApi';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short').required('Required'),
});

const SignIn = () => {
  const [signIn] = useSignInMutation();
  const handleSingIn = async (values) => {
    try {
      const response = await signIn(values);
      console.log('Sign In successful:', response);
    } catch (error) {
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
          initialValues={{ email: '', password: '' }}
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
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignIn;
