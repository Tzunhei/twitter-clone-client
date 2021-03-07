import { Button } from '@material-ui/core';
import { signOut, useSession } from 'next-auth/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!loading && !session) {
    router.push('/auth/signin');
  }

  return (
    <div>
      <Head>
        <title>Twitter clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
}
