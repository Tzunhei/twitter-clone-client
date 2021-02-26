import { Button } from '@material-ui/core';
import { signOut } from 'next-auth/client';

const Home = () => {
  return (
    <div>
      <p>User page</p>
      <Button
        onClick={() =>
          signOut({ callbackUrl: 'http://localhost:3005/auth/signin' })
        }
      >
        Sign out
      </Button>
    </div>
  );
};

export default Home;
