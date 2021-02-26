import { Button } from '@material-ui/core';
import { signIn } from 'next-auth/client';

const SignIn = () => {
  return (
    <div>
      <Button
        onClick={() =>
          signIn('google', { callbackUrl: 'http://localhost:3005/home' })
        }
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignIn;
