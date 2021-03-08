import { Box, Button, Link, makeStyles, TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import AuthContainer from './AuthContainer';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(1),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

type LoginDto = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const classes = useStyles();
  const router = useRouter();

  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginDto) => {
    signIn('credentials', {
      username: data.username,
      password: data.password,
      callbackUrl: 'http://localhost:3005',
    });
  };

  return (
    <AuthContainer title="Sign In">
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          inputProps={{ 'data-testid': 'username-input' }}
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          name="username"
          label="username"
          defaultValue=""
          error={Boolean(errors.username)}
          helperText={errors.username?.message}
        />
        <Controller
          inputProps={{ 'data-testid': 'password-input' }}
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          type="password"
          name="password"
          label="password"
          defaultValue=""
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
        <Box textAlign="center" marginY={2}>
          <Link variant="body2">Forgot password ?</Link>
          {' - '}
          <Link onClick={() => router.push('signup')} variant="body2">
            Sign up
          </Link>
        </Box>
        <Button color="primary" variant="contained" type="submit">
          Sign In
        </Button>
      </form>
    </AuthContainer>
  );
};

export default LoginForm;
