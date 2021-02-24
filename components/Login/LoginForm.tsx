import { Button, TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type LoginDto = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginDto) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={TextField}
        control={control}
        name="email"
        label="email"
        defaultValue=""
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
      <Controller
        as={TextField}
        control={control}
        type="password"
        name="password"
        label="password"
        defaultValue=""
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
