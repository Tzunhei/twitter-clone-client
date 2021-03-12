import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { api } from '@api';
import { signIn } from 'next-auth/client';
import { Controller, useForm } from 'react-hook-form';
import { ApiSignUp } from 'types/api';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(1),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
interface ISignUpFormInput {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
  biography: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  password: yup.string().required(),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'passwords must match'),
  biography: yup.string(),
});

const SignUpForm = () => {
  const classes = useStyles();

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ISignUpFormInput) => {
    const newUser: ApiSignUp = {
      email: data.email,
      password: data.password,
      username: data.username,
      first_name: data.first_name,
      last_name: data.last_name,
      biography: data.biography,
    };
    const user = await api.signUp(newUser);
    console.log(user);
    signIn('credentials', {
      username: user.username,
      password: user.password,
      callbackUrl: 'http://localhost:3005',
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column">
        <Box mt={1}>
          <Typography variant="h6">Profile</Typography>
          <Divider />
        </Box>
        <Controller
          inputProps={{ 'data-testid': 'email-input' }}
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          name="email"
          label="Email"
          defaultValue=""
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <Controller
          inputProps={{ 'data-testid': 'username-input' }}
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          name="username"
          label="Username"
          defaultValue=""
          error={Boolean(errors.username)}
          helperText={errors.username?.message}
        />
        <Controller
          inputProps={{ 'data-testid': 'first_name-input' }}
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          name="first_name"
          label="First name"
          defaultValue=""
          error={Boolean(errors.first_name)}
          helperText={errors.first_name?.message}
        />
        <Controller
          inputProps={{ 'data-testid': 'last_name-input' }}
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          name="last_name"
          label="Last name"
          defaultValue=""
          error={Boolean(errors.last_name)}
          helperText={errors.last_name?.message}
        />
        <Controller
          inputProps={{ 'data-testid': 'biography-input' }}
          multiline
          rows={4}
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          name="biography"
          label="Tell us about yourself"
          defaultValue=""
          error={Boolean(errors.biography)}
          helperText={errors.biography?.message}
        />
        <Box mt={1}>
          <Typography variant="h6">Password</Typography>
          <Divider />
        </Box>
        <Controller
          inputProps={{ 'data-testid': 'password-input' }}
          type="password"
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          name="password"
          label="Password"
          defaultValue=""
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
        <Controller
          inputProps={{ 'data-testid': 'password_confirmation-input' }}
          type="password"
          as={TextField}
          variant="outlined"
          margin="normal"
          control={control}
          name="password_confirmation"
          label="Confirm your password"
          defaultValue=""
          error={Boolean(errors.password_confirmation)}
          helperText={errors.password_confirmation?.message}
        />
      </Box>
      <Box mt={2}>
        <Button fullWidth color="primary" variant="contained" type="submit">
          Sign up
        </Button>
      </Box>
    </form>
  );
};

export default SignUpForm;
