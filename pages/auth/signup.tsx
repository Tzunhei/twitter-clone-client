import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  TextField,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';

interface ISignUpFormInput {
  username: string;
  first_name: string;
  last_name: string;
  biography: string;
}

const SignUp = () => {
  const { control, handleSubmit, register } = useForm<ISignUpFormInput>();

  const onSubmit = (data: ISignUpFormInput) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader title="Sign Up" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <TextField
                    name="username"
                    inputRef={register}
                    onChange={onChange}
                    value={value}
                    label="Username"
                  />
                )}
              />
              <Controller
                name="first_name"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <TextField
                    name="first_name"
                    inputRef={register}
                    onChange={onChange}
                    value={value}
                    label="First name"
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <TextField
                    name="last_name"
                    inputRef={register}
                    onChange={onChange}
                    value={value}
                    label="Last name"
                  />
                )}
              />
              <Controller
                name="biography"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <TextField
                    multiline
                    rows={4}
                    name="biography"
                    inputRef={register}
                    onChange={onChange}
                    value={value}
                    label="Biography"
                  />
                )}
              />
            </Box>
          </CardContent>
          <Box justifyContent="flex-end">
            <CardActions>
              <Button type="submit">Sign up</Button>
            </CardActions>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default SignUp;
