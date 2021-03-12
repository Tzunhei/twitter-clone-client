import axios from 'axios';
import { ApiSignUp, ApiUser } from 'types/api';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

export const api = {
  getUserByEmail: async (
    email: string | null | undefined,
  ): Promise<ApiUser> => {
    const res = await instance.get('/users/email', { params: { email } });
    return res.data;
  },
  getUserByUsername: async (username: string): Promise<ApiUser> => {
    const res = await instance.get('/users/username', { params: { username } });
    return res.data;
  },
  signUp: async (newUser: ApiSignUp): Promise<ApiUser> => {
    try {
      const res = await instance.post('/users', newUser);
      return res.data;
    } catch (e) {
      console.log(e);
      throw new Error('tes');
    }
  },
  login: async (username: string, password: string): Promise<ApiUser> => {
    try {
      const res = await instance.post('/auth/login', { username, password });
      return res.data;
    } catch (e) {
      throw new Error('Please enter a correct username and password.');
    }
  },
};
