import axios from 'axios';
import { ApiUser } from 'types/api';

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
  login: async (username: string, password: string): Promise<ApiUser> => {
    const res = await instance.post('/auth/login', { username, password });
    return res.data;
  },
};
