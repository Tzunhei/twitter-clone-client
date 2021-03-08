import { api } from 'api';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, {
    providers: [
      Providers.Credentials({
        name: 'credentials',
        credentials: {
          username: {
            label: 'Username',
            type: 'text',
            placeholder: 'Your username',
          },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          const user = await api.login(
            credentials.username,
            credentials.password,
          );
          if (user) {
            return user;
          } else {
            return null;
          }
        },
      }),
    ],
    secret: process.env.AUTH_SECRET,
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  });
